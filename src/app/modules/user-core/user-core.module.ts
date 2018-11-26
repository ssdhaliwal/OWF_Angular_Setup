import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FieldsetModule } from 'primeng/fieldset';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';

import { SharedServicesModule } from '../shared-services.module';

import { UserCoreComponent } from '../user-core/user-core.component';
import { UserInformationComponent } from '../user-core/user-information/user-information.component';
import { UserUUIDComponent } from '../user-core/user-uuid/user-uuid.component';
import { UserSummaryComponent } from '../user-core/user-summary/user-summary.component';
import { UserGroupsComponent } from '../user-core/user-groups/user-groups.component';
import { UserDashboardsComponent } from '../user-core/user-dashboards/user-dashboards.component';
import { UserWidgetsComponent } from '../user-core/user-widgets/user-widgets.component';

const appRoutes: Routes = [
  { path: 'user', component: UserCoreComponent, pathMatch: 'full', outlet: 'useroutlet' },
  {
    path: 'user/:id', component: UserCoreComponent, outlet: 'useroutlet',
    children: [
      {
        path: 'info',
        component: UserInformationComponent
      },
      {
        path: 'uuid',
        component: UserUUIDComponent
      },
      {
        path: 'summary',
        component: UserSummaryComponent
      },
      {
        path: 'dashboards',
        component: UserDashboardsComponent
      },
      {
        path: 'groups',
        component: UserGroupsComponent
      },
      {
        path: 'widgets',
        component: UserWidgetsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [UserCoreComponent,
    UserInformationComponent,
    UserUUIDComponent,
    UserSummaryComponent,
    UserGroupsComponent,
    UserDashboardsComponent,
    UserWidgetsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FieldsetModule,
    TabViewModule,
    CardModule,
    PanelModule,
    SharedServicesModule
  ],
  exports: [UserCoreComponent,
    UserInformationComponent,
    UserUUIDComponent,
    UserSummaryComponent,
    UserGroupsComponent,
    UserDashboardsComponent,
    UserWidgetsComponent]
})
export class UserCoreModule { }
