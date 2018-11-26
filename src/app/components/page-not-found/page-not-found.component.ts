import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
  providers: [MessageService]
})
export class PageNotFoundComponent implements OnInit {
  msgs: Message[] = [];

  constructor(private route: ActivatedRoute, private messageService: MessageService) {
  }

  ngOnInit() {
    this.msgs = [];

    this.route.params.subscribe(params => {
      if (params['type']) {
        // this.messageService.add({ severity: 'success', summary: 'info', detail: params['message'] });
        this.msgs.push({ severity: 'success', summary: 'info', detail: params['message'] });
      }
    });
  }

}
