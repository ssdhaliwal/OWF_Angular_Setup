(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/owf-core/owf-core.module": [
		"./src/app/modules/owf-core/owf-core.module.ts"
	],
	"./modules/user-core/user-core.module": [
		"./src/app/modules/user-core/user-core.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-owf-information {\n    width: 100%;\n    background: #929344;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtb3dmLWluZm9ybWF0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjOTI5MzQ0O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1 [innerHTML]=\"title\"></h1>\n  <button (click)=\"notifyMenu()\">\n    Menu-Action\n  </button>\n</div>\n<app-menu></app-menu>\n\n<router-outlet></router-outlet>\n<router-outlet name=\"owfoutlet\"></router-outlet>\n<router-outlet name=\"useroutlet\"></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_menu_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/menu-notification-service */ "./src/app/service/menu-notification-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, menuNotificationService) {
        var _this = this;
        this.router = router;
        this.menuNotificationService = menuNotificationService;
        this.title = 'OWF Angular Sample Widget<br>w/Prime Faces NG';
        this.menuOption = 'AppConfig';
        menuNotificationService.menuSubscriber$.subscribe(function (actionName) {
            console.log(actionName + " received by AppComponent");
            // check the menu item pressed and take action
            if (actionName === 'OWF Core') {
                _this.menuOption = 'OwfCore';
                _this.router.navigate([{
                        outlets: {
                            primary: ['message', 'notice', { message: 'Displaying OWF information!' }],
                            owfoutlet: ['owf', 'info'],
                            useroutlet: ['']
                        }
                    }]);
            }
            else if (actionName === 'App Config') {
                _this.menuOption = 'AppConfig';
                _this.router.navigate([{
                        outlets: {
                            primary: ['message', 'notice', { message: 'Displaying App Configuration information!' }],
                            owfoutlet: ['owf', 'config'],
                            useroutlet: ['']
                        }
                    }]);
            }
            else if (actionName === 'Info') {
                _this.menuOption = 'UserInfo';
                _this.router.navigate([{
                        outlets: {
                            primary: ['message', 'notice', { message: 'Displaying user information!' }],
                            owfoutlet: [''],
                            useroutlet: ['user', 'args', 'info']
                        }
                    }]);
            }
            else if (actionName === 'UUID') {
                _this.menuOption = 'UserUUID';
                _this.router.navigate([{
                        outlets: {
                            primary: ['message', 'notice', { message: 'Displaying user UUID information!' }],
                            owfoutlet: [''],
                            useroutlet: ['user', 'args', 'uuid']
                        }
                    }]);
            }
            else if (actionName === 'Summary') {
                _this.menuOption = 'UserSummary';
                _this.router.navigate([{
                        outlets: {
                            primary: ['message', 'notice', { message: 'Displaying user summary information!' }],
                            owfoutlet: [''],
                            useroutlet: ['user', 'args', 'summary']
                        }
                    }]);
            }
            else if (actionName === 'Dashboards') {
                _this.menuOption = 'UserDashboards';
                _this.router.navigate([{
                        outlets: {
                            primary: ['message', 'notice', { message: 'Displaying user dashboards information!' }],
                            owfoutlet: [''],
                            useroutlet: ['user', 'args', 'dashboards']
                        }
                    }]);
            }
            else if (actionName === 'Groups') {
                _this.menuOption = 'UserGroups';
                _this.router.navigate([{
                        outlets: {
                            primary: ['message', 'notice', { message: 'Displaying user groups information!' }],
                            owfoutlet: [''],
                            useroutlet: ['user', 'args', 'groups']
                        }
                    }]);
            }
            else if (actionName === 'Widgets') {
                _this.menuOption = 'UserWidgets';
                _this.router.navigate([{
                        outlets: {
                            primary: ['message', 'notice', { message: 'Displaying user widgets information!' }],
                            owfoutlet: [''],
                            useroutlet: ['user', 'args', 'widgets']
                        }
                    }]);
            }
            else {
                _this.menuOption = 'AppConfig';
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.notifyMenu = function () {
        this.menuNotificationService.publisherAction('New File');
        console.log('New File, pressed from AppComponent');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_service_menu_notification_service__WEBPACK_IMPORTED_MODULE_2__["MenuNotificationService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_menu_notification_service__WEBPACK_IMPORTED_MODULE_2__["MenuNotificationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/menubar */ "./node_modules/primeng/menubar.js");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_menubar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _modules_owf_core_owf_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/owf-core/owf-core.module */ "./src/app/modules/owf-core/owf-core.module.ts");
/* harmony import */ var _modules_user_core_user_core_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/user-core/user-core.module */ "./src/app/modules/user-core/user-core.module.ts");
/* harmony import */ var _modules_shared_services_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/shared-services.module */ "./src/app/modules/shared-services.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    {
        path: 'owf', loadChildren: './modules/owf-core/owf-core.module#OwfCoreModule'
    },
    { path: 'user', loadChildren: './modules/user-core/user-core.module#UserCoreModule' },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'message/:type', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"] },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"], outlet: 'owfoutlet' },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"], outlet: 'useroutlet' },
    { path: '**', redirectTo: 'message' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { /* enableTracing: true */}),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _modules_owf_core_owf_core_module__WEBPACK_IMPORTED_MODULE_10__["OwfCoreModule"],
                _modules_user_core_user_core_module__WEBPACK_IMPORTED_MODULE_11__["UserCoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["GrowlModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["MessageModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["MessagesModule"],
                primeng_menubar__WEBPACK_IMPORTED_MODULE_7__["MenubarModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                _modules_shared_services_module__WEBPACK_IMPORTED_MODULE_12__["SharedServicesModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-menubar [model]=\"menuItems.items\" [autoDisplay]=\"false\">\n  <div>\n      <input type=\"text\" #search placeholder=\"{{searchText}}\" (keyup.enter)=\"onSearchEnter(search.value)\">\n      <button pButton icon=\"fa fa-sign-out\" style=\"margin-left:.25em\"></button>\n  </div>\n</p-menubar>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_menu_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/menu-notification-service */ "./src/app/service/menu-notification-service.ts");
/* harmony import */ var _models_menu_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/menu-model */ "./src/app/models/menu-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(menuNotificationService) {
        this.menuNotificationService = menuNotificationService;
        this.searchText = 'Search';
        this.subscription = menuNotificationService.menuPublisher$.subscribe(function (itemName) {
            console.log(itemName + " received by MenuComponent");
        });
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.menuItems = new _models_menu_model__WEBPACK_IMPORTED_MODULE_2__["MenuModel"]();
        // add commands to menu model
        var items = this.menuItems;
        items.items[0].items[0].command = this.notifyMenu.bind(this); // Owf/App -> owf info
        items.items[0].items[1].command = this.notifyMenu.bind(this); // Owf/App -> config
        items.items[1].items[0].command = this.notifyMenu.bind(this); // user -> info
        items.items[1].items[2].command = this.notifyMenu.bind(this); // user -> uuid
        items.items[1].items[3].command = this.notifyMenu.bind(this); // user -> summary
        items.items[1].items[5].items[0].command = this.notifyMenu.bind(this); // user -> details -> dashboards
        items.items[1].items[5].items[1].command = this.notifyMenu.bind(this); // user -> details -> groups
        items.items[1].items[5].items[2].command = this.notifyMenu.bind(this); // user -> details -> widgets
        items.items[2].items[0].command = this.notifyMenu.bind(this); // help -> about
        items.items[2].items[1].command = this.notifyMenu.bind(this); // help -> refresh
    };
    MenuComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    MenuComponent.prototype.notifyMenu = function (event) {
        this.menuNotificationService.subscriberAction(event.item.label);
        this.searchText = event.item.label;
        console.log(event.item.label + ", pressed from MenuComponent ");
    };
    MenuComponent.prototype.onSearchEnter = function (value) {
        if (value === '') {
            this.searchText = 'Search';
        }
        else {
            this.searchText = value;
        }
        console.log("search value: " + value);
        this.menuNotificationService.subscriberAction(value);
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_service_menu_notification_service__WEBPACK_IMPORTED_MODULE_1__["MenuNotificationService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep button {\n  margin-right: .25em;\n}\n\n:host ::ng-deep .ui-message,\n:host ::ng-deep .ui-inputtext {\n  margin-right: .25em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEOztFQUVFLG9CQUFvQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCBidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IC4yNWVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnVpLW1lc3NhZ2UsXG46aG9zdCA6Om5nLWRlZXAgLnVpLWlucHV0dGV4dCB7XG4gIG1hcmdpbi1yaWdodDogLjI1ZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-messages [(value)]=\"msgs\"></p-messages>"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(route, messageService) {
        this.route = route;
        this.messageService = messageService;
        this.msgs = [];
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.msgs = [];
        this.route.params.subscribe(function (params) {
            if (params['type']) {
                // this.messageService.add({ severity: 'success', summary: 'info', detail: params['message'] });
                _this.msgs.push({ severity: 'success', summary: 'info', detail: params['message'] });
            }
        });
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")],
            providers: [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/library/owf-api.ts":
/*!************************************!*\
  !*** ./src/app/library/owf-api.ts ***!
  \************************************/
/*! exports provided: OwfApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwfApi", function() { return OwfApi; });
var OwfApi = /** @class */ (function () {
    function OwfApi() {
    }
    OwfApi.prototype.initialize = function () {
        var self = this;
        this._WidgetStateController = Ozone.state.WidgetState.getInstance({
            widgetEventingController: Ozone.eventing.Widget.getInstance(),
            autoInit: true,
            // this is fired on any event that you are registered for.
            // the msg object tells us what event it was
            onStateEventReceived: function (sender, msg) {
                if (msg.eventName === 'beforeclose') {
                    self.shutdownWidget(null, null);
                }
            }
        });
        this._WidgetStateController.addStateEventOverrides({
            events: ['beforeclose']
        });
    };
    OwfApi.prototype.shutdownWidget = function (sender, msg) {
        var self = this;
        // remove listener override to prevent looping
        this._WidgetStateController.removeStateEventOverrides({
            events: ['beforeclose'],
            callback: function () {
                console.log('.. widget shutdown!!');
                // unpublish active track layers
                // self.clearActiveLayers();
                // unsubcribe the events
                // OWF.Eventing.unsubscribe(MAP_STATUS_VIEW);
                // OWF.Eventing.unsubscribe(MAP_FEATURE_UNPLOT);
                // OWF.Eventing.unsubscribe(MAP_OVERLAY_REMOVE);
                // OWF.Eventing.unsubscribe(MAP_MESSAGE_COMPLETE);
                self._WidgetStateController.closeWidget();
            }
        });
    };
    return OwfApi;
}());



/***/ }),

/***/ "./src/app/models/menu-model.ts":
/*!**************************************!*\
  !*** ./src/app/models/menu-model.ts ***!
  \**************************************/
/*! exports provided: MenuModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModel", function() { return MenuModel; });
var MenuModel = /** @class */ (function () {
    function MenuModel() {
        this.items = [
            {
                label: 'Owf/App',
                icon: 'pi pi-fw pi-paperclip',
                items: [
                    {
                        label: 'OWF Core',
                        icon: 'pi pi-fw pi-info',
                        command: null
                    },
                    {
                        label: 'App Config',
                        icon: 'pi pi-fw pi-list',
                        command: null
                    }
                ]
            },
            {
                label: 'User',
                icon: 'pi pi-fw pi-user',
                items: [{
                        label: 'Info',
                        icon: 'pi pi-fw pi-tablet',
                        command: null
                    },
                    { separator: true },
                    {
                        label: 'UUID',
                        icon: 'pi pi-fw pi-key',
                        command: null
                    },
                    {
                        label: 'Summary',
                        icon: 'pi pi-fw pi-eye',
                        command: null
                    },
                    { separator: true },
                    {
                        label: 'Details',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                label: 'Dashboards',
                                icon: 'fa fa-dashboard',
                                command: null
                            },
                            {
                                label: 'Groups',
                                icon: 'fa fa-group',
                                command: null
                            },
                            {
                                label: 'Widgets',
                                icon: 'fa fa-window-restore',
                                command: null
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Help',
                icon: 'pi pi-fw pi-question',
                items: [
                    {
                        label: 'About',
                        icon: 'pi pi-fw pi-info',
                        command: null
                    },
                    {
                        label: 'Refresh',
                        icon: 'pi pi-fw pi-refresh',
                        command: null
                    }
                ]
            }
        ];
    }
    return MenuModel;
}());



/***/ }),

/***/ "./src/app/models/owf-container-model.ts":
/*!***********************************************!*\
  !*** ./src/app/models/owf-container-model.ts ***!
  \***********************************************/
/*! exports provided: OwfContainerModel, ContainerAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwfContainerModel", function() { return OwfContainerModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerAttribute", function() { return ContainerAttribute; });
var OwfContainerModel = /** @class */ (function () {
    function OwfContainerModel() {
        this.attributes = [];
        this.attributes.push(new ContainerAttribute('Container Name', OWF.getContainerName()));
        this.attributes.push(new ContainerAttribute('Container URL', OWF.getContainerUrl()));
        this.attributes.push(new ContainerAttribute('Container Version', OWF.getContainerVersion()));
        this.attributes.push(new ContainerAttribute('Theme', OWF.getCurrentTheme().themeName));
        this.attributes.push(new ContainerAttribute('Layout', OWF.getDashboardLayout()));
        this.attributes.push(new ContainerAttribute('Frame Id', OWF.getIframeId()));
        this.attributes.push(new ContainerAttribute('Instance Id', OWF.getInstanceId()));
        this.attributes.push(new ContainerAttribute('URL', OWF.getUrl()));
        this.attributes.push(new ContainerAttribute('Version', OWF.getVersion()));
        this.attributes.push(new ContainerAttribute('Widget GUID', OWF.getWidgetGuid()));
        this.attributes.push(new ContainerAttribute('Locked', OWF.isDashboardLocked()));
    }
    return OwfContainerModel;
}());

var ContainerAttribute = /** @class */ (function () {
    function ContainerAttribute(key, value) {
        this.key = key;
        this.value = value;
    }
    return ContainerAttribute;
}());



/***/ }),

/***/ "./src/app/models/user-model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user-model.ts ***!
  \**************************************/
/*! exports provided: UserModel, UserSummaryModel, UserSummaryAttribute, UserGroupModel, UserGroupAttribute, UserDashboardModel, UserDashboardAttribute, UserDashboardStack, UserWidgetModel, UserWidgetAttribute, UserWidgetIntents, UserWidgetIntentType, WidgetType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSummaryModel", function() { return UserSummaryModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSummaryAttribute", function() { return UserSummaryAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupModel", function() { return UserGroupModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupAttribute", function() { return UserGroupAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardModel", function() { return UserDashboardModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardAttribute", function() { return UserDashboardAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardStack", function() { return UserDashboardStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserWidgetModel", function() { return UserWidgetModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserWidgetAttribute", function() { return UserWidgetAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserWidgetIntents", function() { return UserWidgetIntents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserWidgetIntentType", function() { return UserWidgetIntentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetType", function() { return WidgetType; });
var UserModel = /** @class */ (function () {
    function UserModel(name, user, prevLogin, id, email) {
        this.name = name;
        this.user = user;
        this.prevLogin = prevLogin;
        this.id = id;
        this.email = email;
    }
    return UserModel;
}());

var UserSummaryModel = /** @class */ (function () {
    function UserSummaryModel(success, data, results) {
        this.success = success;
        this.data = data;
        this.results = results;
    }
    return UserSummaryModel;
}());

var UserSummaryAttribute = /** @class */ (function () {
    function UserSummaryAttribute(totalStacks, hasPWD, totalGroups, id, userRealName, totalWidgets, userName, email, lastLogin, totalDashboards) {
        this.totalStacks = totalStacks;
        this.hasPWD = hasPWD;
        this.totalGroups = totalGroups;
        this.id = id;
        this.userRealName = userRealName;
        this.totalWidgets = totalWidgets;
        this.userName = userName;
        this.email = email;
        this.lastLogin = lastLogin;
        this.totalDashboards = totalDashboards;
    }
    return UserSummaryAttribute;
}());

var UserGroupModel = /** @class */ (function () {
    function UserGroupModel(data, results) {
        this.data = data;
        this.results = results;
    }
    return UserGroupModel;
}());

var UserGroupAttribute = /** @class */ (function () {
    function UserGroupAttribute(stackDefault, totalStacks, status, totalUsers, id, description, totalWidgets, email, name, automatic, displayName) {
        this.stackDefault = stackDefault;
        this.totalStacks = totalStacks;
        this.status = status;
        this.totalUsers = totalUsers;
        this.id = id;
        this.description = description;
        this.totalWidgets = totalWidgets;
        this.email = email;
        this.name = name;
        this.automatic = automatic;
        this.displayName = displayName;
    }
    return UserGroupAttribute;
}());

var UserDashboardModel = /** @class */ (function () {
    function UserDashboardModel(results, success, attributes) {
        this.results = results;
        this.success = success;
        this.attributes = attributes;
    }
    return UserDashboardModel;
}());

var UserDashboardAttribute = /** @class */ (function () {
    function UserDashboardAttribute(createDate, editedDate, description, guid, name, userId, isGroupDashboard, isDefault, locked, publishedToStore, dashboardPosition, iconImageUrl, stack) {
        this.createDate = createDate;
        this.editedDate = editedDate;
        this.description = description;
        this.guid = guid;
        this.name = name;
        this.userId = userId;
        this.isGroupDashboard = isGroupDashboard;
        this.isDefault = isDefault;
        this.locked = locked;
        this.publishedToStore = publishedToStore;
        this.dashboardPosition = dashboardPosition;
        this.iconImageUrl = iconImageUrl;
        this.stack = stack;
    }
    return UserDashboardAttribute;
}());

var UserDashboardStack = /** @class */ (function () {
    function UserDashboardStack(approved, id, name, ownerName, ownerId, imageUrl) {
        this.approved = approved;
        this.id = id;
        this.name = name;
        this.ownerName = ownerName;
        this.ownerId = ownerId;
        this.imageUrl = imageUrl;
    }
    return UserDashboardStack;
}());

var UserWidgetModel = /** @class */ (function () {
    function UserWidgetModel() {
    }
    return UserWidgetModel;
}());

var UserWidgetAttribute = /** @class */ (function () {
    function UserWidgetAttribute() {
    }
    return UserWidgetAttribute;
}());

var UserWidgetIntents = /** @class */ (function () {
    function UserWidgetIntents() {
    }
    return UserWidgetIntents;
}());

var UserWidgetIntentType = /** @class */ (function () {
    function UserWidgetIntentType() {
    }
    return UserWidgetIntentType;
}());

var WidgetType = /** @class */ (function () {
    function WidgetType() {
    }
    return WidgetType;
}());



/***/ }),

