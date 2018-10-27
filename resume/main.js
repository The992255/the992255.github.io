(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./about-me/about-me.module": [
		"./src/app/about-me/about-me.module.ts",
		"about-me-about-me-module"
	],
	"./artists/artists.module": [
		"./src/app/artists/artists.module.ts",
		"artists-artists-module"
	],
	"./page-not-found/page-not-found.module": [
		"./src/app/page-not-found/page-not-found.module.ts",
		"page-not-found-page-not-found-module"
	],
	"./skills/skills.module": [
		"./src/app/skills/skills.module.ts",
		"skills-skills-module"
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
	return __webpack_require__.e(ids[1]).then(function() {
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

module.exports = "mat-sidenav-container{\r\n  position: relative;\r\n  z-index: 1;\r\n  display: block;\r\n  height: calc(100vh - 64px);\r\n  overflow: auto;\r\n  top: 64px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLFVBQVU7Q0FDWCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYtY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHRvcDogNjRweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"themeClassName\">\n  <app-top-menu (themeNameOnput)=\"getThemeName($event)\" [themeNameInput]=\"themeClassName\" (isLeftmenyOpenedOnput)=\"toGetOppen($event)\"\n    [isLeftmenyOpenedInput]=\"oppen\"></app-top-menu>\n  <div class=\"overflow\">\n    <!-- <mat-toolbar color=\"primary\" style=\"font-family: 'Noto Sans TC', sans-serif;\">\n      <span>關於我</span>\n    </mat-toolbar> -->\n    <mat-sidenav-container>\n      <mat-sidenav #sidenav mode=\"side\" opened [(mode)]=\"over\" [(opened)]=\"oppen\">\n        <app-left-menu></app-left-menu>\n      </mat-sidenav>\n      <mat-sidenav-content>\n        <div fxLayout='row'>\n          <!-- <div fxShow fxHide.gt-md=\"false\" fxHide.lt-md=\"true\">\n            <app-left-menu></app-left-menu>\n          </div> -->\n          <div fxFlex=\"100\">\n            <router-outlet></router-outlet>\n            <br><br>\n          </div>\n        </div>\n      </mat-sidenav-content>\n    </mat-sidenav-container>\n  </div>\n</div>"

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
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _obserable_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./obserable.service */ "./src/app/obserable.service.ts");
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
    function AppComponent(media, obsService) {
        var _this = this;
        this.media = media;
        this.obsService = obsService;
        // tslint:disable-next-line:no-inferrable-types
        this.oppen = true;
        // tslint:disable-next-line:no-inferrable-types
        this.over = 'side';
        // tslint:disable-next-line:no-inferrable-types
        this.themeClassName = '';
        // tslint:disable-next-line:no-inferrable-types
        this.nowMedia = '';
        this.watcher = this.media.subscribe(function (change) {
            _this.nowMedia = change.mqAlias;
            if (_this.nowMedia === 'sm' || _this.nowMedia === 'xs') {
                _this.oppen = false;
                _this.over = 'over';
            }
            else {
                _this.oppen = true;
                _this.over = 'side';
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCookie();
        this.obsService.leftMenuOppen.subscribe(function (open) {
            if (_this.nowMedia === 'sm' || _this.nowMedia === 'xs') {
                _this.oppen = open;
            }
        });
    };
    AppComponent.prototype.getThemeName = function (themeClassName) {
        this.themeClassName = themeClassName;
        this.setCookie();
    };
    AppComponent.prototype.toGetOppen = function (oppen) {
        this.oppen = oppen;
    };
    AppComponent.prototype.getCookie = function () {
        if (document.cookie === '') {
            this.themeClassName = 'custom-theme-light';
            this.setCookie();
        }
        else {
            this.themeClassName = document.cookie.split('theme=')[1];
        }
    };
    AppComponent.prototype.setCookie = function () {
        var expire_days = 30;
        var d = new Date();
        d.setTime(d.getTime() + (expire_days * 24 * 60 * 60 * 1000));
        var expires = 'expires=' + d.toUTCString();
        document.cookie = "theme=" + this.themeClassName + '; ' + expires + ';';
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ObservableMedia"], _obserable_service__WEBPACK_IMPORTED_MODULE_2__["ObserableService"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./left-menu/left-menu.component */ "./src/app/left-menu/left-menu.component.ts");
/* harmony import */ var _my_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-router.module */ "./src/app/my-router.module.ts");
/* harmony import */ var _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./top-menu/top-menu.component */ "./src/app/top-menu/top-menu.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./share/share.module */ "./src/app/share/share.module.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_4__["LeftMenuComponent"],
                _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_6__["TopMenuComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _my_router_module__WEBPACK_IMPORTED_MODULE_5__["MyRouterModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/firebase.service.ts":
/*!*************************************!*\
  !*** ./src/app/firebase.service.ts ***!
  \*************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Artists } from '../interface/about-me/Artists';
// import { Introduction } from '../interface/about-me/Introduction';
// import { Skills } from '../interface/about-me/Skills';
// import { Menu } from '../interface/Menu';
var FirebaseService = /** @class */ (function () {
    function FirebaseService(httpClient) {
        this.httpClient = httpClient;
        // private allIntroducton: Array<Introduction> = [
        //   {
        //     title: '基本資料',
        //     items: [
        //       { color: 'blue', icone: 'fas fa-use', type: '姓名', vlaue: '熊柏翰' },
        //       { color: 'dodgerblue', icone: 'fas fa-transgender', type: '性別', vlaue: '男性' },
        //       { color: 'papaywhip', icone: 'fas fa-birthday-cake"', type: '生日', vlaue: '1994年6月' }
        //     ]
        //   },
        //   {
        //     title: '連絡方式',
        //     items: [
        //       { color: 'green', icone: 'fas fa-phone', type: '手機', vlaue: '09307516561' },
        //       { color: 'dodgerblue', icone: 'fas fa-envelope', type: '信箱', vlaue: 'a09307516561@gmail.com' }
        //     ]
        //   },
        //   {
        //     title: '學歷',
        //     items: [
        //       { color: 'darkslateblue', icone: 'fas fa-university', type: '大學', vlaue: '長榮大學' },
        //       { color: 'mediumspringgreen', icone: 'fas fa-book', type: '科系', vlaue: '資訊工程學系' }
        //     ]
        //   }
        // ];
        // private artists: Artists = {
        //   title: '作品',
        //   items: [
        //     {
        //       description: '將圖片上傳到 imgur.com',
        //       skills: 'Imgur API',
        //       img: 'https://i.imgur.com/c1GwewA.png',
        //       link: 'https://the992255.github.io/file-uploader/',
        //       title: 'Fine Uploader'
        //     },
        //     {
        //       description: '個人網站',
        //       skills: 'Angular 6 、 Bootstrap 4 、 RWD',
        //       img: 'https://i.imgur.com/c1GwewA.png',
        //       link: 'https://the992255.github.io/file-uploader/',
        //       title: 'Resume'
        //     }
        //   ]
        // };
        // private menus: Array<Menu> = [
        //   {
        //     title: '基本資料',
        //     items: []
        //   },
        //   {
        //     title: '連絡方式',
        //     items: []
        //   },
        //   {
        //     title: '學歷',
        //     items: []
        //   },
        //   {
        //     title: '技能',
        //     items: ['前端語言', '前端開發', '其他開發工具']
        //   },
        //   {
        //     title: '作品',
        //     items: ['Fine Uploader', '個人網站']
        //   }
        // ];
        this.resumeAPI = 'https://the992255-resume.firebaseio.com';
    }
    FirebaseService.prototype.getAllIntroducton = function () {
        return this.httpGet(this.resumeAPI + "/allIntroducton.json");
    };
    FirebaseService.prototype.getSkills = function () {
        return this.httpGet(this.resumeAPI + "/skills.json");
    };
    FirebaseService.prototype.getArtists = function () {
        return this.httpGet(this.resumeAPI + "/artists.json");
    };
    FirebaseService.prototype.getMenus = function () {
        return this.httpGet(this.resumeAPI + "/menus.json");
    };
    FirebaseService.prototype.httpGet = function (API) {
        return this.httpClient.get(API);
    };
    FirebaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/left-menu/left-menu.component.css":
/*!***************************************************!*\
  !*** ./src/app/left-menu/left-menu.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-nav-list{\r\n    width: 225px;\r\n}\r\na{\r\n    font-family: 'Noto Sans TC', sans-serif;\r\n}\r\n.mat-expansion-panel-body{\r\n    padding: 0;\r\n}\r\n.mat-expansion-panel-body{\r\n    padding: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVmdC1tZW51L2xlZnQtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksd0NBQXdDO0NBQzNDO0FBQ0Q7SUFDSSxXQUFXO0NBQ2Q7QUFDRDtJQUNJLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2xlZnQtbWVudS9sZWZ0LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1uYXYtbGlzdHtcclxuICAgIHdpZHRoOiAyMjVweDtcclxufVxyXG5he1xyXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgVEMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHl7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHl7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/left-menu/left-menu.component.html":
/*!****************************************************!*\
  !*** ./src/app/left-menu/left-menu.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n  <mat-accordion>\n    <div *ngFor=\"let menu of menus;let length = index\">\n      <mat-expansion-panel [expanded]=\"whichOppen === length\" style=\"margin:0\">\n        <mat-expansion-panel-header>\n          <mat-panel-title style=\"font-family: 'Noto Sans TC', sans-serif;\">\n            {{menu.title}}\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <mat-panel-title *ngFor=\"let item of menu.items\" style=\"margin:0;\">\n          <span style=\"width:225px\">\n            <a mat-list-item [routerLink]=\"item.router\" style=\"font-size: 14px;\">{{item.title}}</a>\n          </span>\n        </mat-panel-title>\n      </mat-expansion-panel>\n    </div>\n  </mat-accordion>\n</mat-nav-list>\n<!-- <mat-nav-list>\n  <mat-accordion>\n      <mat-expansion-panel [expanded]=\"step === 0\" style=\"margin:0\">\n        <mat-expansion-panel-header>\n          <mat-panel-title style=\"font-family: 'Noto Sans TC', sans-serif;\">\n           {{menus[1].title}}\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <mat-panel-title style=\"margin:0;\">\n          <span style=\"width:225px\">222\n          </span>\n        </mat-panel-title>\n      </mat-expansion-panel>\n      <mat-expansion-panel [expanded]=\"step === 1\" style=\"margin:0\">\n        <mat-expansion-panel-header>\n          <mat-panel-title style=\"font-family: 'Noto Sans TC', sans-serif;\">\n           222\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <mat-panel-title style=\"margin:0;\">\n          <span style=\"width:225px\">222\n          </span>\n        </mat-panel-title>\n      </mat-expansion-panel>\n  </mat-accordion>\n</mat-nav-list> -->"

/***/ }),

/***/ "./src/app/left-menu/left-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/left-menu/left-menu.component.ts ***!
  \**************************************************/
/*! exports provided: LeftMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftMenuComponent", function() { return LeftMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase.service */ "./src/app/firebase.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeftMenuComponent = /** @class */ (function () {
    function LeftMenuComponent(fbService, http) {
        this.fbService = fbService;
        this.http = http;
        this.loading = false;
    }
    LeftMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fbService.getMenus().subscribe(function (data) {
            _this.menus = data;
            _this.loading = false;
        });
        switch (location.hash) {
            case '#/about-me':
                this.whichOppen = 0;
                break;
            case '#/skills':
                this.whichOppen = 0;
                break;
            case '#/artists':
                this.whichOppen = 1;
                break;
            default:
                this.whichOppen = null;
        }
    };
    LeftMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-left-menu',
            template: __webpack_require__(/*! ./left-menu.component.html */ "./src/app/left-menu/left-menu.component.html"),
            styles: [__webpack_require__(/*! ./left-menu.component.css */ "./src/app/left-menu/left-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LeftMenuComponent);
    return LeftMenuComponent;
}());



/***/ }),

/***/ "./src/app/loading/loading.component.css":
/*!***********************************************!*\
  !*** ./src/app/loading/loading.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-spinner{\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    z-index: 3;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zcGlubmVye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB6LWluZGV4OiAzO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/loading/loading.component.html":
/*!************************************************!*\
  !*** ./src/app/loading/loading.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner></mat-spinner>"

/***/ }),

/***/ "./src/app/loading/loading.component.ts":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
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

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/my-router.module.ts":
/*!*************************************!*\
  !*** ./src/app/my-router.module.ts ***!
  \*************************************/
/*! exports provided: MyRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRouterModule", function() { return MyRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: '/about-me', pathMatch: 'full' },
    { path: 'about-me', loadChildren: './about-me/about-me.module#AboutMeModule' },
    { path: 'skills', loadChildren: './skills/skills.module#SkillsModule' },
    { path: 'artists', loadChildren: './artists/artists.module#ArtistsModule' },
    { path: 'not-found', loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule' },
    { path: '**', redirectTo: '/not-found' }
];
var MyRouterModule = /** @class */ (function () {
    function MyRouterModule() {
    }
    MyRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MyRouterModule);
    return MyRouterModule;
}());



