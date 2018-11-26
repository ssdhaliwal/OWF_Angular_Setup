import { Injectable } from '@angular/core';
import { Observable, of, EMPTY } from 'rxjs';
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

declare var OWF: any;
declare var Ozone: any;

@Injectable({
  providedIn: 'root'
})
export class UserCoreService {
  user: UserModel = null;
  uuid: string = null;
  summary: Observable<UserSummaryModel[]> = null;
  groups: Observable<UserGroupModel[]> = null;
  dashboards: UserDashboardModel = null;
  widgets: UserWidgetModel[] = null;
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

  getUser() {
    if (this.user === null) {
      this.retrieveOwfUserInfo();
    }

    return this.user;
  }

  private retrieveOwfUserInfo() {
    Ozone.pref.PrefServer.getCurrentUser({
      onSuccess: this.retrieveOwfUserSuccess.bind(this),
      onFailure: this.retrieveOwfUserError.bind(this)
    });
  }

  private retrieveOwfUserSuccess(userInfo) {
    let user = new UserModel(userInfo.currentUserName, userInfo.currentUser,
      userInfo.currentUserPrevLogin, userInfo.currentId, userInfo.email);

    console.log('UserCore Service (retrieveOwfUserSuccess) completed: ', user);
    this.user = user;
  }

  private retrieveOwfUserError(error, status) {
    console.log('UserCoreService, retrieveOwfUserError()', error, status);
  }

  getUUID() {
    if (this.uuid === null) {
      this.retrieveUserUUID();
    }

    return this.uuid;
  }

  private retrieveUserUUID() {
    OWF.Preferences.getUserPreference({
      namespace: 'widget.base.user',
      name: 'uuid',
      onSuccess: this.retrieveUserUUIDSuccess.bind(this),
      onFailure: this.retrieveUserUUIDError.bind(this)
    });
  }

  private retrieveUserUUIDSuccess(prefValue) {
    let uuid = JSON.parse(prefValue.value);

    console.log('UserCore Service (retrieveUserUUIDSuccess) completed: ', uuid);
    this.uuid = uuid;
  }

  private retrieveUserUUIDError(error, status) {
    console.log('UserCoreService, retrieveUserUUIDError()', error, status);

    if (status !== 404) {
      this.uuid = OWF.Util.guid();
      this.setUserUUID(this.uuid);
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

  getUserSummary(id: string) {
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

  getUserGroups(id: string) {
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

  getDashboard(userId: string) {
    if (this.dashboards === null) {
      this.retrieveOwfUserDashboardInfo(userId);
    }

    return this.dashboards;
  }

  private retrieveOwfUserDashboardInfo(userId: string) {
    let searchConfig = {
      user_id: userId,
      onSuccess: this.retrieveOwfUserDashboardSuccess.bind(this),
      onFailure: this.retrieveOwfUserDashboardError.bind(this)
    };
    OWF.Preferences.findDashboards(searchConfig);
  }

  private retrieveOwfUserDashboardSuccess(dashboardInfo) {
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
    this.dashboards = dashboards;
  }

  private retrieveOwfUserDashboardError(error, status) {
    console.log('UserCoreService, retrieveOwfUserDashboardError()', error, status);
  }

  getWidgets() {
    if (this.widgets === null) {
      this.retrieveOwfUserWidgetsInfo();
    }

    return this.widgets;
  }

  private retrieveOwfUserWidgetsInfo() {
    let searchConfig = {
      userOnly: true,
      onSuccess: this.retrieveOwfUserWidgetsSuccess.bind(this),
      onFailure: this.retrieveOwfUserWidgetsError.bind(this)
    };
    OWF.Preferences.findWidgets(searchConfig);
  }

  private retrieveOwfUserWidgetsSuccess(widgetInfo) {
    let widgets = widgetInfo;

    console.log('UserCore Service (retrieveOwfUserWidgetsSuccess) completed: ', widgets);
    this.widgets = widgets;
  }

  private retrieveOwfUserWidgetsError(error, status) {
    console.log('UserCoreService, retrieveOwfUserWidgetsError()', error, status);
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
