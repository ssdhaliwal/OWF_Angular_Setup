import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserModel, UserGroupAttribute, UserGroupModel } from '../../../models/user-model';
import { UserCoreService } from '../../../service/user-core.service';

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.css']
})
export class UserGroupsComponent implements OnInit {
  userReady: boolean = false;
  user: UserModel = null;
  groups: UserGroupModel[] = null;
  userCoreService: UserCoreService;
  intvl1: number;
  intvl2: number;

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

    self.user = self.userCoreService.getUser();
    if (self.user === null) {
      self.intvl1 = <any>setInterval(function() {
        self.user = self.userCoreService.getUser();

        if (self.user !== null) {
          clearInterval(self.intvl1);
          console.log('UserCore Service (User) completed: ', self.user);
        }
      }, 250);
    } else {
      if (self.user !== null) {
        console.log('UserCore Service (User) completed-2: ', self.user);
      }
    }

    // retrieve the user summary info
    self.intvl2 = <any>setInterval(function() {
      if (self.user !== null) {
        clearInterval(self.intvl2);

        self.userCoreService.getUserGroups(self.user.id)
          .subscribe(groups => {
            self.groups = groups;
            self.userReady = true;

            console.log('UserCore Service (Groups) completed: ', self.groups);
          });
      }
    }, 250);
  }

}
