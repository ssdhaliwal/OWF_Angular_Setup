import { Component, OnInit } from '@angular/core';

import { UserModel } from '../../models/user-model';
import { UserCoreService } from '../../service/user-core.service';

/* do not use providers in component for shared services */
@Component({
  selector: 'app-user-core',
  templateUrl: './user-core.component.html',
  styleUrls: ['./user-core.component.css']
})
export class UserCoreComponent implements OnInit {
  userReady: boolean = false;
  user: UserModel = null;
  userCoreService: UserCoreService;
  intvl1: number;

  constructor(userCoreService: UserCoreService) {
    this.userCoreService = userCoreService;
  }

  ngOnInit() {
    let self = this;

    self.user = self.userCoreService.getUser();
    if (self.user === null) {
      this.intvl1 = <any>setInterval(function() {
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