/***/ "./src/app/modules/owf-core/app-configuration/app-configuration.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/modules/owf-core/app-configuration/app-configuration.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3dmLWNvcmUvYXBwLWNvbmZpZ3VyYXRpb24vYXBwLWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/owf-core/app-configuration/app-configuration.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/owf-core/app-configuration/app-configuration.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  app-configuration works!\n</p>\n<span *ngIf=\"configReady\">\n  <ul>\n    <li>\n      {{config.version}} / {{config.buildDate}}\n    </li>\n    <li>\n      Urls:\n      <ul>\n        <li *ngFor=\"let element of config.urls | keyvalue; let i = index\">\n          {{i}}. {{element.key}} / {{element.value}}\n        </li>\n      </ul>\n    </li>\n    <li>\n      Roles:\n      <ul>\n        <li *ngFor=\"let element of config.roles; let i = index\">\n          {{i + 1}}. {{element}}\n        </li>\n      </ul>\n    </li>\n  </ul>\n</span>\n"

/***/ }),

/***/ "./src/app/modules/owf-core/app-configuration/app-configuration.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/owf-core/app-configuration/app-configuration.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AppConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigurationComponent", function() { return AppConfigurationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config-service */ "./src/app/service/config-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* do not use providers in component for shared services */
var AppConfigurationComponent = /** @class */ (function () {
    function AppConfigurationComponent(configService) {
        this.configService = configService;
        this.configReady = false;
        this.config = null;
    }
    AppConfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configService.getConfig()
            .subscribe(function (configModel) {
            _this.config = configModel;
            _this.configReady = true;
            console.log('Config Service completed: ', configModel);
        });
    };
    AppConfigurationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-configuration',
            template: __webpack_require__(/*! ./app-configuration.component.html */ "./src/app/modules/owf-core/app-configuration/app-configuration.component.html"),
            styles: [__webpack_require__(/*! ./app-configuration.component.css */ "./src/app/modules/owf-core/app-configuration/app-configuration.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], AppConfigurationComponent);
    return AppConfigurationComponent;
}());



/***/ }),

