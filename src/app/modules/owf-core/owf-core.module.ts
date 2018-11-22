import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FieldsetModule } from 'primeng/fieldset';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';

import { OwfCoreComponent } from '../owf-core/owf-core.component';
import { OwfContainerComponent } from '../owf-core/owf-container/owf-container.component';
import { AppConfigurationComponent } from '../owf-core/app-configuration/app-configuration.component';

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
  }
];

@NgModule({
  declarations: [OwfCoreComponent,
    OwfContainerComponent,
    AppConfigurationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FieldsetModule,
    TabViewModule,
    CardModule,
    PanelModule
  ],
  exports: [OwfCoreComponent,
    OwfContainerComponent,
    AppConfigurationComponent]
})
export class OwfCoreModule { }