/***/ }),

/***/ "./src/app/obserable.service.ts":
/*!**************************************!*\
  !*** ./src/app/obserable.service.ts ***!
  \**************************************/
/*! exports provided: ObserableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserableService", function() { return ObserableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ObserableService = /** @class */ (function () {
    function ObserableService() {
        this.leftMenuOppen = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"];
        this.leftMenuitemOppen = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"];
    }
    ObserableService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ObserableService);
    return ObserableService;
}());



/***/ }),

/***/ "./src/app/share/share.module.ts":
/*!***************************************!*\
  !*** ./src/app/share/share.module.ts ***!
  \***************************************/
/*! exports provided: ShareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModule", function() { return ShareModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loading/loading.component */ "./src/app/loading/loading.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ShareModule = /** @class */ (function () {
    function ShareModule() {
    }
    ShareModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]
            ],
            declarations: [
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"]
            ],
            exports: [
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]
            ]
        })
    ], ShareModule);
    return ShareModule;
}());



/***/ }),

/***/ "./src/app/top-menu/top-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/top-menu/top-menu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-menu {\r\n    position: fixed;\r\n    top: 0;\r\n    z-index: 2;\r\n    box-shadow:0px 2px 8px 2px rgba(20%,20%,40%,0.5);\r\n    height: 64px;\r\n  }  \r\nspan{\r\n    font-size: 1rem;\r\n    font-family: 'Noto Sans TC', sans-serif;\r\n}  \r\n.mat-toolbar-title{\r\n    font-size: 1.5rem;\r\n}  \r\n.spacer{\r\n    flex: 1 1 auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLW1lbnUvdG9wLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsV0FBVztJQUNYLGlEQUFpRDtJQUNqRCxhQUFhO0dBQ2Q7QUFDSDtJQUNJLGdCQUFnQjtJQUNoQix3Q0FBd0M7Q0FDM0M7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL3RvcC1tZW51L3RvcC1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLW1lbnUge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJveC1zaGFkb3c6MHB4IDJweCA4cHggMnB4IHJnYmEoMjAlLDIwJSw0MCUsMC41KTtcclxuICAgIGhlaWdodDogNjRweDtcclxuICB9ICBcclxuc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIFRDJywgc2Fucy1zZXJpZjtcclxufVxyXG4ubWF0LXRvb2xiYXItdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4uc3BhY2Vye1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/top-menu/top-menu.component.html":
/*!**************************************************!*\
  !*** ./src/app/top-menu/top-menu.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"top-menu\" color=\"primary\">\n  <button mat-icon-button (click)=\"btnIsLeftmenyOpened()\" fxShow.sm=\"true\" fxShow.gt-sm=\"false\">\n    <mat-icon class=\"fas fa-bars\" style=\"font-size:1.2rem;\"></mat-icon>\n  </button>\n  <span><a routerLink=\"/about-me\" mat-button class=\"mat-toolbar-title\">Introduction</a></span>\n  <span>\n    {{title}}\n  </span>\n  <span class=\"spacer\"></span>\n  <button mat-icon-button (click)=\"btnChangeThem()\">\n    <mat-icon aria-label class=\"fas fa-palette\" style=\"font-size:1.2rem;\"></mat-icon>\n  </button>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/top-menu/top-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/top-menu/top-menu.component.ts ***!
  \************************************************/