/***/ "./src/app/modules/owf-core/owf-container/owf-container.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/owf-core/owf-container/owf-container.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    align-items: center;\n}\n\n#owfcard {\n    width: 33%;\n}\n\n.row {\n    width: 100%;\n    margin-right: unset;\n    margin-left: unset;\n}\n\n#cards {\n    float: left;\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.card {\n    padding: 1px;\n    word-break: break-all;\n    height: 100%;\n    vertical-align: top;\n    text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vd2YtY29yZS9vd2YtY29udGFpbmVyL293Zi1jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3dmLWNvcmUvb3dmLWNvbnRhaW5lci9vd2YtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI293ZmNhcmQge1xuICAgIHdpZHRoOiAzMyU7XG59XG5cbi5yb3cge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xufVxuXG4jY2FyZHMge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNhcmQge1xuICAgIHBhZGRpbmc6IDFweDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/owf-core/owf-container/owf-container.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/owf-core/owf-container/owf-container.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row h4\">\n  <div class=\"col-md-1\">.col-md-1</div>\n  <div class=\"col-md-1\">.col-md-1</div>\n  <div class=\"col-md-1\">.col-md-1</div>\n  <div class=\"col-md-1\">.col-md-1</div>\n  <div class=\"col-md-1\">.col-md-1</div>\n  <div class=\"col-md-1\">.col-md-1</div>\n  <div class=\"col-md-1\">.col-md-1</div>\n  <div class=\"col-md-1\">.col-md-1</div>\n  <div class=\"col-md-1\">.col-md-1</div>\n  <div class=\"col-md-1\">.col-md-1</div>\n  <div class=\"col-md-1\">.col-md-1</div>\n  <div class=\"col-md-1\">.col-md-1</div>\n</div>\n<div class=\"row h3\">\n  <div class=\"col-md-8\">.col-md-8</div>\n  <div class=\"col-md-4\">.col-md-4</div>\n</div>\n<div class=\"row h3\">\n  <div class=\"col-md-4\">.col-md-4</div>\n  <div class=\"col-md-4\">.col-md-4</div>\n  <div class=\"col-md-4\">.col-md-4</div>\n</div>\n<div class=\"row h4\">\n  <div class=\"col-md-6\">.col-md-6</div>\n  <div class=\"col-md-6\">.col-md-6</div>\n</div>\n<p-fieldset legend=\"OWF Container Information\" [toggleable]=\"true\">\n  <div id=\"cards\">\n    <p-card id=\"owfcard\" class=\"card\" header=\"Simple Card\" *ngFor=\"let element of containerModel.attributes | keyvalue; let i = index\">\n      {{i + 1}}. {{element.value.key}} <br/> {{element.value.value}}\n    </p-card>\n  </div>\n</p-fieldset>\n"

/***/ }),

/***/ "./src/app/modules/owf-core/owf-container/owf-container.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/owf-core/owf-container/owf-container.component.ts ***!
  \***************************************************************************/
/*! exports provided: OwfContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwfContainerComponent", function() { return OwfContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_owf_container_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/owf-container-service */ "./src/app/service/owf-container-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* do not use providers in component for shared services */
var OwfContainerComponent = /** @class */ (function () {
    function OwfContainerComponent(containerService) {
        this.containerService = containerService;
        this.containerReady = false;
        this.containerModel = null;
    }
    OwfContainerComponent.prototype.ngOnInit = function () {
        this.containerModel = this.containerService.getContainer();
        this.containerReady = true;
        console.log('OwfContainerService Service completed: ', this.containerModel);
    };
    OwfContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-owf-container',
            template: __webpack_require__(/*! ./owf-container.component.html */ "./src/app/modules/owf-core/owf-container/owf-container.component.html"),
            styles: [__webpack_require__(/*! ./owf-container.component.css */ "./src/app/modules/owf-core/owf-container/owf-container.component.css")]
        }),
        __metadata("design:paramtypes", [_service_owf_container_service__WEBPACK_IMPORTED_MODULE_1__["OwfContainerService"]])
    ], OwfContainerComponent);
    return OwfContainerComponent;
}());



/***/ }),

/***/ "./src/app/modules/owf-core/owf-core.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modules/owf-core/owf-core.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3dmLWNvcmUvb3dmLWNvcmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/owf-core/owf-core.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/owf-core/owf-core.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/modules/owf-core/owf-core.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/owf-core/owf-core.component.ts ***!
  \********************************************************/
