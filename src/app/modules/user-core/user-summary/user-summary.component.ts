import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Observer, of, Subject, EMPTY, Subscription } from 'rxjs';
import { catchError, map, filter, switchMap, tap } from 'rxjs/operators';

import { UserModel, UserSummaryAttribute, UserSummaryModel } from '../../../models/user-model';
import { UserCoreService } from '../../../service/user-core.service';

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit, OnDestroy {
  userReady: boolean = false;
  user: UserModel = null;
  userSubscription: Subscription = null;
  summary: UserSummaryModel[] = null;
  summarySubscription: Subscription = null;
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

        self.summarySubscription = self.userCoreService.getUserSummary(self.user.id)
          .subscribe(summary => {
            self.summary = summary;
            self.userReady = true;

            console.log('UserCore Service (Summary) completed: ', self.summary);
          });
      });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    this.summarySubscription.unsubscribe();
  }

}
