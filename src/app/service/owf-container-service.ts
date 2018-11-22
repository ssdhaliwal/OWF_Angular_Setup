import { Injectable } from '@angular/core';

import * as _ from 'lodash';

import { OwfContainerModel } from '../models/owf-container-model';

@Injectable()
export class OwfContainerService {
  container: OwfContainerModel = new OwfContainerModel();

  constructor() {
  }

  getContainer(): OwfContainerModel {
    return this.container;
  }
}