/*! exports provided: OwfCoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwfCoreComponent", function() { return OwfCoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OwfCoreComponent = /** @class */ (function () {
    function OwfCoreComponent() {
    }
    OwfCoreComponent.prototype.ngOnInit = function () {
    };
    OwfCoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-owf-core',
            template: __webpack_require__(/*! ./owf-core.component.html */ "./src/app/modules/owf-core/owf-core.component.html"),
            styles: [__webpack_require__(/*! ./owf-core.component.css */ "./src/app/modules/owf-core/owf-core.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OwfCoreComponent);
    return OwfCoreComponent;
}());



/***/ }),

/***/ "./src/app/modules/owf-core/owf-core.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/owf-core/owf-core.module.ts ***!
  \*****************************************************/
/*! exports provided: OwfCoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwfCoreModule", function() { return OwfCoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/fieldset */ "./node_modules/primeng/fieldset.js");
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_fieldset__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_services_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared-services.module */ "./src/app/modules/shared-services.module.ts");
/* harmony import */ var _owf_core_owf_core_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../owf-core/owf-core.component */ "./src/app/modules/owf-core/owf-core.component.ts");
/* harmony import */ var _owf_core_owf_container_owf_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../owf-core/owf-container/owf-container.component */ "./src/app/modules/owf-core/owf-container/owf-container.component.ts");
/* harmony import */ var _owf_core_app_configuration_app_configuration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../owf-core/app-configuration/app-configuration.component */ "./src/app/modules/owf-core/app-configuration/app-configuration.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    {
        path: 'owf', component: _owf_core_owf_core_component__WEBPACK_IMPORTED_MODULE_8__["OwfCoreComponent"], outlet: 'owfoutlet',
        children: [
            {
                path: 'info',
                component: _owf_core_owf_container_owf_container_component__WEBPACK_IMPORTED_MODULE_9__["OwfContainerComponent"]
            }, {
                path: 'config',
                component: _owf_core_app_configuration_app_configuration_component__WEBPACK_IMPORTED_MODULE_10__["AppConfigurationComponent"]
            }
        ]
    }
];
var OwfCoreModule = /** @class */ (function () {
    function OwfCoreModule() {
    }
    OwfCoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_owf_core_owf_core_component__WEBPACK_IMPORTED_MODULE_8__["OwfCoreComponent"],
                _owf_core_owf_container_owf_container_component__WEBPACK_IMPORTED_MODULE_9__["OwfContainerComponent"],
                _owf_core_app_configuration_app_configuration_component__WEBPACK_IMPORTED_MODULE_10__["AppConfigurationComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(appRoutes),
                primeng_fieldset__WEBPACK_IMPORTED_MODULE_3__["FieldsetModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_4__["TabViewModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_5__["CardModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_6__["PanelModule"],
                _shared_services_module__WEBPACK_IMPORTED_MODULE_7__["SharedServicesModule"]
            ],
            exports: [_owf_core_owf_core_component__WEBPACK_IMPORTED_MODULE_8__["OwfCoreComponent"],
                _owf_core_owf_container_owf_container_component__WEBPACK_IMPORTED_MODULE_9__["OwfContainerComponent"],
                _owf_core_app_configuration_app_configuration_component__WEBPACK_IMPORTED_MODULE_10__["AppConfigurationComponent"]]
        })
    ], OwfCoreModule);
    return OwfCoreModule;
}());



/***/ }),

/***/ "./src/app/modules/shared-services.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/shared-services.module.ts ***!
  \***************************************************/
/*! exports provided: SharedServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedServicesModule", function() { return SharedServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/config-service */ "./src/app/service/config-service.ts");
/* harmony import */ var _service_owf_container_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/owf-container-service */ "./src/app/service/owf-container-service.ts");
/* harmony import */ var _service_user_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/user-core.service */ "./src/app/service/user-core.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedServicesModule = /** @class */ (function () {
    function SharedServicesModule() {
    }
    SharedServicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [],
            providers: [_service_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _service_owf_container_service__WEBPACK_IMPORTED_MODULE_3__["OwfContainerService"], _service_user_core_service__WEBPACK_IMPORTED_MODULE_4__["UserCoreService"]]
        })
    ], SharedServicesModule);
    return SharedServicesModule;
}());



/***/ }),

/***/ "./src/app/modules/user-core/user-core.component.css":
/*!***********************************************************!*\
  !*** ./src/app/modules/user-core/user-core.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1jb3JlL3VzZXItY29yZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/user-core/user-core.component.html":
/*!************************************************************!*\
  !*** ./src/app/modules/user-core/user-core.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"userReady\">\n    {{user.name}}\n</span>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/modules/user-core/user-core.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/user-core/user-core.component.ts ***!
  \**********************************************************/
/*! exports provided: UserCoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCoreComponent", function() { return UserCoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/user-core.service */ "./src/app/service/user-core.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* do not use providers in component for shared services */
var UserCoreComponent = /** @class */ (function () {
    function UserCoreComponent(userCoreService) {
        this.userReady = false;
        this.user = null;
        this.userCoreService = userCoreService;
    }
    UserCoreComponent.prototype.ngOnInit = function () {
        var self = this;
        self.user = self.userCoreService.getUser();
        if (self.user === null) {
            this.intvl1 = setInterval(function () {
                self.user = self.userCoreService.getUser();
                if (self.user !== null) {
                    self.userReady = true;
                    console.log('UserCore Service (User) completed: ', self.user);
                    clearInterval(self.intvl1);
                }
            }, 250);
        }
        else {
            if (self.user !== null) {
                self.userReady = true;
                console.log('UserCore Service (User) completed-2: ', self.user);
            }
        }
    };
    UserCoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-core',
            template: __webpack_require__(/*! ./user-core.component.html */ "./src/app/modules/user-core/user-core.component.html"),
            styles: [__webpack_require__(/*! ./user-core.component.css */ "./src/app/modules/user-core/user-core.component.css")]
        }),
        __metadata("design:paramtypes", [_service_user_core_service__WEBPACK_IMPORTED_MODULE_1__["UserCoreService"]])
    ], UserCoreComponent);
    return UserCoreComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-core/user-core.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/user-core/user-core.module.ts ***!
  \*******************************************************/
