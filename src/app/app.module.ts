import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { GrowlModule, MessageModule, MessagesModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { MenubarModule } from 'primeng/menubar';

import { MenuComponent } from './components/menu/menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { OwfCoreModule } from './modules/owf-core/owf-core.module';
import { UserCoreModule } from './modules/user-core/user-core.module';

import { SharedServicesModule } from './modules/shared-services.module';

const appRoutes: Routes = [
  {
    path: 'owf', loadChildren: './modules/owf-core/owf-core.module#OwfCoreModule'
  },
  { path: 'user', loadChildren: './modules/user-core/user-core.module#UserCoreModule' },
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
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { /* enableTracing: true */ }
    ),
    BrowserModule,
    OwfCoreModule,
    UserCoreModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GrowlModule,
    MessageModule,
    MessagesModule,
    MenubarModule,
    ButtonModule,
    SharedServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
