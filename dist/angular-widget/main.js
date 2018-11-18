(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1 [innerHTML]=\"title\"></h1>\n  <button\n  (click)=\"notifyMenu()\">\n  Menu-Action\n</button>\n</div>\n<app-menu></app-menu>\n<app-owf-information></app-owf-information>"

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
/* harmony import */ var _service_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/menu-service */ "./src/app/service/menu-service.ts");
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
    function AppComponent(menuService) {
        this.menuService = menuService;
        this.title = 'OWF Angular Sample Widget<br>w/Prime Faces NG';
        menuService.menuSubscriber$.subscribe(function (event) {
            var e = event;
            console.log(e.item.label + " received by AppComponent");
        });
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.notifyMenu = function () {
        this.menuService.publisherAction('New File');
        console.log('New File, pressed from AppComponent');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_service_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]]
        }),
        __metadata("design:paramtypes", [_service_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/menubar */ "./node_modules/primeng/menubar.js");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_menubar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/fieldset */ "./node_modules/primeng/fieldset.js");
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_fieldset__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_owf_information_owf_information_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/owf-information/owf-information.component */ "./src/app/components/owf-information/owf-information.component.ts");
/* harmony import */ var _components_owf_information_owf_container_owf_container_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/owf-information/owf-container/owf-container.component */ "./src/app/components/owf-information/owf-container/owf-container.component.ts");
/* harmony import */ var _components_owf_information_app_configuration_app_configuration_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/owf-information/app-configuration/app-configuration.component */ "./src/app/components/owf-information/app-configuration/app-configuration.component.ts");
/* harmony import */ var _components_owf_information_user_information_user_information_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/owf-information/user-information/user-information.component */ "./src/app/components/owf-information/user-information/user-information.component.ts");
/* harmony import */ var _components_owf_information_user_uuid_user_uuid_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/owf-information/user-uuid/user-uuid.component */ "./src/app/components/owf-information/user-uuid/user-uuid.component.ts");
/* harmony import */ var _components_owf_information_user_summary_user_summary_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/owf-information/user-summary/user-summary.component */ "./src/app/components/owf-information/user-summary/user-summary.component.ts");
/* harmony import */ var _components_owf_information_user_groups_user_groups_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/owf-information/user-groups/user-groups.component */ "./src/app/components/owf-information/user-groups/user-groups.component.ts");
/* harmony import */ var _components_owf_information_user_dashboards_user_dashboards_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/owf-information/user-dashboards/user-dashboards.component */ "./src/app/components/owf-information/user-dashboards/user-dashboards.component.ts");
/* harmony import */ var _components_owf_information_user_widgets_user_widgets_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/owf-information/user-widgets/user-widgets.component */ "./src/app/components/owf-information/user-widgets/user-widgets.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
                _components_owf_information_owf_information_component__WEBPACK_IMPORTED_MODULE_11__["OwfInformationComponent"],
                _components_owf_information_owf_container_owf_container_component__WEBPACK_IMPORTED_MODULE_12__["OwfContainerComponent"],
                _components_owf_information_app_configuration_app_configuration_component__WEBPACK_IMPORTED_MODULE_13__["AppConfigurationComponent"],
                _components_owf_information_user_information_user_information_component__WEBPACK_IMPORTED_MODULE_14__["UserInformationComponent"],
                _components_owf_information_user_uuid_user_uuid_component__WEBPACK_IMPORTED_MODULE_15__["UserUUIDComponent"],
                _components_owf_information_user_summary_user_summary_component__WEBPACK_IMPORTED_MODULE_16__["UserSummaryComponent"],
                _components_owf_information_user_groups_user_groups_component__WEBPACK_IMPORTED_MODULE_17__["UserGroupsComponent"],
                _components_owf_information_user_dashboards_user_dashboards_component__WEBPACK_IMPORTED_MODULE_18__["UserDashboardsComponent"],
                _components_owf_information_user_widgets_user_widgets_component__WEBPACK_IMPORTED_MODULE_19__["UserWidgetsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                primeng_menubar__WEBPACK_IMPORTED_MODULE_5__["MenubarModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
                primeng_fieldset__WEBPACK_IMPORTED_MODULE_6__["FieldsetModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_8__["CardModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_9__["PanelModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
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

module.exports = "<p-menubar [model]=\"menuItems.items\" [autoDisplay]=\"false\">\n  <div>\n      <input type=\"text\" #search placeholder=\"{{searchText}}\" (keyup.enter)=\"onSearchEnter(search.value)\">\n      <button pButton label=\"Logout\" icon=\"fa fa-sign-out\" style=\"margin-left:.25em\"></button>\n  </div>\n</p-menubar>"

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
/* harmony import */ var _service_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/menu-service */ "./src/app/service/menu-service.ts");
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
    function MenuComponent(menuService) {
        this.menuService = menuService;
        this.searchText = 'Search';
        this.subscription = menuService.menuPublisher$.subscribe(function (itemName) {
            console.log(itemName + " received by MenuComponent");
        });
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.menuItems = new _models_menu_model__WEBPACK_IMPORTED_MODULE_2__["MenuModel"]();
        // add commands to menu model
        var items = this.menuItems;
        items.items[0].items[0].command = this.notifyMenu.bind(this); // user -> info
        items.items[0].items[2].command = this.notifyMenu.bind(this); // user -> uuid
        items.items[0].items[3].command = this.notifyMenu.bind(this); // user -> summary
        items.items[0].items[5].items[0].command = this.notifyMenu.bind(this); // user -> details -> dashboards
        items.items[0].items[5].items[1].command = this.notifyMenu.bind(this); // user -> details -> groups
        items.items[0].items[5].items[2].command = this.notifyMenu.bind(this); // user -> details -> widgets
        items.items[1].items[0].command = this.notifyMenu.bind(this); // help -> about
        items.items[1].items[1].command = this.notifyMenu.bind(this); // help -> refresh
    };
    MenuComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    MenuComponent.prototype.notifyMenu = function (event) {
        this.menuService.subscriberAction(event);
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
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_service_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/owf-information/app-configuration/app-configuration.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/owf-information/app-configuration/app-configuration.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3dmLWluZm9ybWF0aW9uL2FwcC1jb25maWd1cmF0aW9uL2FwcC1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/owf-information/app-configuration/app-configuration.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/owf-information/app-configuration/app-configuration.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  app-configuration works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/owf-information/app-configuration/app-configuration.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/owf-information/app-configuration/app-configuration.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AppConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigurationComponent", function() { return AppConfigurationComponent; });
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

var AppConfigurationComponent = /** @class */ (function () {
    function AppConfigurationComponent() {
    }
    AppConfigurationComponent.prototype.ngOnInit = function () {
    };
    AppConfigurationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-configuration',
            template: __webpack_require__(/*! ./app-configuration.component.html */ "./src/app/components/owf-information/app-configuration/app-configuration.component.html"),
            styles: [__webpack_require__(/*! ./app-configuration.component.css */ "./src/app/components/owf-information/app-configuration/app-configuration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppConfigurationComponent);
    return AppConfigurationComponent;
}());



/***/ }),

/***/ "./src/app/components/owf-information/owf-container/owf-container.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/owf-information/owf-container/owf-container.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3dmLWluZm9ybWF0aW9uL293Zi1jb250YWluZXIvb3dmLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/owf-information/owf-container/owf-container.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/owf-information/owf-container/owf-container.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  owf-container works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/owf-information/owf-container/owf-container.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/owf-information/owf-container/owf-container.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OwfContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwfContainerComponent", function() { return OwfContainerComponent; });
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

var OwfContainerComponent = /** @class */ (function () {
    function OwfContainerComponent() {
    }
    OwfContainerComponent.prototype.ngOnInit = function () {
    };
    OwfContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-owf-container',
            template: __webpack_require__(/*! ./owf-container.component.html */ "./src/app/components/owf-information/owf-container/owf-container.component.html"),
            styles: [__webpack_require__(/*! ./owf-container.component.css */ "./src/app/components/owf-information/owf-container/owf-container.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OwfContainerComponent);
    return OwfContainerComponent;
}());



/***/ }),

/***/ "./src/app/components/owf-information/owf-information.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/owf-information/owf-information.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    align-items: center;\n}\n\n#cards {\n    float: left;\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vd2YtaW5mb3JtYXRpb24vb3dmLWluZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL293Zi1pbmZvcm1hdGlvbi9vd2YtaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jY2FyZHMge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/owf-information/owf-information.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/owf-information/owf-information.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-1\">.col-md-1</div>\n    <div class=\"col-md-1\">.col-md-1</div>\n    <div class=\"col-md-1\">.col-md-1</div>\n    <div class=\"col-md-1\">.col-md-1</div>\n    <div class=\"col-md-1\">.col-md-1</div>\n    <div class=\"col-md-1\">.col-md-1</div>\n    <div class=\"col-md-1\">.col-md-1</div>\n    <div class=\"col-md-1\">.col-md-1</div>\n    <div class=\"col-md-1\">.col-md-1</div>\n    <div class=\"col-md-1\">.col-md-1</div>\n    <div class=\"col-md-1\">.col-md-1</div>\n    <div class=\"col-md-1\">.col-md-1</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-8\">.col-md-8</div>\n    <div class=\"col-md-4\">.col-md-4</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">.col-md-4</div>\n    <div class=\"col-md-4\">.col-md-4</div>\n    <div class=\"col-md-4\">.col-md-4</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">.col-md-6</div>\n    <div class=\"col-md-6\">.col-md-6</div>\n  </div>\n  <p-fieldset legend=\"OWF Container Information\" [toggleable]=\"true\">\n  <div id=\"cards\">\n    <p-card header=\"Simple Card\" [style]=\"{width: '360px'}\">\n      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae\n        numquam\n        deserunt\n        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque\n        quas!</div>\n    </p-card>\n    <p-card header=\"Simple Card\" [style]=\"{width: '360px'}\">\n      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae\n        numquam\n        deserunt\n        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque\n        quas!</div>\n    </p-card>\n    <p-card header=\"Simple Card\" [style]=\"{width: '360px'}\">\n      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae\n        numquam\n        deserunt\n        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque\n        quas!</div>\n    </p-card>\n    <p-card header=\"Simple Card\" [style]=\"{width: '360px'}\">\n      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae\n        numquam\n        deserunt\n        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque\n        quas!</div>\n    </p-card>\n    <p-card header=\"Simple Card\" [style]=\"{width: '360px'}\">\n      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae\n        numquam\n        deserunt\n        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque\n        quas!</div>\n    </p-card>\n  </div>\n</p-fieldset>\n"

/***/ }),