/*! exports provided: UserCoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCoreModule", function() { return UserCoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/fieldset */ "./node_modules/primeng/fieldset.js");
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_fieldset__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_services_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared-services.module */ "./src/app/modules/shared-services.module.ts");
/* harmony import */ var _user_core_user_core_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user-core/user-core.component */ "./src/app/modules/user-core/user-core.component.ts");
/* harmony import */ var _user_core_user_information_user_information_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user-core/user-information/user-information.component */ "./src/app/modules/user-core/user-information/user-information.component.ts");
/* harmony import */ var _user_core_user_uuid_user_uuid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../user-core/user-uuid/user-uuid.component */ "./src/app/modules/user-core/user-uuid/user-uuid.component.ts");
/* harmony import */ var _user_core_user_summary_user_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../user-core/user-summary/user-summary.component */ "./src/app/modules/user-core/user-summary/user-summary.component.ts");
/* harmony import */ var _user_core_user_groups_user_groups_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../user-core/user-groups/user-groups.component */ "./src/app/modules/user-core/user-groups/user-groups.component.ts");
/* harmony import */ var _user_core_user_dashboards_user_dashboards_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../user-core/user-dashboards/user-dashboards.component */ "./src/app/modules/user-core/user-dashboards/user-dashboards.component.ts");
/* harmony import */ var _user_core_user_widgets_user_widgets_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../user-core/user-widgets/user-widgets.component */ "./src/app/modules/user-core/user-widgets/user-widgets.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: 'user', component: _user_core_user_core_component__WEBPACK_IMPORTED_MODULE_8__["UserCoreComponent"], pathMatch: 'full', outlet: 'useroutlet' },
    {
        path: 'user/:id', component: _user_core_user_core_component__WEBPACK_IMPORTED_MODULE_8__["UserCoreComponent"], outlet: 'useroutlet',
        children: [
            {
                path: 'info',
                component: _user_core_user_information_user_information_component__WEBPACK_IMPORTED_MODULE_9__["UserInformationComponent"]
            },
            {
                path: 'uuid',
                component: _user_core_user_uuid_user_uuid_component__WEBPACK_IMPORTED_MODULE_10__["UserUUIDComponent"]
            },
            {
                path: 'summary',
                component: _user_core_user_summary_user_summary_component__WEBPACK_IMPORTED_MODULE_11__["UserSummaryComponent"]
            },
            {
                path: 'dashboards',
                component: _user_core_user_dashboards_user_dashboards_component__WEBPACK_IMPORTED_MODULE_13__["UserDashboardsComponent"]
            },
            {
                path: 'groups',
                component: _user_core_user_groups_user_groups_component__WEBPACK_IMPORTED_MODULE_12__["UserGroupsComponent"]
            },
            {
                path: 'widgets',
                component: _user_core_user_widgets_user_widgets_component__WEBPACK_IMPORTED_MODULE_14__["UserWidgetsComponent"]
            }
        ]
    }
];
var UserCoreModule = /** @class */ (function () {
    function UserCoreModule() {
    }
    UserCoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_user_core_user_core_component__WEBPACK_IMPORTED_MODULE_8__["UserCoreComponent"],
                _user_core_user_information_user_information_component__WEBPACK_IMPORTED_MODULE_9__["UserInformationComponent"],
                _user_core_user_uuid_user_uuid_component__WEBPACK_IMPORTED_MODULE_10__["UserUUIDComponent"],
                _user_core_user_summary_user_summary_component__WEBPACK_IMPORTED_MODULE_11__["UserSummaryComponent"],
                _user_core_user_groups_user_groups_component__WEBPACK_IMPORTED_MODULE_12__["UserGroupsComponent"],
                _user_core_user_dashboards_user_dashboards_component__WEBPACK_IMPORTED_MODULE_13__["UserDashboardsComponent"],
                _user_core_user_widgets_user_widgets_component__WEBPACK_IMPORTED_MODULE_14__["UserWidgetsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(appRoutes),
                primeng_fieldset__WEBPACK_IMPORTED_MODULE_3__["FieldsetModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_4__["TabViewModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_5__["CardModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_6__["PanelModule"],
                _shared_services_module__WEBPACK_IMPORTED_MODULE_7__["SharedServicesModule"]
            ],
            exports: [_user_core_user_core_component__WEBPACK_IMPORTED_MODULE_8__["UserCoreComponent"],
                _user_core_user_information_user_information_component__WEBPACK_IMPORTED_MODULE_9__["UserInformationComponent"],
                _user_core_user_uuid_user_uuid_component__WEBPACK_IMPORTED_MODULE_10__["UserUUIDComponent"],
                _user_core_user_summary_user_summary_component__WEBPACK_IMPORTED_MODULE_11__["UserSummaryComponent"],
                _user_core_user_groups_user_groups_component__WEBPACK_IMPORTED_MODULE_12__["UserGroupsComponent"],
                _user_core_user_dashboards_user_dashboards_component__WEBPACK_IMPORTED_MODULE_13__["UserDashboardsComponent"],
                _user_core_user_widgets_user_widgets_component__WEBPACK_IMPORTED_MODULE_14__["UserWidgetsComponent"]]
        })
    ], UserCoreModule);
    return UserCoreModule;
}());



/***/ }),

/***/ "./src/app/modules/user-core/user-dashboards/user-dashboards.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/user-core/user-dashboards/user-dashboards.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    align-items: center;\n}\n\n.row {\n    width: 100%;\n    margin-right: unset;\n    margin-left: unset;\n}\n\n#cards {\n    float: left;\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.cardHeader {\n    padding: 1px;\n    word-break: break-all;\n    height: 100%;\n    vertical-align: top;\n    text-align: left;\n}\n\n.card {\n    padding: 1px;\n    word-break: break-all;\n    height: 100%;\n    vertical-align: top;\n    text-align: left;\n    width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLWNvcmUvdXNlci1kYXNoYm9hcmRzL3VzZXItZGFzaGJvYXJkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixXQUFXO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VzZXItY29yZS91c2VyLWRhc2hib2FyZHMvdXNlci1kYXNoYm9hcmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG59XG5cbiNjYXJkcyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY2FyZEhlYWRlciB7XG4gICAgcGFkZGluZzogMXB4O1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY2FyZCB7XG4gICAgcGFkZGluZzogMXB4O1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/user-core/user-dashboards/user-dashboards.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/user-core/user-dashboards/user-dashboards.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"userReady\">\n  <p-fieldset legend=\"User Information\" [toggleable]=\"true\">\n    <div id=\"cards\">\n      <p-card class=\"cardHeader\" header=\"Simple Card\">\n        Count: {{dashboards.results}}\n      </p-card>\n    </div>\n  </p-fieldset>\n  <p-fieldset legend=\"User Information\" [toggleable]=\"true\">\n      <div id=\"cards\">\n      <p-card class=\"card\" header=\"Simple Card\" *ngFor=\"let element of dashboards.attributes; let i = index\">  \n        <div class=\"row h6\">\n          <div class=\"col-md-6\">Created: {{element.createDate}}</div>\n          <div class=\"col-md-6\">Edited: {{element.editedDate}}</div>\n        </div>\n        <div class=\"row h4\">\n          <div class=\"col-md-12\">Description: {{element.description}}</div>\n        </div>\n      </p-card>\n    </div>\n  </p-fieldset>\n</span>\n"

/***/ }),

/***/ "./src/app/modules/user-core/user-dashboards/user-dashboards.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/user-core/user-dashboards/user-dashboards.component.ts ***!
  \********************************************************************************/
/*! exports provided: UserDashboardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardsComponent", function() { return UserDashboardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/user-core.service */ "./src/app/service/user-core.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDashboardsComponent = /** @class */ (function () {
    function UserDashboardsComponent(route, userCoreService) {
        this.route = route;
        this.userReady = false;
        this.user = null;
        this.dashboards = null;
        this.userCoreService = userCoreService;
        this.route.parent.params.subscribe(function (params) {
            console.log('1001-02', params);
            if (params['id']) {
                console.log('1001-02-01, userInfo: ', params['id']);
            }
        });
    }
    UserDashboardsComponent.prototype.ngOnInit = function () {
        // wait until the user service is complete
        var self = this;
        self.user = self.userCoreService.getUser();
        if (self.user === null) {
            self.intvl1 = setInterval(function () {
                self.user = self.userCoreService.getUser();
                if (self.user !== null) {
                    clearInterval(self.intvl1);
                    console.log('UserCore Service (User) completed: ', self.user);
                }
            }, 250);
        }
        else {
            if (self.user !== null) {
                console.log('UserCore Service (User) completed-2: ', self.user);
            }
        }
        // retrieve the user summary info
        self.intvl2 = setInterval(function () {
            if (self.user !== null) {
                clearInterval(self.intvl2);
                self.dashboards = self.userCoreService.getDashboard(self.user.id);
                if (self.dashboards === null) {
                    self.intvl3 = setInterval(function () {
                        self.dashboards = self.userCoreService.getDashboard(self.user.id);
                        if (self.dashboards !== null) {
                            self.userReady = true;
                            console.log('UserCore Service (Dashboards) completed: ', self.dashboards);
                            clearInterval(self.intvl3);
                        }
                    }, 250);
                }
                else {
                    if (self.dashboards !== null) {
                        self.userReady = true;
                        console.log('UserCore Service (Dashboards) completed-2: ', self.dashboards);
                    }
                }
            }
        }, 250);
    };
    UserDashboardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-dashboards',
            template: __webpack_require__(/*! ./user-dashboards.component.html */ "./src/app/modules/user-core/user-dashboards/user-dashboards.component.html"),
            styles: [__webpack_require__(/*! ./user-dashboards.component.css */ "./src/app/modules/user-core/user-dashboards/user-dashboards.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_user_core_service__WEBPACK_IMPORTED_MODULE_2__["UserCoreService"]])
    ], UserDashboardsComponent);
    return UserDashboardsComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-core/user-groups/user-groups.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/user-core/user-groups/user-groups.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    align-items: center;\n}\n\n.row {\n    width: 100%;\n    margin-right: unset;\n    margin-left: unset;\n}\n\n#cards {\n    float: left;\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.card {\n    padding: 1px;\n    word-break: break-all;\n    height: 100%;\n    vertical-align: top;\n    text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLWNvcmUvdXNlci1ncm91cHMvdXNlci1ncm91cHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1jb3JlL3VzZXItZ3JvdXBzL3VzZXItZ3JvdXBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG59XG5cbiNjYXJkcyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY2FyZCB7XG4gICAgcGFkZGluZzogMXB4O1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/user-core/user-groups/user-groups.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/user-core/user-groups/user-groups.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"userReady\">\n  <p-fieldset legend=\"User Information\" [toggleable]=\"true\">\n    <div id=\"cards\">\n      <p-card class=\"card\" header=\"Simple Card\">\n        Count: {{groups.results}}\n      </p-card>\n    </div>\n  </p-fieldset>\n  <p-fieldset legend=\"User Information\" [toggleable]=\"true\">\n      <div id=\"cards\">\n      <p-card class=\"card\" header=\"Simple Card\" *ngFor=\"let element of groups.data; let i = index\">  \n        Stack Default: {{element.stackDefault}} <br/>\n        Total Stacks: {{element.totalStacks}} <br/>\n        Status: {{element.status}} <br/>\n        Total Users: {{element.totalUsers}} <br/>\n        Id: {{element.id}} <br/>\n        Description: {{element.description}} <br/>\n        Total Widgets: {{element.totalWidgets}} <br/>\n        Email: {{element.email}} <br/>\n        Name: {{element.name}} <br/>\n        Automatic: {{element.automatic}} <br/>\n        DisplayName: {{element.displayName}} <br/>\n      </p-card>\n    </div>\n  </p-fieldset>\n</span>\n"

