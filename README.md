# OWF_Angular_Setup
  Describes configuration for OWF widget with Angular 6

## Create Angular Project
  ng new owf-widget

### Add 3rd party libraries in assets/vendor folder
  mkdir -p src/assets/vendor
  --> examples of libraries: date.format.js, jquery-3.2.1.js, jquery-3.2.1.min.js, 
      jquery-3.2.1.min.map, jszip.min.js, owf-widget-debug.js, owf-widget-min.js, 
      underscore-min.js
  Note: jquery can be added in the angular package.json also

### Update index.html to include the libraries
  <!-- add vendor javascripts -->
  <script src="assets/vendor/jquery-3.2.1.min.js"></script>
  <script src="assets/vendor/underscore-min.js"></script>
  <script src="assets/vendor/owf-widget-debug.js"></script>

### Update main.ts to ensure JQuery & OWF .ready functions are complete before Angular is running.
  Add following import statements  
    import { OwfApi } from './app/library/owf-api';
    declare var $: any;
    declare var OWF: any;
    declare var Ozone: any;
  
  Update below
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));  
  (with)
    // add document/OWF ready check state
    $(document).ready(function() {
      OWF.ready(function() {
        let owfapi = new OwfApi();
        owfapi.initialize();
        platformBrowserDynamic().bootstrapModule(AppModule)
          .catch(err => console.error(err));
      });
    });

### Add class to encapsulate OWF functions (owf-api)
  ng generate class library/owf-api
  ** code for owf-api.ts is in the project

### Create local cert for serving using SSL
  ** download project generate-trusted-ssl-certificate-master from 
  https://github.com/RubenVermeulen/generate-trusted-ssl-certificate
  ** create a local server cert and key
  ** copy the server.crt & server.key to the project directory
  ng serve --ssl true --ssl-cert server.crt --ssl-key server.key
