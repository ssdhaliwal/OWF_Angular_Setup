import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MenuNotificationService } from '../../service/menu-notification-service';
import { MenuModel } from '../../models/menu-model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  menuItems: MenuModel;
  searchText: string = 'Search';
  subscription: Subscription;

  constructor(private menuNotificationService: MenuNotificationService) {
    this.subscription = menuNotificationService.menuPublisher$.subscribe(
      itemName => {
        console.log(`${itemName} received by MenuComponent`);
      }
    );
  }

  ngOnInit() {
    this.menuItems = new MenuModel();

    // add commands to menu model
    let items: any = this.menuItems;

    items.items[0].items[0].command = this.notifyMenu.bind(this);  // Owf/App -> owf info
    items.items[0].items[1].command = this.notifyMenu.bind(this);  // Owf/App -> config
    items.items[1].items[0].command = this.notifyMenu.bind(this);  // user -> info
    items.items[1].items[2].command = this.notifyMenu.bind(this);  // user -> uuid
    items.items[1].items[3].command = this.notifyMenu.bind(this);  // user -> summary
    items.items[1].items[5].items[0].command = this.notifyMenu.bind(this);  // user -> details -> dashboards
    items.items[1].items[5].items[1].command = this.notifyMenu.bind(this);  // user -> details -> groups
    items.items[1].items[5].items[2].command = this.notifyMenu.bind(this);  // user -> details -> widgets
    items.items[2].items[0].command = this.notifyMenu.bind(this);  // help -> about
    items.items[2].items[1].command = this.notifyMenu.bind(this);  // help -> refresh
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  notifyMenu(event) {
    this.menuNotificationService.subscriberAction(event.item.label);
    this.searchText = event.item.label;
    console.log(`${event.item.label}, pressed from MenuComponent `);
  }

  onSearchEnter(value: string) {
    if (value === '') {
      this.searchText = 'Search';
    } else {
      this.searchText = value;
    }

    console.log(`search value: ${value}`);
    this.menuNotificationService.subscriberAction(value);
  }

}
