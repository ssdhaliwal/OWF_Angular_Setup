import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Observer, of, Subject, EMPTY, Subscription } from 'rxjs';
import { catchError, map, filter, switchMap, tap } from 'rxjs/operators';

import { UserModel, UserGroupAttribute, UserGroupModel } from '../../../models/user-model';
import { UserCoreService } from '../../../service/user-core.service';

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.css']
})
export class UserGroupsComponent implements OnInit, OnDestroy {
  userReady: boolean = false;
  user: UserModel = null;
  userSubscription: Subscription = null;
  groups: UserGroupModel[] = null;
  groupsSubscription: Subscription = null;
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

        self.groupsSubscription = self.userCoreService.getUserGroups(self.user.id)
          .subscribe(groups => {
            self.groups = groups;
            self.userReady = true;

            console.log('UserCore Service (Groups) completed: ', self.groups);
          });
      });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    this.groupsSubscription.unsubscribe();
  }

}