/***/ "./src/app/components/owf-information/owf-information.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/owf-information/owf-information.component.ts ***!
  \*************************************************************************/
/*! exports provided: OwfInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwfInformationComponent", function() { return OwfInformationComponent; });
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

var OwfInformationComponent = /** @class */ (function () {
    function OwfInformationComponent() {
    }
    OwfInformationComponent.prototype.ngOnInit = function () {
    };
    OwfInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-owf-information',
            template: __webpack_require__(/*! ./owf-information.component.html */ "./src/app/components/owf-information/owf-information.component.html"),
            styles: [__webpack_require__(/*! ./owf-information.component.css */ "./src/app/components/owf-information/owf-information.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OwfInformationComponent);
    return OwfInformationComponent;
}());



/***/ }),

/***/ "./src/app/components/owf-information/user-dashboards/user-dashboards.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/owf-information/user-dashboards/user-dashboards.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3dmLWluZm9ybWF0aW9uL3VzZXItZGFzaGJvYXJkcy91c2VyLWRhc2hib2FyZHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/owf-information/user-dashboards/user-dashboards.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/owf-information/user-dashboards/user-dashboards.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-dashboards works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/owf-information/user-dashboards/user-dashboards.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/owf-information/user-dashboards/user-dashboards.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: UserDashboardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardsComponent", function() { return UserDashboardsComponent; });
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

