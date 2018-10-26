(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["artists-artists-module"],{

/***/ "./src/app/artists/artists-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/artists/artists-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ArtistsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistsRoutingModule", function() { return ArtistsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _artists_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artists.component */ "./src/app/artists/artists.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _artists_component__WEBPACK_IMPORTED_MODULE_2__["ArtistsComponent"] }
];
var ArtistsRoutingModule = /** @class */ (function () {
    function ArtistsRoutingModule() {
    }
    ArtistsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ArtistsRoutingModule);
    return ArtistsRoutingModule;
}());



/***/ }),

/***/ "./src/app/artists/artists.component.css":
/*!***********************************************!*\
  !*** ./src/app/artists/artists.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li{\r\n    margin: 0 8px 8px 8px;\r\n}\r\na{\r\n    font-family: 'Noto Sans TC', sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aXN0cy9hcnRpc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLHdDQUF3QztDQUMzQyIsImZpbGUiOiJzcmMvYXBwL2FydGlzdHMvYXJ0aXN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGl7XHJcbiAgICBtYXJnaW46IDAgOHB4IDhweCA4cHg7XHJcbn1cclxuYXtcclxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIFRDJywgc2Fucy1zZXJpZjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/artists/artists.component.html":
/*!************************************************!*\
  !*** ./src/app/artists/artists.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading [@spinner]=\"spinnerState\"></app-loading>\n<div [@card]=\"cardState\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"center none\" style=\"margin-top: 40px;\" *ngFor=\"let item of artists.items;\">\n    <mat-card [@card]=\"cardState\" fxFlex=\"725px;\" fxFlex.sm=\"95\" fxFlex.lt-sm=\"95\">\n      <mat-card-header>\n        <mat-card-title id={{item.title}} style=\"font-family: 'Noto Sans TC', sans-serif;\">{{item.title}}</mat-card-title>\n      </mat-card-header>\n      <img src={{item.img}} style=\"max-width: 100%; max-height: 100%\">\n      <mat-card-content style=\"font-family: 'Noto Sans TC', sans-serif;\">\n        <ul>\n          <p>{{item.description}}</p>\n          <p class=\"text-secondary\">{{item.skills}}</p>\n        </ul>\n      </mat-card-content>\n      <mat-card-actions>\n        <span>\n          <a mat-button href={{item.link}} target=\"_blank\">\n            <mat-icon color=\"accent\" class=\"fas fa-link\" style=\"font-size:1.2rem\"></mat-icon> Demo\n          </a>\n        </span>\n        <span>\n          <a mat-button href={{item.githubLink}} target=\"_blank\">\n            <mat-icon color=\"accent\" class=\"fab fa-github\" style=\"font-size:1.2rem\"></mat-icon> Github\n          </a>\n        </span>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/artists/artists.component.ts":
/*!**********************************************!*\
  !*** ./src/app/artists/artists.component.ts ***!
  \**********************************************/
/*! exports provided: ArtistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistsComponent", function() { return ArtistsComponent; });
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




var ArtistsComponent = /** @class */ (function () {
    function ArtistsComponent(fbService, obsService) {
        this.fbService = fbService;
        this.obsService = obsService;
        this.artists = {};
        this.loadingArtists = true;
        this.spinnerState = 'inactive';
        this.cardState = 'inactive';
    }
    ArtistsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fbService.getArtists().subscribe(function (data) {
            _this.loadingArtists = false;
            _this.artists = data;
            _this.loadingOk();
        });
    };
    ArtistsComponent.prototype.loadingOk = function () {
        this.spinnerState = 'active';
        this.cardState = 'active';
    };
    ArtistsComponent.prototype.ngOnDestroy = function () {
        this.obsService.leftMenuOppen.next(false);
    };
    ArtistsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-artists',
            template: __webpack_require__(/*! ./artists.component.html */ "./src/app/artists/artists.component.html"),
            styles: [__webpack_require__(/*! ./artists.component.css */ "./src/app/artists/artists.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('spinner', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'scale(1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0,
                        transform: 'scale(1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-in'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('card', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0,
                        transform: 'scale(1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 1,
                        transform: 'scale(1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"], _obserable_service__WEBPACK_IMPORTED_MODULE_3__["ObserableService"]])
    ], ArtistsComponent);
    return ArtistsComponent;
}());



/***/ }),

/***/ "./src/app/artists/artists.module.ts":
/*!*******************************************!*\
  !*** ./src/app/artists/artists.module.ts ***!
  \*******************************************/
/*! exports provided: ArtistsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistsModule", function() { return ArtistsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _artists_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artists-routing.module */ "./src/app/artists/artists-routing.module.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _artists_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./artists.component */ "./src/app/artists/artists.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ArtistsModule = /** @class */ (function () {
    function ArtistsModule() {
    }
    ArtistsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _artists_routing_module__WEBPACK_IMPORTED_MODULE_1__["ArtistsRoutingModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"]
            ],
            declarations: [_artists_component__WEBPACK_IMPORTED_MODULE_3__["ArtistsComponent"]]
        })
    ], ArtistsModule);
    return ArtistsModule;
}());



/***/ })

}]);
//# sourceMappingURL=artists-artists-module.js.map