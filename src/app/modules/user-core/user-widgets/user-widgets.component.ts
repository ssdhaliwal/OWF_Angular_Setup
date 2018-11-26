import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserModel, UserWidgetAttribute, UserWidgetModel } from '../../../models/user-model';
import { UserCoreService } from '../../../service/user-core.service';

@Component({
  selector: 'app-user-widgets',
  templateUrl: './user-widgets.component.html',
  styleUrls: ['./user-widgets.component.css']
})
export class UserWidgetsComponent implements OnInit {
  userReady: boolean = false;
  widgets: UserWidgetModel[] = null;
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
    // wait until the user service is complete
    let self = this;

    // retrieve the user summary info
    self.widgets = self.userCoreService.getWidgets();
    if (self.widgets === null) {
      self.intvl1 = <any>setInterval(function() {
        self.widgets = self.userCoreService.getWidgets();

        // if (self.widgets !== null) {
        self.userReady = true;
        console.log('UserCore Service (Widgets) completed: ', self.widgets);
        clearInterval(self.intvl1);
        // }
      }, 250);
    } else {
      if (self.widgets !== null) {
        self.userReady = true;
        console.log('UserCore Service (Widgets) completed-2: ', self.widgets);
      }
    }
  }

}