/***/ }),

/***/ "./src/app/modules/user-core/user-groups/user-groups.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/user-core/user-groups/user-groups.component.ts ***!
  \************************************************************************/
/*! exports provided: UserGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupsComponent", function() { return UserGroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/user-core.service */ "./src/app/service/user-core.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserGroupsComponent = /** @class */ (function () {
    function UserGroupsComponent(route, userCoreService) {
        this.route = route;
        this.userReady = false;
        this.user = null;
        this.groups = null;
        this.userCoreService = userCoreService;
        this.route.parent.params.subscribe(function (params) {
            console.log('1001-02', params);
            if (params['id']) {
                console.log('1001-02-01, userInfo: ', params['id']);
            }
        });
    }
    UserGroupsComponent.prototype.ngOnInit = function () {
        // wait until the user service is complete
        var self = this;
        self.user = self.userCoreService.getUser();
        if (self.user === null) {
            self.intvl1 = setInterval(function () {
                self.user = self.userCoreService.getUser();
                if (self.user !== null) {
                    clearInterval(self.intvl1);
                    console.log('UserCore Service (User) completed: ', self.user);
                }
            }, 250);
        }
        else {
            if (self.user !== null) {
                console.log('UserCore Service (User) completed-2: ', self.user);
            }
        }
        // retrieve the user summary info
        self.intvl2 = setInterval(function () {
            if (self.user !== null) {
                clearInterval(self.intvl2);
                self.userCoreService.getUserGroups(self.user.id)
                    .subscribe(function (groups) {
                    self.groups = groups;
                    self.userReady = true;
                    console.log('UserCore Service (Groups) completed: ', self.groups);
                });
            }
        }, 250);
    };
    UserGroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-groups',
            template: __webpack_require__(/*! ./user-groups.component.html */ "./src/app/modules/user-core/user-groups/user-groups.component.html"),
            styles: [__webpack_require__(/*! ./user-groups.component.css */ "./src/app/modules/user-core/user-groups/user-groups.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_user_core_service__WEBPACK_IMPORTED_MODULE_2__["UserCoreService"]])
    ], UserGroupsComponent);
    return UserGroupsComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-core/user-information/user-information.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/user-core/user-information/user-information.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    align-items: center;\n}\n\n.row {\n    width: 100%;\n    margin-right: unset;\n    margin-left: unset;\n}\n\n#cards {\n    float: left;\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.card {\n    padding: 1px;\n    word-break: break-all;\n    height: 100%;\n    vertical-align: top;\n    text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLWNvcmUvdXNlci1pbmZvcm1hdGlvbi91c2VyLWluZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VzZXItY29yZS91c2VyLWluZm9ybWF0aW9uL3VzZXItaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucm93IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xuICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcbn1cblxuI2NhcmRzIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jYXJkIHtcbiAgICBwYWRkaW5nOiAxcHg7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/user-core/user-information/user-information.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/user-core/user-information/user-information.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"userReady\">\n  <p-fieldset legend=\"User Information\" [toggleable]=\"true\">\n    <div id=\"cards\">\n      <p-card class=\"card\" header=\"Simple Card\">\n        USER: {{user.user}}\n      </p-card>\n      <p-card class=\"card\" header=\"Simple Card\">\n        Previous Login: {{user.prevLogin}}\n      </p-card>\n      <p-card class=\"card\" header=\"Simple Card\">\n        ID: {{user.id}}\n      </p-card>\n      <p-card class=\"card\" header=\"Simple Card\">\n        EMail: {{user.email}}\n      </p-card>\n    </div>\n  </p-fieldset>\n</span>\n"

/***/ }),

/***/ "./src/app/modules/user-core/user-information/user-information.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/user-core/user-information/user-information.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UserInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInformationComponent", function() { return UserInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/user-core.service */ "./src/app/service/user-core.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* do not use providers in component for shared services */
var UserInformationComponent = /** @class */ (function () {
    function UserInformationComponent(route, userCoreService) {
        this.route = route;
        this.userReady = false;
        this.user = null;
        this.userCoreService = userCoreService;
        this.route.parent.params.subscribe(function (params) {
            console.log('1001-02', params);
            if (params['id']) {
                console.log('1001-02-01, userInfo: ', params['id']);
            }
        });
    }
    UserInformationComponent.prototype.ngOnInit = function () {
        var self = this;
        self.user = self.userCoreService.getUser();
        if (self.user === null) {
            self.intvl1 = setInterval(function () {
                self.user = self.userCoreService.getUser();
                if (self.user !== null) {
                    self.userReady = true;
                    console.log('UserCore Service (User) completed: ', self.user);
                    clearInterval(self.intvl1);
                }
            }, 250);
        }
        else {
            if (self.user !== null) {
                self.userReady = true;
                console.log('UserCore Service (User) completed-2: ', self.user);
            }
        }
    };
    UserInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-information',
            template: __webpack_require__(/*! ./user-information.component.html */ "./src/app/modules/user-core/user-information/user-information.component.html"),
            styles: [__webpack_require__(/*! ./user-information.component.css */ "./src/app/modules/user-core/user-information/user-information.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_user_core_service__WEBPACK_IMPORTED_MODULE_2__["UserCoreService"]])
    ], UserInformationComponent);
    return UserInformationComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-core/user-summary/user-summary.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/user-core/user-summary/user-summary.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    align-items: center;\n}\n\n.row {\n    width: 100%;\n    margin-right: unset;\n    margin-left: unset;\n}\n\n#cards {\n    float: left;\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.card {\n    padding: 1px;\n    word-break: break-all;\n    height: 100%;\n    vertical-align: top;\n    text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLWNvcmUvdXNlci1zdW1tYXJ5L3VzZXItc3VtbWFyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2VyLWNvcmUvdXNlci1zdW1tYXJ5L3VzZXItc3VtbWFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yb3cge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xufVxuXG4jY2FyZHMge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNhcmQge1xuICAgIHBhZGRpbmc6IDFweDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/user-core/user-summary/user-summary.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/user-core/user-summary/user-summary.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"userReady\">\n  <p-fieldset legend=\"User Information\" [toggleable]=\"true\">\n    <div id=\"cards\">\n      <p-card class=\"card\" header=\"Simple Card\">\n        Success: {{summary.success}}\n      </p-card>\n      <p-card class=\"card\" header=\"Simple Card\">\n        Count: {{summary.results}}\n      </p-card>\n    </div>\n  </p-fieldset>\n  <p-fieldset legend=\"User Information\" [toggleable]=\"true\">\n      <div id=\"cards\">\n      <p-card class=\"card\" header=\"Simple Card\" *ngFor=\"let element of summary.data; let i = index\">  \n        Total Stacks: {{element.totalStacks}} <br/>\n        Total Groups: {{element.totalGroups}} <br/>\n        Total Widgets: {{element.totalWidgets}} <br/>\n        Total Dashboards: {{element.totalDashboards}}\n      </p-card>\n    </div>\n  </p-fieldset>\n</span>\n"

/***/ }),

/***/ "./src/app/modules/user-core/user-summary/user-summary.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/user-core/user-summary/user-summary.component.ts ***!
  \**************************************************************************/
