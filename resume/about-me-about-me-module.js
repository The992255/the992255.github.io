(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-me-about-me-module"],{

/***/ "./src/app/about-me/about-me-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/about-me/about-me-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AboutMeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeRoutingModule", function() { return AboutMeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-me.component */ "./src/app/about-me/about-me.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _about_me_component__WEBPACK_IMPORTED_MODULE_2__["AboutMeComponent"] }
];
var AboutMeRoutingModule = /** @class */ (function () {
    function AboutMeRoutingModule() {
    }
    AboutMeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AboutMeRoutingModule);
    return AboutMeRoutingModule;
}());



/***/ }),

/***/ "./src/app/about-me/about-me.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-me/about-me.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li{\r\n    margin: 0 8px 8px 8px;\r\n}\r\na{\r\n    font-family: 'Noto Sans TC', sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksd0NBQXdDO0NBQzNDIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpe1xyXG4gICAgbWFyZ2luOiAwIDhweCA4cHggOHB4O1xyXG59XHJcbmF7XHJcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucyBUQycsIHNhbnMtc2VyaWY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/about-me/about-me.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-me/about-me.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading [@spinner]=\"spinnerState\"></app-loading>\n<div fxLayout=\"row\" fxLayoutAlign=\"center none\" style=\"margin-top: 40px;\">\n  <mat-card [@card]=\"cardState\" fxFlex=\"725px;\" fxFlex.sm=\"95\" fxFlex.lt-sm=\"95\">\n    <mat-card-header>\n      <mat-card-title style=\"font-family: 'Noto Sans TC', sans-serif;\">{{allIntroducton.name}}</mat-card-title>\n      <mat-card-subtitle style=\"font-family: 'Noto Sans TC', sans-serif;\">{{allIntroducton.subtitle}}</mat-card-subtitle>\n    </mat-card-header>\n    <img src={{allIntroducton.image}} style=\"max-width:100%\">\n    <mat-card-content style=\"font-family: 'Noto Sans TC', sans-serif;\">\n      <ul>\n        <p *ngFor=\"let description of allIntroducton.descriptions\">{{description}}</p>\n      </ul>\n    </mat-card-content>\n    <mat-card-actions>\n      <a mat-button  href={{allIntroducton.github}} target=\"_blank\">\n        <mat-icon color=\"accent\" class=\"fab fa-github\" style=\"font-size:1.5rem\"></mat-icon> Github\n      </a>\n      <a mat-button href={{allIntroducton.linkedin}} target=\"_blank\">\n        <mat-icon color=\"accent\" class=\"fab fa-linkedin\" style=\"font-size:1.5rem\"></mat-icon> linkedIn\n      </a>\n    </mat-card-actions>\n  </mat-card>\n</div>\n<div [@card]=\"cardState\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"center none\" style=\"margin-top: 40px;\" *ngFor=\"let introducton of allIntroducton.lists;\">\n    <mat-card fxFlex=\"725px;\" fxFlex.sm=\"95\" fxFlex.lt-sm=\"95\">\n      <mat-card-header>\n        <mat-card-title style=\"font-family: 'Noto Sans TC', sans-serif;\">{{introducton.title}}</mat-card-title>\n      </mat-card-header>\n      <mat-card-content style=\"font-family: 'Noto Sans TC', sans-serif;\">\n        <ul *ngFor=\"let aboutItem of introducton.items\" style=\"display: flex;list-style-type: none; margin-bottom: 8px;\">\n          <li>\n            <i class={{aboutItem.icone}} style=\"line-height: 3rem;\" [ngStyle]=\"{'color': aboutItem.color}\"></i></li>\n          <li>\n            <div id={{aboutItem.type}}>{{aboutItem.type}}</div>\n            <div>{{aboutItem.vlaue}}</div>\n          </li>\n        </ul>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n<!-- <div fxLayout=\"row\" fxLayoutAlign=\"center none\">\n  <div fxFlex=\"80\">\n    <div *ngIf=\"!loadingAllInteroduction\">\n      <div *ngFor=\"let introducton of allIntroducton;\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"center none\">\n          <div class=\"position\" id={{introducton.title}}></div>\n          <div class=\"col-md-auto\">\n            <h2>{{introducton.title}}</h2>\n          </div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"center none\">\n          <div fxFlex=\"80\">\n            <ul *ngFor=\"let aboutItem of introducton.items\" style=\"display: flex;list-style-type: none; margin-bottom: 8px;\">\n              <li>\n                <i class={{aboutItem.icone}} style=\"line-height: 3rem;\" [ngStyle]=\"{'color': aboutItem.color}\"></i></li>\n              <li>\n                <div id={{aboutItem.type}}>{{aboutItem.type}}</div>\n                <div>{{aboutItem.vlaue}}</div>\n              </li>\n            </ul>\n            <hr>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n<!-- <div *ngIf=\"!loadingSkills\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"center none\">\n    <div fxFlex=\"80\" fxLayout=\"row\" fxLayoutAlign=\"center none\">\n      <div class=\"position\" id={{skills.title}}></div>\n      <h2>{{skills.title}}</h2>\n    </div>\n  </div>\n  <div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center none\" *ngFor=\"let skill of skills.items; let length = index\">\n      <div fxFlex=\"80\" fxLayout=\"row\" fxLayoutAlign=\"center none\">\n        <div fxFlex=\"80\">\n          <ul>\n            <div class=\"position\" id={{skill.type}}></div>\n            <h2>{{skill.type}}</h2>\n            <ul>\n              <li *ngFor=\"let value of skill.value\">{{value}}</li>\n            </ul>\n          </ul>\n          <hr *ngIf=\"length === skills.items.length-1\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n<!-- <div *ngIf=\"!loadingArtists\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"center none\">\n    <div fxFlex=\"80\" fxLayout=\"row\" fxLayoutAlign=\"center none\">\n      <div class=\"position\" id={{artists.title}}></div>\n      <h2>{{artists.title}}</h2>\n    </div>\n  </div>\n  <div fxLayout=\"row\" fxLayoutAlign=\"center none\" *ngFor=\"let item of artists.items; let length = index\">\n    <div fxFlex=\"80\" fxLayout=\"row\" fxLayoutAlign=\"center none\">\n      <div fxFlex=\"30\">\n        <ul>\n          <div class=\"position\" id={{item.title}}></div>\n          <h5><a href={{item.link}} target=\"_blank\" class=\"text-success\">{{item.title}}</a></h5>\n          <p>{{item.description}}</p>\n          <p class=\"text-secondary\">{{item.skills}}</p>\n        </ul>\n      </div>\n      <div fxFlex=\"50\">\n        <img src={{item.img}} style=\"max-width: 100%; max-height: 100%\">\n        <br>\n      </div>\n    </div>\n  </div>\n</div> -->"

