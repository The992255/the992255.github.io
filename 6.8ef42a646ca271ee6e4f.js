(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Gmv5:function(t,e){t.exports="li{\r\n    margin: 0 8px 8px 8px;\r\n}\r\na{\r\n    font-family: 'Noto Sans TC', sans-serif;\r\n}\r\nmat-card-content{\r\n    font-size: 1rem;\r\n  }"},fzGo:function(t,e){t.exports='<app-loading [@spinner]="spinnerState"></app-loading>\n<div fxLayout="row" fxLayoutAlign="center none" style="margin-top: 40px;">\n  <mat-card [@card]="cardState" fxFlex="725px;" fxFlex.sm="95" fxFlex.lt-sm="95">\n    <mat-card-header>\n      <mat-card-title id={{skills.title}} style="font-family: \'Noto Sans TC\', sans-serif;">{{skills.title}}</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-list>\n        <mat-list-item *ngFor="let skill of skills.items;" style="font-family: \'Noto Sans TC\', sans-serif;font-size: 1rem;">\n          <mat-icon color="accent" class="fas fa-code" mat-list-icon></mat-icon>\n          <h4 mat-line>{{skill.type}}</h4>\n          <p mat-line *ngFor="let value of skill.value"> {{value}} </p>\n        </mat-list-item>\n      </mat-list>\n    </mat-card-content>\n  </mat-card>\n</div>'},nGXA:function(t,e,n){"use strict";n.r(e);var i=n("CcnG"),o=n("ZYCi"),r=n("k0Fy"),a=n("bgVe"),l=n("QcEj"),c=function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},s=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(t,e,n){this.fbService=t,this.obsService=e,this.router=n,this.skills={},this.loadingSkills=!0,this.spinnerState="loading",this.cardState="loading"}return t.prototype.ngOnInit=function(){var t=this;this.fbService.getSkills().subscribe(function(e){t.loadingSkills=!1,t.skills=e,t.loadingOk()},function(e){t.loadingSkills=!1,t.router.navigate(["./broken"]),t.loadingOk()})},t.prototype.loadingOk=function(){this.spinnerState="loadingOk",this.cardState="loadingOk"},t.prototype.ngOnDestroy=function(){this.obsService.leftMenuOppen.next(!1)},t=c([Object(i.n)({selector:"app-skills",template:n("fzGo"),styles:[n("Gmv5")],animations:[l.a]}),s("design:paramtypes",[r.a,a.a,o.b])],t)}(),p=function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},d=[{path:"",component:f}],u=function(){function t(){}return t=p([Object(i.J)({imports:[o.c.forChild(d)],exports:[o.c]})],t)}(),m=n("ADsi");n.d(e,"SkillsModule",function(){return y});var g=function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},y=function(){function t(){}return t=g([Object(i.J)({imports:[m.a,u],declarations:[f]})],t)}()}}]);