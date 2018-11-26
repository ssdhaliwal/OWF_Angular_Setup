import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserModel } from '../../../models/user-model';
import { UserCoreService } from '../../../service/user-core.service';

/* do not use providers in component for shared services */
@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {
  userReady: boolean = false;
  user: UserModel = null;
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
    let self = this;

    self.user = self.userCoreService.getUser();
    if (self.user === null) {
      self.intvl1 = <any>setInterval(function() {
        self.user = self.userCoreService.getUser();

        if (self.user !== null) {
          self.userReady = true;
          console.log('UserCore Service (User) completed: ', self.user);
          clearInterval(self.intvl1);
        }
      }, 250);
    } else {
      if (self.user !== null) {
        self.userReady = true;
        console.log('UserCore Service (User) completed-2: ', self.user);
      }
    }
  }
}