var UserDashboardsComponent = /** @class */ (function () {
    function UserDashboardsComponent() {
    }
    UserDashboardsComponent.prototype.ngOnInit = function () {
    };
    UserDashboardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-dashboards',
            template: __webpack_require__(/*! ./user-dashboards.component.html */ "./src/app/components/owf-information/user-dashboards/user-dashboards.component.html"),
            styles: [__webpack_require__(/*! ./user-dashboards.component.css */ "./src/app/components/owf-information/user-dashboards/user-dashboards.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserDashboardsComponent);
    return UserDashboardsComponent;
}());



/***/ }),

/***/ "./src/app/components/owf-information/user-groups/user-groups.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/owf-information/user-groups/user-groups.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3dmLWluZm9ybWF0aW9uL3VzZXItZ3JvdXBzL3VzZXItZ3JvdXBzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/owf-information/user-groups/user-groups.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/owf-information/user-groups/user-groups.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-groups works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/owf-information/user-groups/user-groups.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/owf-information/user-groups/user-groups.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UserGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupsComponent", function() { return UserGroupsComponent; });
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

var UserGroupsComponent = /** @class */ (function () {
    function UserGroupsComponent() {
    }
    UserGroupsComponent.prototype.ngOnInit = function () {
    };
    UserGroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-groups',
            template: __webpack_require__(/*! ./user-groups.component.html */ "./src/app/components/owf-information/user-groups/user-groups.component.html"),
            styles: [__webpack_require__(/*! ./user-groups.component.css */ "./src/app/components/owf-information/user-groups/user-groups.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserGroupsComponent);
    return UserGroupsComponent;
}());



/***/ }),

/***/ "./src/app/components/owf-information/user-information/user-information.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/owf-information/user-information/user-information.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3dmLWluZm9ybWF0aW9uL3VzZXItaW5mb3JtYXRpb24vdXNlci1pbmZvcm1hdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/owf-information/user-information/user-information.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/owf-information/user-information/user-information.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-information works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/owf-information/user-information/user-information.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/owf-information/user-information/user-information.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: UserInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInformationComponent", function() { return UserInformationComponent; });
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

