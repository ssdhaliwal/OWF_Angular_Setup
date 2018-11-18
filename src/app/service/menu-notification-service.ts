import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MenuNotificationService {
  // Observable string sources
  private menuPublisherSource = new Subject<string>();
  private menuSubscriberSource = new Subject<string>();

  // Observable string streams
  menuPublisher$ = this.menuPublisherSource.asObservable();
  menuSubscriber$ = this.menuSubscriberSource.asObservable();

  // Service message commands
  publisherAction(menuItem: string) {
    this.menuPublisherSource.next(menuItem);
  }

  subscriberAction(menuItem: string) {
    this.menuSubscriberSource.next(menuItem);
  }
}
