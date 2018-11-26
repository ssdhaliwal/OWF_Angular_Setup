import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserModel } from '../../../models/user-model';
import { UserCoreService } from '../../../service/user-core.service';

/* do not use providers in component for shared services */
@Component({
  selector: 'app-user-uuid',
  templateUrl: './user-uuid.component.html',
  styleUrls: ['./user-uuid.component.css']
})
export class UserUUIDComponent implements OnInit {
  userReady: boolean = false;
  uuid: string = null;
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

    self.uuid = self.userCoreService.getUUID();
    if (self.uuid === null) {
      self.intvl1 = <any>setInterval(function() {
        self.uuid = self.userCoreService.getUUID();

        if (self.uuid !== null) {
          self.userReady = true;
          console.log('UserCore Service (UUID) completed: ', self.uuid);
          clearInterval(self.intvl1);
        }
      }, 250);
    } else {
      if (self.uuid !== null) {
        self.userReady = true;
        console.log('UserCore Service (UUID) completed-2: ', self.uuid);
      }
    }
  }
}
