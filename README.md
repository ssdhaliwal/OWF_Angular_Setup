# OWF_Angular_Setup
  Describes configuration for OWF widget with Angular 6

## Create Angular Project
  ng new owf-widget

### Add 3rd party libraries in assets/vendor folder
```
  mkdir -p src/assets/vendor
  
  --> examples of libraries: date.format.js, jquery-3.2.1.js, jquery-3.2.1.min.js, 
      jquery-3.2.1.min.map, jszip.min.js, owf-widget-debug.js, owf-widget-min.js, 
      underscore-min.js
```   
  Note: jquery can be added in the angular package.json also
  
### Update index.html to include the libraries
```
  <!-- add vendor javascripts -->
  <script src="assets/vendor/jquery-3.2.1.min.js"></script>
  <script src="assets/vendor/underscore-min.js"></script>
  <script src="assets/vendor/owf-widget-debug.js"></script>
```

### Update main.ts to ensure JQuery & OWF .ready functions are complete before Angular is running.
  Add following import statements<br/>
```
    import { OwfApi } from './app/library/owf-api';
    declare var $: any;
    declare var OWF: any;
    declare var Ozone: any;
```
  Update below<br/>
```
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
```
  (with)<br/>
```
    // add document/OWF ready check state
    $(document).ready(function() {
      OWF.ready(function() {
        let owfapi = new OwfApi();
        owfapi.initialize();
        platformBrowserDynamic().bootstrapModule(AppModule)
          .catch(err => console.error(err));
      });
    });
```

### Add class to encapsulate OWF functions (owf-api)
```
  ng generate class library/owf-api
  ** code for owf-api.ts is in the project
```

### Create local cert for serving using SSL
  ** download project generate-trusted-ssl-certificate-master from https://github.com/RubenVermeulen/generate-trusted-ssl-certificate<br/>
  ** create a local server cert and key<br/>
  ** copy the server.crt & server.key to the project directory<br/>
```
  ng serve --ssl true --ssl-cert server.crt --ssl-key server.key
```
# history of changes
26Nov/2018
- updated all legacy callbacks to use obserable/subscription

25Nov/2018
- create singleton services for core items using shared-services.module.ts
- working on owf function calls whcih use callbacks using timers (not optimal)
- dashboard and widget components are in work

21Nov/2018
- separated the owf-core and user-core into separate modules
- updated owf/info to display the info in cards

18Nov/2018
- updated primeng card component css to allow wraping of cards within container
- added bootstrap grid with css update for rendering
- added routing to support lazy loading using children
- updated menu items to link to routing via common containers for each top menu item
- added support for outlets to allow child items of top menu item to be independent and support on demand loading
- updated config service to use model and updated display of to use model vice any
- downgraded bootstrap to v3 since v4 did not work correctly using themes
- dependencies: added lodash

27Oct/2018
- initial release
- basic widget to test integration and start learning angular/typescript
- dependencies - primeng, bootstrap, angular, typescript, owf, underscore.