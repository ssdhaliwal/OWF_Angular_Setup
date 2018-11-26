import { Component, OnInit, Input } from '@angular/core';

import { ConfigModel } from 'src/app/models/config-model';
import { ConfigService } from 'src/app/service/config-service';

/* do not use providers in component for shared services */
@Component({
  selector: 'app-app-configuration',
  templateUrl: './app-configuration.component.html',
  styleUrls: ['./app-configuration.component.css']
})
export class AppConfigurationComponent implements OnInit {
  configReady: boolean = false;
  config: ConfigModel = null;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getConfig()
      .subscribe(configModel => {
        this.config = configModel;
        this.configReady = true;

        console.log('Config Service completed: ', configModel);
      });
  }
}
