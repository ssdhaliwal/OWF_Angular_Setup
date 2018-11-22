import { Component, OnInit } from '@angular/core';

import { OwfContainerService } from '../../../service/owf-container-service';
import { OwfContainerModel } from '../../../models/owf-container-model';

@Component({
  selector: 'app-owf-container',
  templateUrl: './owf-container.component.html',
  styleUrls: ['./owf-container.component.css'],
  providers: [OwfContainerService]
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
