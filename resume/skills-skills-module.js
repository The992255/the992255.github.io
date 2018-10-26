(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["skills-skills-module"],{

/***/ "./src/app/skills/skills-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/skills/skills-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SkillsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsRoutingModule", function() { return SkillsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills.component */ "./src/app/skills/skills.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _skills_component__WEBPACK_IMPORTED_MODULE_2__["SkillsComponent"] }
];
var SkillsRoutingModule = /** @class */ (function () {
    function SkillsRoutingModule() {
    }
    SkillsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SkillsRoutingModule);
    return SkillsRoutingModule;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li{\r\n    margin: 0 8px 8px 8px;\r\n}\r\na{\r\n    font-family: 'Noto Sans TC', sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSSx3Q0FBd0M7Q0FDM0MiLCJmaWxlIjoic3JjL2FwcC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaXtcclxuICAgIG1hcmdpbjogMCA4cHggOHB4IDhweDtcclxufVxyXG5he1xyXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgVEMnLCBzYW5zLXNlcmlmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading [@spinner]=\"spinnerState\"></app-loading>\n<div fxLayout=\"row\" fxLayoutAlign=\"center none\" style=\"margin-top: 40px;\">\n  <mat-card [@card]=\"cardState\" fxFlex=\"725px;\" fxFlex.sm=\"95\" fxFlex.lt-sm=\"95\">\n    <mat-card-header>\n      <mat-card-title id={{skills.title}} style=\"font-family: 'Noto Sans TC', sans-serif;\">{{skills.title}}</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-list>\n        <mat-list-item *ngFor=\"let skill of skills.items;\" style=\"font-family: 'Noto Sans TC', sans-serif;\">\n          <mat-icon color=\"accent\" class=\"fas fa-code\" mat-list-icon></mat-icon>\n          <h4 mat-line>{{skill.type}}</h4>\n          <p mat-line *ngFor=\"let value of skill.value\"> {{value}} </p>\n        </mat-list-item>\n      </mat-list>\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
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




var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(fbService, obsService) {
        this.fbService = fbService;
        this.obsService = obsService;
        this.skills = {};
        this.loadingSkills = true;
        this.spinnerState = 'inactive';
        this.cardState = 'inactive';
    }
    SkillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fbService.getSkills().subscribe(function (data) {
            _this.loadingSkills = false;
            _this.skills = data;
            _this.loadingOk();
        });
    };
    SkillsComponent.prototype.loadingOk = function () {
        this.spinnerState = 'active';
        this.cardState = 'active';
    };
    SkillsComponent.prototype.ngOnDestroy = function () {
        this.obsService.leftMenuOppen.next(false);
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")],
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
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.module.ts":
/*!*****************************************!*\
  !*** ./src/app/skills/skills.module.ts ***!
  \*****************************************/
/*! exports provided: SkillsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsModule", function() { return SkillsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _skills_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skills-routing.module */ "./src/app/skills/skills-routing.module.ts");
/* harmony import */ var _skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share/share.module */ "./src/app/share/share.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SkillsModule = /** @class */ (function () {
    function SkillsModule() {
    }
    SkillsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _share_share_module__WEBPACK_IMPORTED_MODULE_3__["ShareModule"],
                _skills_routing_module__WEBPACK_IMPORTED_MODULE_1__["SkillsRoutingModule"],
            ],
            declarations: [_skills_component__WEBPACK_IMPORTED_MODULE_2__["SkillsComponent"]]
        })
    ], SkillsModule);
    return SkillsModule;
}());



/***/ })

}]);
//# sourceMappingURL=skills-skills-module.js.map