/*! exports provided: UserSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSummaryComponent", function() { return UserSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/user-core.service */ "./src/app/service/user-core.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserSummaryComponent = /** @class */ (function () {
    function UserSummaryComponent(route, userCoreService) {
        this.route = route;
        this.userReady = false;
        this.user = null;
        this.summary = null;
        this.userCoreService = userCoreService;
        this.route.parent.params.subscribe(function (params) {
            console.log('1001-02', params);
            if (params['id']) {
                console.log('1001-02-01, userInfo: ', params['id']);
            }
        });
    }
    UserSummaryComponent.prototype.ngOnInit = function () {
        // wait until the user service is complete
        var self = this;
        self.user = self.userCoreService.getUser();
        if (self.user === null) {
            self.intvl1 = setInterval(function () {
                self.user = self.userCoreService.getUser();
                if (self.user !== null) {
                    clearInterval(self.intvl1);
                    console.log('UserCore Service (User) completed: ', self.user);
                }
            }, 250);
        }
        else {
            if (self.user !== null) {
                console.log('UserCore Service (User) completed-2: ', self.user);
            }
        }
        // retrieve the user summary info
        self.intvl2 = setInterval(function () {
            if (self.user !== null) {
                clearInterval(self.intvl2);
                self.userCoreService.getUserSummary(self.user.id)
                    .subscribe(function (summary) {
                    self.summary = summary;
                    self.userReady = true;
                    console.log('UserCore Service (Summary) completed: ', self.summary);
                });
            }
        }, 250);
    };
    UserSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-summary',
            template: __webpack_require__(/*! ./user-summary.component.html */ "./src/app/modules/user-core/user-summary/user-summary.component.html"),
            styles: [__webpack_require__(/*! ./user-summary.component.css */ "./src/app/modules/user-core/user-summary/user-summary.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_user_core_service__WEBPACK_IMPORTED_MODULE_2__["UserCoreService"]])
    ], UserSummaryComponent);
    return UserSummaryComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-core/user-uuid/user-uuid.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/user-core/user-uuid/user-uuid.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    align-items: center;\n}\n\n.row {\n    width: 100%;\n    margin-right: unset;\n    margin-left: unset;\n}\n\n#cards {\n    float: left;\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.card {\n    padding: 1px;\n    word-break: break-all;\n    height: 100%;\n    vertical-align: top;\n    text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLWNvcmUvdXNlci11dWlkL3VzZXItdXVpZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2VyLWNvcmUvdXNlci11dWlkL3VzZXItdXVpZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yb3cge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xufVxuXG4jY2FyZHMge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNhcmQge1xuICAgIHBhZGRpbmc6IDFweDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/user-core/user-uuid/user-uuid.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/user-core/user-uuid/user-uuid.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"userReady\">\n  <p-fieldset legend=\"User Information\" [toggleable]=\"true\">\n    <div id=\"cards\">\n      <p-card class=\"card\" header=\"Simple Card\">\n        UUID: {{uuid}}\n      </p-card>\n    </div>\n  </p-fieldset>\n</span>\n"

/***/ }),

/***/ "./src/app/modules/user-core/user-uuid/user-uuid.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/user-core/user-uuid/user-uuid.component.ts ***!
  \********************************************************************/
/*! exports provided: UserUUIDComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUUIDComponent", function() { return UserUUIDComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/user-core.service */ "./src/app/service/user-core.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* do not use providers in component for shared services */
var UserUUIDComponent = /** @class */ (function () {
    function UserUUIDComponent(route, userCoreService) {
        this.route = route;
        this.userReady = false;
        this.uuid = null;
        this.userCoreService = userCoreService;
        this.route.parent.params.subscribe(function (params) {
            console.log('1001-02', params);
            if (params['id']) {
                console.log('1001-02-01, userInfo: ', params['id']);
            }
        });
    }
    UserUUIDComponent.prototype.ngOnInit = function () {
        var self = this;
        self.uuid = self.userCoreService.getUUID();
        if (self.uuid === null) {
            self.intvl1 = setInterval(function () {
                self.uuid = self.userCoreService.getUUID();
                if (self.uuid !== null) {
                    self.userReady = true;
                    console.log('UserCore Service (UUID) completed: ', self.uuid);
                    clearInterval(self.intvl1);
                }
            }, 250);
        }
        else {
            if (self.uuid !== null) {
                self.userReady = true;
                console.log('UserCore Service (UUID) completed-2: ', self.uuid);
            }
        }
    };
    UserUUIDComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-uuid',
            template: __webpack_require__(/*! ./user-uuid.component.html */ "./src/app/modules/user-core/user-uuid/user-uuid.component.html"),
            styles: [__webpack_require__(/*! ./user-uuid.component.css */ "./src/app/modules/user-core/user-uuid/user-uuid.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_user_core_service__WEBPACK_IMPORTED_MODULE_2__["UserCoreService"]])
    ], UserUUIDComponent);
    return UserUUIDComponent;
}());



/***/ }),

/***/ "./src/app/modules/user-core/user-widgets/user-widgets.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/user-core/user-widgets/user-widgets.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    align-items: center;\n}\n\n.row {\n    width: 100%;\n    margin-right: unset;\n    margin-left: unset;\n}\n\n#cards {\n    float: left;\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.card {\n    padding: 1px;\n    word-break: break-all;\n    height: 100%;\n    vertical-align: top;\n    text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLWNvcmUvdXNlci13aWRnZXRzL3VzZXItd2lkZ2V0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2VyLWNvcmUvdXNlci13aWRnZXRzL3VzZXItd2lkZ2V0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yb3cge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xufVxuXG4jY2FyZHMge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNhcmQge1xuICAgIHBhZGRpbmc6IDFweDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/user-core/user-widgets/user-widgets.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/user-core/user-widgets/user-widgets.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-widgets works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/user-core/user-widgets/user-widgets.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/user-core/user-widgets/user-widgets.component.ts ***!
  \**************************************************************************/
/*! exports provided: UserWidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserWidgetsComponent", function() { return UserWidgetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/user-core.service */ "./src/app/service/user-core.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserWidgetsComponent = /** @class */ (function () {
    function UserWidgetsComponent(route, userCoreService) {
        this.route = route;
        this.userReady = false;
        this.widgets = null;
        this.userCoreService = userCoreService;
        this.route.parent.params.subscribe(function (params) {
            console.log('1001-02', params);
            if (params['id']) {
                console.log('1001-02-01, userInfo: ', params['id']);
            }
        });
    }
    UserWidgetsComponent.prototype.ngOnInit = function () {
        // wait until the user service is complete
        var self = this;
        // retrieve the user summary info
        self.widgets = self.userCoreService.getWidgets();
        if (self.widgets === null) {
            self.intvl1 = setInterval(function () {
                self.widgets = self.userCoreService.getWidgets();
                // if (self.widgets !== null) {
                self.userReady = true;
                console.log('UserCore Service (Widgets) completed: ', self.widgets);
                clearInterval(self.intvl1);
                // }
            }, 250);
        }
        else {
            if (self.widgets !== null) {
                self.userReady = true;
                console.log('UserCore Service (Widgets) completed-2: ', self.widgets);
            }
        }
    };
    UserWidgetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-widgets',
            template: __webpack_require__(/*! ./user-widgets.component.html */ "./src/app/modules/user-core/user-widgets/user-widgets.component.html"),
            styles: [__webpack_require__(/*! ./user-widgets.component.css */ "./src/app/modules/user-core/user-widgets/user-widgets.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_user_core_service__WEBPACK_IMPORTED_MODULE_2__["UserCoreService"]])
    ], UserWidgetsComponent);
    return UserWidgetsComponent;
}());



/***/ }),

/***/ "./src/app/service/config-service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/config-service.ts ***!
  \*******************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
        this.config = null;
        this.baseUrl = 'assets/config.json';
        this.retrieveConfig();
    }
    ConfigService.prototype.retrieveConfig = function () {
        this.config = this.http
            .get(this.baseUrl, { responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('retrieveConfig', [])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
    };
    ConfigService.prototype.getConfig = function () {
        return this.config;
    };
    ConfigService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/service/menu-notification-service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/menu-notification-service.ts ***!
  \******************************************************/
/*! exports provided: MenuNotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuNotificationService", function() { return MenuNotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MenuNotificationService = /** @class */ (function () {
    function MenuNotificationService() {
        // Observable string sources
        this.menuPublisherSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.menuSubscriberSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Observable string streams
        this.menuPublisher$ = this.menuPublisherSource.asObservable();
        this.menuSubscriber$ = this.menuSubscriberSource.asObservable();
    }
    // Service message commands
    MenuNotificationService.prototype.publisherAction = function (menuItem) {
        this.menuPublisherSource.next(menuItem);
    };
    MenuNotificationService.prototype.subscriberAction = function (menuItem) {
        this.menuSubscriberSource.next(menuItem);
    };
    MenuNotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MenuNotificationService);
    return MenuNotificationService;
}());



/***/ }),