/***/ }),

/***/ "./src/app/about-me/about-me.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase.service */ "./src/app/firebase.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
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




var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent(fbService, obsService) {
        this.fbService = fbService;
        this.obsService = obsService;
        this.allIntroducton = [];
        this.loadingAllInteroduction = true;
        this.spinnerState = 'inactive';
        this.cardState = 'inactive';
    }
    AboutMeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingAllInteroduction = true;
        this.fbService.getAllIntroducton().subscribe(function (data) {
            _this.loadingAllInteroduction = false;
            _this.allIntroducton = data;
            _this.loadingOk();
        }, function (error) {
            _this.loadingAllInteroduction = false;
            _this.allIntroducton = [];
            console.log(error.message);
            _this.loadingOk();
        });
    };
    AboutMeComponent.prototype.loadingOk = function () {
        this.spinnerState = 'active';
        this.cardState = 'active';
    };
    AboutMeComponent.prototype.ngOnDestroy = function () {
        this.obsService.leftMenuOppen.next(false);
    };
    AboutMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! ./about-me.component.html */ "./src/app/about-me/about-me.component.html"),
            styles: [__webpack_require__(/*! ./about-me.component.css */ "./src/app/about-me/about-me.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('spinner', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'scale(1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: '0',
                        transform: 'scale(1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-in'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('card', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: '0',
                        transform: 'scale(1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: '1',
                        transform: 'scale(1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"], _obserable_service__WEBPACK_IMPORTED_MODULE_3__["ObserableService"]])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/about-me/about-me.module.ts":
/*!*********************************************!*\
  !*** ./src/app/about-me/about-me.module.ts ***!
  \*********************************************/
/*! exports provided: AboutMeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeModule", function() { return AboutMeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _about_me_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-me-routing.module */ "./src/app/about-me/about-me-routing.module.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _about_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-me.component */ "./src/app/about-me/about-me.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutMeModule = /** @class */ (function () {
    function AboutMeModule() {
    }
    AboutMeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
                _about_me_routing_module__WEBPACK_IMPORTED_MODULE_1__["AboutMeRoutingModule"]
            ],
            declarations: [_about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"]]
        })
    ], AboutMeModule);
    return AboutMeModule;
}());



/***/ })

}]);
//# sourceMappingURL=about-me-about-me-module.js.map