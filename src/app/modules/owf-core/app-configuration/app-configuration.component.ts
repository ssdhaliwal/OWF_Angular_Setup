import { Component, OnInit, Input } from '@angular/core';

import { ConfigService } from 'src/app/service/config-service';
import { ConfigModel } from 'src/app/models/config-model';

@Component({
  selector: 'app-app-configuration',
  templateUrl: './app-configuration.component.html',
  styleUrls: ['./app-configuration.component.css'],
  providers: [ConfigService]
})
export class AppConfigurationComponent implements OnInit {
  configReady: boolean = false;
  configModel: ConfigModel = null;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getConfig()
      .subscribe(configModel => {
        this.configModel = configModel;
        this.configReady = true;

        console.log('Config Service completed: ', configModel);
      });
  }
}
