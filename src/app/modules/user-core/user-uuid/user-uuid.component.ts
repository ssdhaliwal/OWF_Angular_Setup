import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Observer, of, Subject, EMPTY, Subscription } from 'rxjs';
import { catchError, map, filter, switchMap, tap } from 'rxjs/operators';

import { UserModel } from '../../../models/user-model';
import { UserCoreService } from '../../../service/user-core.service';

/* do not use providers in component for shared services */
@Component({
  selector: 'app-user-uuid',
  templateUrl: './user-uuid.component.html',
  styleUrls: ['./user-uuid.component.css']
})
export class UserUUIDComponent implements OnInit, OnDestroy {
  userReady: boolean = false;
  uuid: string = null;
  uuidSubscription: Subscription = null;
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

    self.uuidSubscription = self.userCoreService.getUUID()
      .subscribe(uuidModal => {
        self.uuid = uuidModal;
        self.userReady = true;
      });
  }

  ngOnDestroy() {
    this.uuidSubscription.unsubscribe();
  }

}
