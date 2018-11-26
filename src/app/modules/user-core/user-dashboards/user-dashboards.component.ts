import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserModel, UserDashboardAttribute, UserDashboardModel } from '../../../models/user-model';
import { UserCoreService } from '../../../service/user-core.service';

@Component({
  selector: 'app-user-dashboards',
  templateUrl: './user-dashboards.component.html',
  styleUrls: ['./user-dashboards.component.css']
})
export class UserDashboardsComponent implements OnInit {
  userReady: boolean = false;
  user: UserModel = null;
  dashboards: UserDashboardModel = null;
  userCoreService: UserCoreService;
  intvl1: number;
  intvl2: number;
  intvl3: number;

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

        self.dashboards = self.userCoreService.getDashboard(self.user.id);
        if (self.dashboards === null) {
          self.intvl3 = <any>setInterval(function() {
            self.dashboards = self.userCoreService.getDashboard(self.user.id);

            if (self.dashboards !== null) {
              self.userReady = true;
              console.log('UserCore Service (Dashboards) completed: ', self.dashboards);
              clearInterval(self.intvl3);
            }
          }, 250);
        } else {
          if (self.dashboards !== null) {
            self.userReady = true;
            console.log('UserCore Service (Dashboards) completed-2: ', self.dashboards);
          }
        }
      }
    }, 250);
  }
}
