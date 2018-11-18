import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/primeng';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';

import { MenuComponent } from './components/menu/menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { OwfCoreComponent } from './modules/owf-core/owf-core.component';
import { OwfContainerComponent } from './modules/owf-core/owf-container/owf-container.component';
import { AppConfigurationComponent } from './modules/owf-core/app-configuration/app-configuration.component';

import { UserCoreComponent } from './modules/user-core/user-core.component';
import { UserInformationComponent } from './modules/user-core/user-information/user-information.component';
import { UserUUIDComponent } from './modules/user-core/user-uuid/user-uuid.component';
import { UserSummaryComponent } from './modules/user-core/user-summary/user-summary.component';
import { UserGroupsComponent } from './modules/user-core/user-groups/user-groups.component';
import { UserDashboardsComponent } from './modules/user-core/user-dashboards/user-dashboards.component';
import { UserWidgetsComponent } from './modules/user-core/user-widgets/user-widgets.component';

const appRoutes: Routes = [
  {
    path: 'owf', component: OwfCoreComponent, outlet: 'owfoutlet',
    children: [
      {
        path: 'info',
        component: OwfContainerComponent
      }, {
        path: 'config',
        component: AppConfigurationComponent
      }
    ]
  },
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
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'message/:type', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent, outlet: 'owfoutlet' },
  { path: '**', component: PageNotFoundComponent, outlet: 'useroutlet' },
  { path: '**', redirectTo: 'message' }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageNotFoundComponent,
    OwfCoreComponent,
    OwfContainerComponent,
    AppConfigurationComponent,
    UserCoreComponent,
    UserInformationComponent,
    UserUUIDComponent,
    UserSummaryComponent,
    UserDashboardsComponent,
    UserGroupsComponent,
    UserWidgetsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { /* enableTracing: true */ }
    ),
    BrowserModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MenubarModule,
    ButtonModule,
    FieldsetModule,
    TabViewModule,
    CardModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