/*! exports provided: TopMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMenuComponent", function() { return TopMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _obserable_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../obserable.service */ "./src/app/obserable.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopMenuComponent = /** @class */ (function () {
    function TopMenuComponent(router, obsService) {
        this.router = router;
        this.obsService = obsService;
        this.themeNameOnput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLeftmenyOpenedOnput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TopMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function (event) {
            switch (event.url) {
                case '/about-me':
                    _this.title = '基本資料';
                    break;
                case '/skills':
                    _this.title = '技能';
                    break;
                case '/artists':
                    _this.title = '網頁作品';
                    break;
                case '/':
                    _this.title = '基本資料';
                    break;
                default:
                    _this.title = 'Not found';
            }
        });
    };
    TopMenuComponent.prototype.btnChangeThem = function () {
        if (this.themeNameInput === 'custom-theme-light') {
            this.themeNameOnput.emit('custom-theme-dark');
        }
        else {
            this.themeNameOnput.emit('custom-theme-light');
        }
    };
    TopMenuComponent.prototype.btnIsLeftmenyOpened = function () {
        this.isLeftmenyOpenedOnput.emit(!this.isLeftmenyOpenedInput);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TopMenuComponent.prototype, "themeNameInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TopMenuComponent.prototype, "themeNameOnput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TopMenuComponent.prototype, "isLeftmenyOpenedInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TopMenuComponent.prototype, "isLeftmenyOpenedOnput", void 0);
    TopMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-menu',
            template: __webpack_require__(/*! ./top-menu.component.html */ "./src/app/top-menu/top-menu.component.html"),
            styles: [__webpack_require__(/*! ./top-menu.component.css */ "./src/app/top-menu/top-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _obserable_service__WEBPACK_IMPORTED_MODULE_3__["ObserableService"]])
    ], TopMenuComponent);
    return TopMenuComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Main user\Documents\Resume\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map