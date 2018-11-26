import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OwfContainerModel } from '../../../models/owf-container-model';
import { OwfContainerService } from '../../../service/owf-container-service';

/* do not use providers in component for shared services */
@Component({
  selector: 'app-owf-container',
  templateUrl: './owf-container.component.html',
  styleUrls: ['./owf-container.component.css']
})
export class OwfContainerComponent implements OnInit {
  containerReady: boolean = false;
  containerModel: OwfContainerModel = null;

  constructor(private containerService: OwfContainerService) {
  }

  ngOnInit() {
    this.containerModel = this.containerService.getContainer();
    this.containerReady = true;

    console.log('OwfContainerService Service completed: ', this.containerModel);
  }
}
