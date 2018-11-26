import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigService } from '../service/config-service';
import { OwfContainerService } from '../service/owf-container-service';
import { UserCoreService } from '../service/user-core.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [ConfigService, OwfContainerService, UserCoreService]
})
export class SharedServicesModule {}
