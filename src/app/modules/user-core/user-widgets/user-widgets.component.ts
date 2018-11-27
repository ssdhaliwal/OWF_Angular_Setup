import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Observer, of, Subject, EMPTY, Subscription } from 'rxjs';
import { catchError, map, filter, switchMap, tap } from 'rxjs/operators';

import { UserModel, UserWidgetAttribute, UserWidgetModel } from '../../../models/user-model';
import { UserCoreService } from '../../../service/user-core.service';

@Component({
  selector: 'app-user-widgets',
  templateUrl: './user-widgets.component.html',
  styleUrls: ['./user-widgets.component.css']
})
export class UserWidgetsComponent implements OnInit, OnDestroy {
  userReady: boolean = false;
  widgets: UserWidgetModel[] = null;
  widgetsSubscription: Subscription = null;
  userCoreService: UserCoreService;
  intvl1: number;

  constructor(private route: ActivatedRoute, userCoreService: UserCoreService) {
    this.userCoreService = userCoreService;

    this.route.parent.params.subscribe(params => {
      console.log('1001-02', params);
      if (params['id']) {
        console.log('1001-02-01, userInfo: ', params['id']);
      }
    });
  }

  ngOnInit() {
    // wait until the user service is complete
    let self = this;

    // retrieve the user summary info
    self.widgetsSubscription = self.userCoreService.getWidgets()
      .subscribe(widgetModel => {
        self.widgets = widgetModel;
        self.userReady = true;
      });

  }

  ngOnDestroy() {
    this.widgetsSubscription.unsubscribe();
  }

}