var UserInformationComponent = /** @class */ (function () {
    function UserInformationComponent() {
    }
    UserInformationComponent.prototype.ngOnInit = function () {
    };
    UserInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-information',
            template: __webpack_require__(/*! ./user-information.component.html */ "./src/app/components/owf-information/user-information/user-information.component.html"),
            styles: [__webpack_require__(/*! ./user-information.component.css */ "./src/app/components/owf-information/user-information/user-information.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserInformationComponent);
    return UserInformationComponent;
}());



/***/ }),

/***/ "./src/app/components/owf-information/user-summary/user-summary.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/owf-information/user-summary/user-summary.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3dmLWluZm9ybWF0aW9uL3VzZXItc3VtbWFyeS91c2VyLXN1bW1hcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/owf-information/user-summary/user-summary.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/owf-information/user-summary/user-summary.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-summary works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/owf-information/user-summary/user-summary.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/owf-information/user-summary/user-summary.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UserSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSummaryComponent", function() { return UserSummaryComponent; });
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

var UserSummaryComponent = /** @class */ (function () {
    function UserSummaryComponent() {
    }
    UserSummaryComponent.prototype.ngOnInit = function () {
    };
    UserSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-summary',
            template: __webpack_require__(/*! ./user-summary.component.html */ "./src/app/components/owf-information/user-summary/user-summary.component.html"),
            styles: [__webpack_require__(/*! ./user-summary.component.css */ "./src/app/components/owf-information/user-summary/user-summary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserSummaryComponent);
    return UserSummaryComponent;
}());



/***/ }),

/***/ "./src/app/components/owf-information/user-uuid/user-uuid.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/owf-information/user-uuid/user-uuid.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3dmLWluZm9ybWF0aW9uL3VzZXItdXVpZC91c2VyLXV1aWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/owf-information/user-uuid/user-uuid.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/owf-information/user-uuid/user-uuid.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-uuid works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/owf-information/user-uuid/user-uuid.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/owf-information/user-uuid/user-uuid.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UserUUIDComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUUIDComponent", function() { return UserUUIDComponent; });
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

var UserUUIDComponent = /** @class */ (function () {
    function UserUUIDComponent() {
    }
    UserUUIDComponent.prototype.ngOnInit = function () {
    };
    UserUUIDComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-uuid',
            template: __webpack_require__(/*! ./user-uuid.component.html */ "./src/app/components/owf-information/user-uuid/user-uuid.component.html"),
            styles: [__webpack_require__(/*! ./user-uuid.component.css */ "./src/app/components/owf-information/user-uuid/user-uuid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserUUIDComponent);
    return UserUUIDComponent;
}());



/***/ }),

/***/ "./src/app/components/owf-information/user-widgets/user-widgets.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/owf-information/user-widgets/user-widgets.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3dmLWluZm9ybWF0aW9uL3VzZXItd2lkZ2V0cy91c2VyLXdpZGdldHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/owf-information/user-widgets/user-widgets.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/owf-information/user-widgets/user-widgets.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-widgets works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/owf-information/user-widgets/user-widgets.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/owf-information/user-widgets/user-widgets.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UserWidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserWidgetsComponent", function() { return UserWidgetsComponent; });
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

var UserWidgetsComponent = /** @class */ (function () {
    function UserWidgetsComponent() {
    }
    UserWidgetsComponent.prototype.ngOnInit = function () {
    };
    UserWidgetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-widgets',
            template: __webpack_require__(/*! ./user-widgets.component.html */ "./src/app/components/owf-information/user-widgets/user-widgets.component.html"),
            styles: [__webpack_require__(/*! ./user-widgets.component.css */ "./src/app/components/owf-information/user-widgets/user-widgets.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserWidgetsComponent);
    return UserWidgetsComponent;
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

/***/ "./src/app/service/menu-service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/menu-service.ts ***!
  \*****************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MenuService = /** @class */ (function () {
    function MenuService() {
        // Observable string sources
        this.menuPublisherSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.menuSubscriberSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Observable string streams
        this.menuPublisher$ = this.menuPublisherSource.asObservable();
        this.menuSubscriber$ = this.menuSubscriberSource.asObservable();
    }
    // Service message commands
    MenuService.prototype.publisherAction = function (menuItem) {
        this.menuPublisherSource.next(menuItem);
    };
    MenuService.prototype.subscriberAction = function (menuItem) {
        this.menuSubscriberSource.next(menuItem);
    };
    MenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MenuService);
    return MenuService;
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