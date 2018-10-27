# OWF_Angular_Setup
  Describes configuration for OWF widget with Angular 6

## Create Angular Project
  ng new owf-widget

### Add 3rd party libraries in assets/vendor folder
```
  mkdir -p src/assets/vendor<br/>
  
  --> examples of libraries: date.format.js, jquery-3.2.1.js, jquery-3.2.1.min.js, 
      jquery-3.2.1.min.map, jszip.min.js, owf-widget-debug.js, owf-widget-min.js, 
      underscore-min.js<br/>
```   
  Note: jquery can be added in the angular package.json also
  
### Update index.html to include the libraries
```
  <!-- add vendor javascripts --><br/>
  <script src="assets/vendor/jquery-3.2.1.min.js"></script><br/>
  <script src="assets/vendor/underscore-min.js"></script><br/>
  <script src="assets/vendor/owf-widget-debug.js"></script><br/>
```

### Update main.ts to ensure JQuery & OWF .ready functions are complete before Angular is running.
  Add following import statements<br/>
```
    import { OwfApi } from './app/library/owf-api';<br/>
    declare var $: any;<br/>
    declare var OWF: any;<br/>
    declare var Ozone: any;<br/>
```
  Update below<br/>
```
    platformBrowserDynamic().bootstrapModule(AppModule)<br/>
      .catch(err => console.error(err));<br/>
```
  (with)<br/>
```
    // add document/OWF ready check state<br/>
    $(document).ready(function() {<br/>
      OWF.ready(function() {<br/>
        let owfapi = new OwfApi();<br/>
        owfapi.initialize();<br/>
        platformBrowserDynamic().bootstrapModule(AppModule)<br/>
          .catch(err => console.error(err));<br/>
      });<br/>
    });<br/>
```

### Add class to encapsulate OWF functions (owf-api)
```
  ng generate class library/owf-api<br/>
  ** code for owf-api.ts is in the project<br/>
```

### Create local cert for serving using SSL
  ** download project generate-trusted-ssl-certificate-master from https://github.com/RubenVermeulen/generate-trusted-ssl-certificate<br/>
  ** create a local server cert and key<br/>
  ** copy the server.crt & server.key to the project directory<br/>
```
  ng serve --ssl true --ssl-cert server.crt --ssl-key server.key<br/>
```