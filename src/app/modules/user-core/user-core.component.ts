import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Observer, of, Subject, EMPTY, Subscription } from 'rxjs';
import { catchError, map, filter, switchMap, tap } from 'rxjs/operators';

import { UserModel } from '../../models/user-model';
import { UserCoreService } from '../../service/user-core.service';

/* do not use providers in component for shared services */
@Component({
  selector: 'app-user-core',
  templateUrl: './user-core.component.html',
  styleUrls: ['./user-core.component.css']
})
export class UserCoreComponent implements OnInit, OnDestroy {
  userReady: boolean = false;
  user: UserModel = null;
  userSubscription: Subscription = null;
  userCoreService: UserCoreService;

  constructor(userCoreService: UserCoreService) {
    this.userCoreService = userCoreService;
  }

  ngOnInit() {
    let self = this;

    self.userSubscription = self.userCoreService.getUser()
      .subscribe(userModal => {
        self.user = userModal;
        self.userReady = true;
        console.log('UserCore Service (User) completed: ', self.user);
      });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