/***/ "./src/app/service/owf-container-service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/owf-container-service.ts ***!
  \**************************************************/
/*! exports provided: OwfContainerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwfContainerService", function() { return OwfContainerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_owf_container_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/owf-container-model */ "./src/app/models/owf-container-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OwfContainerService = /** @class */ (function () {
    function OwfContainerService() {
        this.container = new _models_owf_container_model__WEBPACK_IMPORTED_MODULE_1__["OwfContainerModel"]();
    }
    OwfContainerService.prototype.getContainer = function () {
        return this.container;
    };
    OwfContainerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], OwfContainerService);
    return OwfContainerService;
}());



/***/ }),

/***/ "./src/app/service/user-core.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/user-core.service.ts ***!
  \**********************************************/
/*! exports provided: UserCoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCoreService", function() { return UserCoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user-model */ "./src/app/models/user-model.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config-service */ "./src/app/service/config-service.ts");
/* harmony import */ var _owf_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./owf-container-service */ "./src/app/service/owf-container-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserCoreService = /** @class */ (function () {
    function UserCoreService(http, configService, owfContainerService) {
        this.http = http;
        this.configService = configService;
        this.owfContainerService = owfContainerService;
        this.user = null;
        this.uuid = null;
        this.summary = null;
        this.groups = null;
        this.dashboards = null;
        this.widgets = null;
        this.owfUrl = 'https://localhost:8443/owf';
    }
    UserCoreService.prototype.getConfig = function () {
        return this.configService.getConfig();
    };
    UserCoreService.prototype.getOwfContainerInfo = function () {
        return this.owfContainerService.getContainer();
    };
    UserCoreService.prototype.getUser = function () {
        if (this.user === null) {
            this.retrieveOwfUserInfo();
        }
        return this.user;
    };
    UserCoreService.prototype.retrieveOwfUserInfo = function () {
        Ozone.pref.PrefServer.getCurrentUser({
            onSuccess: this.retrieveOwfUserSuccess.bind(this),
            onFailure: this.retrieveOwfUserError.bind(this)
        });
    };
    UserCoreService.prototype.retrieveOwfUserSuccess = function (userInfo) {
        var user = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["UserModel"](userInfo.currentUserName, userInfo.currentUser, userInfo.currentUserPrevLogin, userInfo.currentId, userInfo.email);
        console.log('UserCore Service (retrieveOwfUserSuccess) completed: ', user);
        this.user = user;
    };
    UserCoreService.prototype.retrieveOwfUserError = function (error, status) {
        console.log('UserCoreService, retrieveOwfUserError()', error, status);
    };
    UserCoreService.prototype.getUUID = function () {
        if (this.uuid === null) {
            this.retrieveUserUUID();
        }
        return this.uuid;
    };
    UserCoreService.prototype.retrieveUserUUID = function () {
        OWF.Preferences.getUserPreference({
            namespace: 'widget.base.user',
            name: 'uuid',
            onSuccess: this.retrieveUserUUIDSuccess.bind(this),
            onFailure: this.retrieveUserUUIDError.bind(this)
        });
    };
    UserCoreService.prototype.retrieveUserUUIDSuccess = function (prefValue) {
        var uuid = JSON.parse(prefValue.value);
        console.log('UserCore Service (retrieveUserUUIDSuccess) completed: ', uuid);
        this.uuid = uuid;
    };
    UserCoreService.prototype.retrieveUserUUIDError = function (error, status) {
        console.log('UserCoreService, retrieveUserUUIDError()', error, status);
        if (status !== 404) {
            this.uuid = OWF.Util.guid();
            this.setUserUUID(this.uuid);
        }
    };
    UserCoreService.prototype.setUserUUID = function (uuid) {
        OWF.Preferences.setUserPreference({
            namespace: 'widget.base.user',
            name: 'uuid',
            value: JSON.stringify(uuid),
            onSuccess: this.setUserUUIDSuccess.bind(this),
            onFailure: this.setUserUUIDError.bind(this)
        });
    };
    UserCoreService.prototype.setUserUUIDSuccess = function (prefValue) {
        console.log('UserCore Service (setUserUUIDSuccess) completed: ', prefValue);
    };
    UserCoreService.prototype.setUserUUIDError = function (error, status) {
        console.log('UserCoreService, setUserUUIDError()', error, status);
    };
    UserCoreService.prototype.getUserSummary = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa('testAdmin1:password')
            })
        };
        this.summary = this.http
            .get(this.owfUrl + '/user/' + id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getUserSummary', [])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
        return this.summary;
    };
    UserCoreService.prototype.getUserGroups = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa('testAdmin1:password')
            })
        };
        this.groups = this.http
            .get(this.owfUrl + '/group?user_id=' + id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getUserGroups', [])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(console.log));
        return this.groups;
    };
    UserCoreService.prototype.getDashboard = function (userId) {
        if (this.dashboards === null) {
            this.retrieveOwfUserDashboardInfo(userId);
        }
        return this.dashboards;
    };
    UserCoreService.prototype.retrieveOwfUserDashboardInfo = function (userId) {
        var searchConfig = {
            user_id: userId,
            onSuccess: this.retrieveOwfUserDashboardSuccess.bind(this),
            onFailure: this.retrieveOwfUserDashboardError.bind(this)
        };
        OWF.Preferences.findDashboards(searchConfig);
    };
    UserCoreService.prototype.retrieveOwfUserDashboardSuccess = function (dashboardInfo) {
        var dashboards = null;
        dashboardInfo.data.forEach(function (value) {
            var dashboard = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["UserDashboardAttribute"](value.createdDate, value.editedDate, value.description, value.guid, value.name, value.user.userId, value.isGroupDashboard, value.isDefault, value.locked, value.poblishedToStore, value.dashboardPosition, value.iconImageUrl, new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["UserDashboardStack"](value.stack.approved, value.stack.id, value.stack.name, (value.stack.owner ? value.stack.owner.name : null), (value.stack.owner ? value.stack.owner.id : null), value.stack.imageUrl));
            if (dashboards === null) {
                dashboards = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["UserDashboardModel"](dashboardInfo.results, dashboardInfo.success, [dashboard]);
            }
            else {
                dashboards.attributes.push(dashboard);
            }
        });
        console.log('UserCore Service (retrieveOwfUserDashboardSuccess) completed: ', dashboards);
        this.dashboards = dashboards;
    };
    UserCoreService.prototype.retrieveOwfUserDashboardError = function (error, status) {
        console.log('UserCoreService, retrieveOwfUserDashboardError()', error, status);
    };
    UserCoreService.prototype.getWidgets = function () {
        if (this.widgets === null) {
            this.retrieveOwfUserWidgetsInfo();
        }
        return this.widgets;
    };
    UserCoreService.prototype.retrieveOwfUserWidgetsInfo = function () {
        var searchConfig = {
            userOnly: true,
            onSuccess: this.retrieveOwfUserWidgetsSuccess.bind(this),
            onFailure: this.retrieveOwfUserWidgetsError.bind(this)
        };
        OWF.Preferences.findWidgets(searchConfig);
    };
    UserCoreService.prototype.retrieveOwfUserWidgetsSuccess = function (widgetInfo) {
        var widgets = widgetInfo;
        console.log('UserCore Service (retrieveOwfUserWidgetsSuccess) completed: ', widgets);
        this.widgets = widgets;
    };
    UserCoreService.prototype.retrieveOwfUserWidgetsError = function (error, status) {
        console.log('UserCoreService, retrieveOwfUserWidgetsError()', error, status);
    };
    UserCoreService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    UserCoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _owf_container_service__WEBPACK_IMPORTED_MODULE_6__["OwfContainerService"]])
    ], UserCoreService);
    return UserCoreService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_library_owf_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/library/owf-api */ "./src/app/library/owf-api.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
// add document/OWF ready check state
jquery__WEBPACK_IMPORTED_MODULE_4__(document).ready(function () {
    OWF.ready(function () {
        var owfapi = new _app_library_owf_api__WEBPACK_IMPORTED_MODULE_5__["OwfApi"]();
        owfapi.initialize();
        Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
            .catch(function (err) { return console.error(err); });
    });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/development/opt/projects/angular/angular-widget/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map