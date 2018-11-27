import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Observer, of, Subject, EMPTY, Subscription } from 'rxjs';
import { catchError, map, filter, switchMap, tap } from 'rxjs/operators';

import { UserModel, UserDashboardAttribute, UserDashboardModel } from '../../../models/user-model';
import { UserCoreService } from '../../../service/user-core.service';

@Component({
  selector: 'app-user-dashboards',
  templateUrl: './user-dashboards.component.html',
  styleUrls: ['./user-dashboards.component.css']
})
export class UserDashboardsComponent implements OnInit, OnDestroy {
  userReady: boolean = false;
  user: UserModel = null;
  userSubscription: Subscription = null;
  dashboards: UserDashboardModel = null;
  dashboardSubscription: Subscription = null;
  userCoreService: UserCoreService;

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

    self.userSubscription = self.userCoreService.getUser()
      .subscribe(userModal => {
        self.user = userModal;

        self.dashboardSubscription = self.userCoreService.getDashboard(self.user.id)
          .subscribe(userDashboardModel => {
            self.dashboards = userDashboardModel;
            self.userReady = true;

            console.log('UserCore Service (Dashboards) completed: ', userDashboardModel);
          });
      });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    this.dashboardSubscription.unsubscribe();
  }
}
