import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Observer, of, Subject, EMPTY, Subscription } from 'rxjs';
import { catchError, map, filter, switchMap, tap } from 'rxjs/operators';

import { UserModel } from '../../../models/user-model';
import { UserCoreService } from '../../../service/user-core.service';

/* do not use providers in component for shared services */
@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit, OnDestroy {
  userReady: boolean = false;
  user: UserModel = null;
  userSubscription: Subscription = null;
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
    let self = this;

    self.userSubscription = self.userCoreService.getUser()
      .subscribe(userModal => {
        self.user = userModal;
        self.userReady = true;
        console.log('UserCore Service (User) completed-2: ', self.user);
      });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
