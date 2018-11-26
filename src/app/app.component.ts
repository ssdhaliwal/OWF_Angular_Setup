import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuNotificationService } from './service/menu-notification-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MenuNotificationService]
})
export class AppComponent implements OnInit {
  title = 'OWF Angular Sample Widget<br>w/Prime Faces NG';

  menuOption: string = 'AppConfig';

  constructor(private router: Router, private menuNotificationService: MenuNotificationService) {
    menuNotificationService.menuSubscriber$.subscribe(
      actionName => {
        console.log(`${actionName} received by AppComponent`);

        // check the menu item pressed and take action
        if (actionName === 'OWF Core') {
          this.menuOption = 'OwfCore';
          this.router.navigate([{
            outlets: {
              primary: ['message', 'notice', { message: 'Displaying OWF information!' }],
              owfoutlet: ['owf', 'info'],
              useroutlet: ['']
            }
          }]);
        } else
          if (actionName === 'App Config') {
            this.menuOption = 'AppConfig';
            this.router.navigate([{
              outlets: {
                primary: ['message', 'notice', { message: 'Displaying App Configuration information!' }],
                owfoutlet: ['owf', 'config'],
                useroutlet: ['']
              }
            }]);
          } else
            if (actionName === 'Info') {
              this.menuOption = 'UserInfo';
              this.router.navigate([{
                outlets: {
                  primary: ['message', 'notice', { message: 'Displaying user information!' }],
                  owfoutlet: [''],
                  useroutlet: ['user', 'args', 'info']
                }
              }]);
            } else
              if (actionName === 'UUID') {
                this.menuOption = 'UserUUID';
                this.router.navigate([{
                  outlets: {
                    primary: ['message', 'notice', { message: 'Displaying user UUID information!' }],
                    owfoutlet: [''],
                    useroutlet: ['user', 'args', 'uuid']
                  }
                }]);
              } else
                if (actionName === 'Summary') {
                  this.menuOption = 'UserSummary';
                  this.router.navigate([{
                    outlets: {
                      primary: ['message', 'notice', { message: 'Displaying user summary information!' }],
                      owfoutlet: [''],
                      useroutlet: ['user', 'args', 'summary']
                    }
                  }]);
                } else
                  if (actionName === 'Dashboards') {
                    this.menuOption = 'UserDashboards';
                    this.router.navigate([{
                      outlets: {
                        primary: ['message', 'notice', { message: 'Displaying user dashboards information!' }],
                        owfoutlet: [''],
                        useroutlet: ['user', 'args', 'dashboards']
                      }
                    }]);
                  } else
                    if (actionName === 'Groups') {
                      this.menuOption = 'UserGroups';
                      this.router.navigate([{
                        outlets: {
                          primary: ['message', 'notice', { message: 'Displaying user groups information!' }],
                          owfoutlet: [''],
                          useroutlet: ['user', 'args', 'groups']
                        }
                      }]);
                    } else
                      if (actionName === 'Widgets') {
                        this.menuOption = 'UserWidgets';
                        this.router.navigate([{
                          outlets: {
                            primary: ['message', 'notice', { message: 'Displaying user widgets information!' }],
                            owfoutlet: [''],
                            useroutlet: ['user', 'args', 'widgets']
                          }
                        }]);
                      } else {
                        this.menuOption = 'AppConfig';
                      }
      }
    );
  }

  ngOnInit() { }

  notifyMenu() {
    this.menuNotificationService.publisherAction('New File');
    console.log('New File, pressed from AppComponent');
  }
}
