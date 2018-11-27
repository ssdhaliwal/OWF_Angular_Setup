import { Injectable } from '@angular/core';
import { Observable, Observer, of, Subject, EMPTY } from 'rxjs';
import { catchError, map, filter, switchMap, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as _ from 'lodash';

import { ConfigModel } from '../models/config-model';
import { OwfContainerModel } from '../models/owf-container-model';
import {
  UserModel, UserSummaryModel, UserGroupModel, UserDashboardAttribute, UserDashboardStack,
  UserDashboardModel, UserWidgetModel
} from '../models/user-model';

import { ConfigService } from './config-service';
import { OwfContainerService } from './owf-container-service';
import { NullTemplateVisitor } from '@angular/compiler';
import { dashCaseToCamelCase } from '@angular/animations/browser/src/util';
import { EMPTY_ARRAY } from '@angular/core/src/view';

declare var OWF: any;
declare var Ozone: any;

@Injectable({
  providedIn: 'root'
})
export class UserCoreService {
  user: Observable<UserModel> = null;
  uuid: Observable<string> = null;
  summary: Observable<UserSummaryModel[]> = null;
  groups: Observable<UserGroupModel[]> = null;
  dashboards: Observable<UserDashboardModel> = null;
  widgets: Observable<UserWidgetModel[]> = null;
  owfUrl: string = 'https://localhost:8443/owf';

  constructor(private http: HttpClient,
    private configService: ConfigService,
    private owfContainerService: OwfContainerService) {
  }

  getConfig() {
    return this.configService.getConfig();
  }

  getOwfContainerInfo() {
    return this.owfContainerService.getContainer();
  }

  getUser(): Observable<UserModel> {
    if (this.user === null) {
      this.user = new Observable((observer) => {
        this.retrieveOwfUserInfo(observer);
      });
    }

    return this.user;
  }

  private retrieveOwfUserInfo(observer) {
    Ozone.pref.PrefServer.getCurrentUser({
      onSuccess: this.retrieveOwfUserSuccess.bind(this, observer),
      onFailure: this.retrieveOwfUserError.bind(this, observer)
    });
  }

  private retrieveOwfUserSuccess(observer, userInfo) {
    let user = new UserModel(userInfo.currentUserName, userInfo.currentUser,
      userInfo.currentUserPrevLogin, userInfo.currentId, userInfo.email);

    console.log('UserCore Service (retrieveOwfUserSuccess) completed: ', user);
    observer.next(user);
  }

  private retrieveOwfUserError(observer, error, status) {
    let user: UserModel = null;
    console.log('UserCoreService, retrieveOwfUserError()', error, status);
    observer.next(user);
  }

  getUUID(): Observable<string> {
    if (this.uuid === null) {
      this.uuid = new Observable((observer) => {
        this.retrieveUserUUID(observer);
      });
    }

    return this.uuid;
  }

  private retrieveUserUUID(observer) {
    OWF.Preferences.getUserPreference({
      namespace: 'widget.base.user',
      name: 'uuid',
      onSuccess: this.retrieveUserUUIDSuccess.bind(this, observer),
      onFailure: this.retrieveUserUUIDError.bind(this, observer)
    });
  }

  private retrieveUserUUIDSuccess(observer, prefValue) {
    let uuid = JSON.parse(prefValue.value);

    console.log('UserCore Service (retrieveUserUUIDSuccess) completed: ', uuid);
    observer.next(uuid);
  }

  private retrieveUserUUIDError(observer, error, status) {
    console.log('UserCoreService, retrieveUserUUIDError()', error, status);

    if (status !== 404) {
      let uuid = OWF.Util.guid();
      observer.next(uuid);

      this.setUserUUID(uuid);
    }
  }

  private setUserUUID(uuid: string) {
    OWF.Preferences.setUserPreference({
      namespace: 'widget.base.user',
      name: 'uuid',
      value: JSON.stringify(uuid),
      onSuccess: this.setUserUUIDSuccess.bind(this),
      onFailure: this.setUserUUIDError.bind(this)
    });
  }

  private setUserUUIDSuccess(prefValue) {
    console.log('UserCore Service (setUserUUIDSuccess) completed: ', prefValue);
  }

  private setUserUUIDError(error, status) {
    console.log('UserCoreService, setUserUUIDError()', error, status);
  }

  getUserSummary(id: string): Observable<UserSummaryModel[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('testAdmin1:password')
      })
    };

    this.summary = this.http
      .get<UserSummaryModel[]>(this.owfUrl + '/user/' + id, httpOptions)
      .pipe(
        catchError(this.handleError('getUserSummary', [])),
        tap(console.log));

    return this.summary;
  }

  getUserGroups(id: string): Observable<UserGroupModel[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('testAdmin1:password')
      })
    };

    this.groups = this.http
      .get<UserGroupModel[]>(this.owfUrl + '/group?user_id=' + id, httpOptions)
      .pipe(
        catchError(this.handleError('getUserGroups', [])),
        tap(console.log));

    return this.groups;
  }

  getDashboard(userId: string): Observable<UserDashboardModel> {
    if (this.dashboards === null) {
      this.dashboards = new Observable((observer) => {
        this.retrieveOwfUserDashboardInfo(userId, observer);
      });
    }

    return this.dashboards;
  }

  private retrieveOwfUserDashboardInfo(userId: string, observer) {
    let searchConfig = {
      user_id: userId,
      onSuccess: this.retrieveOwfUserDashboardSuccess.bind(this, observer),
      onFailure: this.retrieveOwfUserDashboardError.bind(this, observer)
    };
    OWF.Preferences.findDashboards(searchConfig);
  }

  private retrieveOwfUserDashboardSuccess(observer, dashboardInfo) {
    let dashboards: UserDashboardModel = null;

    dashboardInfo.data.forEach(function(value) {
      let dashboard = new UserDashboardAttribute(value.createdDate, value.editedDate, value.description, value.guid,
        value.name, value.user.userId, value.isGroupDashboard, value.isDefault,
        value.locked, value.poblishedToStore, value.dashboardPosition, value.iconImageUrl,
        new UserDashboardStack(value.stack.approved, value.stack.id, value.stack.name,
          (value.stack.owner ? value.stack.owner.name : null), (value.stack.owner ? value.stack.owner.id : null), value.stack.imageUrl));

      if (dashboards === null) {
        dashboards = new UserDashboardModel(dashboardInfo.results, dashboardInfo.success, [dashboard]);
      } else {
        dashboards.attributes.push(dashboard);
      }
    });

    console.log('UserCore Service (retrieveOwfUserDashboardSuccess) completed: ', dashboards);
    observer.next(dashboards);
  }

  private retrieveOwfUserDashboardError(observer, error, status) {
    let dashboards: UserDashboardModel = null;

    console.log('UserCoreService, retrieveOwfUserDashboardError()', error, status);
    observer.next(dashboards);
  }

  getWidgets(): Observable<UserWidgetModel[]> {
    if (this.widgets === null) {
      this.widgets = new Observable((observer) => {
        this.retrieveOwfUserWidgetsInfo(observer);
      });
    }

    return this.widgets;
  }

  private retrieveOwfUserWidgetsInfo(observer) {
    let searchConfig = {
      userOnly: true,
      onSuccess: this.retrieveOwfUserWidgetsSuccess.bind(this, observer),
      onFailure: this.retrieveOwfUserWidgetsError.bind(this, observer)
    };
    OWF.Preferences.findWidgets(searchConfig);
  }

  private retrieveOwfUserWidgetsSuccess(observer, widgetInfo) {
    let widgets = widgetInfo;

    console.log('UserCore Service (retrieveOwfUserWidgetsSuccess) completed: ', widgets);
    observer.next(widgets);
  }

  private retrieveOwfUserWidgetsError(observer, error, status) {
    let widgets: UserWidgetModel[] = null;

    console.log('UserCoreService, retrieveOwfUserWidgetsError()', error, status);
    observer.next(widgets);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
