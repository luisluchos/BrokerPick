(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+0Pt":
/*!*****************************************************************************!*\
  !*** ./src/app/components/user-card-snippet/user-card-snippet.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UserCardSnippetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardSnippetComponent", function() { return UserCardSnippetComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_no_images_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/no-images.pipe */ "yi7A");







function UserCardSnippetComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserCardSnippetComponent_div_0_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const marginData_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r4.verUserDetail(marginData_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "noImages");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Rent. acumulada: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Operaciones cerradas: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const marginData_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 6, marginData_r3._id.picture), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](marginData_r3._id.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", marginData_r3.totalMargin > 0 ? "#2ECC71" : "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 8, marginData_r3.totalMargin, ".2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](marginData_r3.totalTransactions);
} }
function UserCardSnippetComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UserCardSnippetComponent_div_0_div_1_Template, 16, 11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const marginsData_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", marginsData_r1);
} }
class UserCardSnippetComponent {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.limit = "6";
        this.margin = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
    }
    ngOnInit() {
        this.margin = this.apiService.getAllMargins(this.limit).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
            console.log("margin,", data.allMargin);
            return data.allMargin;
        }));
    }
    ;
    verUserDetail(item) {
        let idUser = item._id.idSub;
        console.log("ver datos de usuario: ", item);
        this.router.navigate(['/userList', idUser]);
    }
}
UserCardSnippetComponent.ɵfac = function UserCardSnippetComponent_Factory(t) { return new (t || UserCardSnippetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UserCardSnippetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserCardSnippetComponent, selectors: [["app-user-card-snippet"]], inputs: { limit: "limit" }, decls: 2, vars: 3, consts: [["class", "row", 4, "ngIf"], [1, "row"], ["class", " col-12 col-md-6 col-lg-3 col-xl-2 my-2", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "col-lg-3", "col-xl-2", "my-2"], [1, "card", 3, "click"], ["alt", "...", 1, "img-thumbnail", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"]], template: function UserCardSnippetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, UserCardSnippetComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.margin));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _pipes_no_images_pipe__WEBPACK_IMPORTED_MODULE_6__["NoImagesPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["PercentPipe"]], styles: ["img[_ngcontent-%COMP%] {\n  width: 20%;\n  border-radius: 20px;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  background-color: #F1FAEE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLWNhcmQtc25pcHBldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFDVixtQkFBbUI7QUFDdkI7O0FBRUk7RUFDSSxZQUFZO0VBQ1oseUJBQXdCO0FBQ2hDIiwiZmlsZSI6InVzZXItY2FyZC1zbmlwcGV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJke1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGMUZBRUU7XHJcbiAgICB9XHJcbiAgICBcclxuIl19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Usuario\Desktop\app\BrokerPick\app\src\main.ts */"zUnb");


/***/ }),

/***/ "8eS2":
/*!*******************************************************!*\
  !*** ./src/app/components/margin/margin.component.ts ***!
  \*******************************************************/
/*! exports provided: MarginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarginComponent", function() { return MarginComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/auth0-angular */ "2beD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function MarginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const marginData_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", marginData_r1 > 0 ? "green" : "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Margen: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 3, marginData_r1, ".2"), "");
} }
class MarginComponent {
    constructor(apiService, auth) {
        this.apiService = apiService;
        this.auth = auth;
        this.idSubscription = "";
        this.margin = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        this.auth.user$.subscribe((data) => {
            this.idSubscription = data.sub.slice(6);
            console.log("userData:", this.idSubscription);
        });
    }
    ngOnInit() {
        this.margin = this.apiService.getMarginByUser(this.idSubscription).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            console.log("margin,", data.userMargin[0].margin);
            return data.userMargin[0].margin;
        }));
    }
}
MarginComponent.ɵfac = function MarginComponent_Factory(t) { return new (t || MarginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
MarginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MarginComponent, selectors: [["app-margin"]], decls: 2, vars: 3, consts: [[4, "ngIf"]], template: function MarginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MarginComponent_div_0_Template, 4, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.margin));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["PercentPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXJnaW4uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "9iHZ":
/*!*******************************************************************!*\
  !*** ./src/app/components/login-button/login-button.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoginButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginButtonComponent", function() { return LoginButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "2beD");


class LoginButtonComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
}
LoginButtonComponent.ɵfac = function LoginButtonComponent_Factory(t) { return new (t || LoginButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
LoginButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginButtonComponent, selectors: [["app-login-button"]], decls: 2, vars: 0, consts: [[3, "click"]], template: function LoginButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginButtonComponent_Template_button_click_0_listener() { return ctx.auth.loginWithRedirect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "AH7J":
/*!*******************************************************!*\
  !*** ./src/app/components/trades/trades.component.ts ***!
  \*******************************************************/
/*! exports provided: TradesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradesComponent", function() { return TradesComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-angular */ "2beD");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function TradesComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 3, user_r1));
} }
class TradesComponent {
    constructor(auth, apiService) {
        this.auth = auth;
        this.apiService = apiService;
        //como evitar poner any, ¿debería ir como observable?
        this.userWallet = [];
        this.auth.user$.subscribe((data) => {
            this.userData = data.email;
            console.log("userData:", this.userData);
        });
    }
    ngOnInit() {
        this.apiService.getWalletByUser(this.userData).subscribe((data) => {
            this.userWallet = data.wallets[0];
            console.log("coins", data.wallets[0].coins);
            console.log(data.wallets[0]);
        });
        /**
         * Queremos sacar la suma de la cantidad de coins que tiene un user
         */
        this.apiService.getWalletByUser(this.userData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(((data) => data.wallets[0].coins.reduce((a, b) => a + b.cantidad, 0))))
            .subscribe((data) => console.log("total Coins", data));
    }
}
TradesComponent.ɵfac = function TradesComponent_Factory(t) { return new (t || TradesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
TradesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TradesComponent, selectors: [["app-trades"]], decls: 6, vars: 5, consts: [[4, "ngIf"]], template: function TradesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TradesComponent_ul_0_Template, 8, 5, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, ctx.auth.user$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.userWallet.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.userWallet.coins);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFkZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "B0da":
/*!*********************************************************************************!*\
  !*** ./src/app/components/user-private-wallet/user-private-wallet.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UserPrivateWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPrivateWalletComponent", function() { return UserPrivateWalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-angular */ "2beD");
/* harmony import */ var _user_card_snippet_user_card_snippet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-card-snippet/user-card-snippet.component */ "+0Pt");
/* harmony import */ var _margin_margin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../margin/margin.component */ "8eS2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _wallet_historical_wallet_historical_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../wallet-historical/wallet-historical.component */ "eqE4");
/* harmony import */ var _user_wallet_snippet_user_wallet_snippet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user-wallet-snippet/user-wallet-snippet.component */ "aKGt");








function UserPrivateWalletComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-user-wallet-snippet", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const coin_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("coin", coin_r1.coinName)("purchase_price", coin_r1.purchase_price)("market_price", coin_r1.market_price)("id", coin_r1.id);
} }
class UserPrivateWalletComponent {
    constructor(apiService, auth) {
        this.apiService = apiService;
        this.auth = auth;
        this.userEmail = "";
        this.idSubscription = "";
        this.myWallet = [];
        this.auth.user$.subscribe((data) => {
            this.userEmail = data.email;
            this.idSubscription = data.sub.slice(6);
            console.log("userData:", data);
            console.log("userData:", this.idSubscription);
        });
    }
    ngOnInit() {
        /**
         * SACAMOS DE LA DB EL USER QUE ESTÁ VIENDO SU PERFIL
         * MAP DEL ARRAY DEL OBJETO, Y FILTRAMOS POR LA CONDICIÓN, EN ESTE CASO SERÁ SOLD:FALSE PARA OBTENER LAS OPERACIONES QUE SIGUEN SIN VENDERSE.
         * FOREACH - FINALMENTE CON LA DATA OBTENIDA SACAMOS EN UNA VARIABLE EL NOMBRE DE LA COIN Y LA USAMOS PARA PASARLA COMO PARÁMETRO PARA EL APISERVICE
         * NOS SUBSCRIBIMOS Y EN UNA VARIABLE GUARDAMOS EL PRICING ACTUAL.
         * GUARDAMOS EN LA VARIABLE MEDIANTE PUSH EL OBJETO.
         */
        this.apiService.getWalletByUser(this.idSubscription)
            .subscribe((data) => {
            data.wallets.map((values) => {
                let data = values.coins.filter((dataWallet) => !dataWallet.sold);
                data.forEach((dataUser) => {
                    let coinName = dataUser.coin;
                    let purchase_price = dataUser.purchase_price;
                    let id = dataUser._id;
                    console.log(coinName);
                    this.apiService.getPriceCoin(coinName).subscribe((p) => {
                        let pricing = p[coinName].usd;
                        this.myWallet.push({ market_price: pricing, coinName, purchase_price, id });
                        console.log("myWalletobs", this.myWallet);
                    });
                });
            });
        });
        /*  .pipe(
           map((values:any) => {
             return values.wallets.filter((dataWallet:any) => !dataWallet.coins.sold)})
           ).subscribe((data:any)=>{
             data.forEach( (dataUser:any) =>{
               let coinName = dataUser.coin
               let purchase_price = dataUser.purchase_price
     
               this.apiService.getPriceCoin(coinName).subscribe((p:any)=>{
                 let pricing = p[coinName].usd
     
                 this.myWallet.push( {data: pricing , coinName, purchase_price  });
                 console.log("myWalletobs",this.myWallet);
              });
          });
        }); */
    }
}
UserPrivateWalletComponent.ɵfac = function UserPrivateWalletComponent_Factory(t) { return new (t || UserPrivateWalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
UserPrivateWalletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserPrivateWalletComponent, selectors: [["app-user-private-wallet"]], decls: 31, vars: 1, consts: [[1, "ocultar-div"], [1, "row", "justify-content-center"], [1, "col-12"], [1, "p-4"], [1, "row", "d-flex", "mx-2", "font-weight-bold"], [1, "col-6", "col-md-2", "text-left"], [1, "col-2", "col-md-2", "text-right"], [4, "ngFor", "ngForOf"], [1, "col-6", "col-md-3", "text-left"], [1, "col-2", "col-md-3", "text-right"], [3, "coin", "purchase_price", "market_price", "id"]], template: function UserPrivateWalletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-card-snippet", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-margin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Operaciones abiertas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Purchase Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Market Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UserPrivateWalletComponent_div_17_Template, 2, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Hist\u00F3rico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Purchase Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Market Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-wallet-historical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myWallet);
    } }, directives: [_user_card_snippet_user_card_snippet_component__WEBPACK_IMPORTED_MODULE_3__["UserCardSnippetComponent"], _margin_margin_component__WEBPACK_IMPORTED_MODULE_4__["MarginComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _wallet_historical_wallet_historical_component__WEBPACK_IMPORTED_MODULE_6__["WalletHistoricalComponent"], _user_wallet_snippet_user_wallet_snippet_component__WEBPACK_IMPORTED_MODULE_7__["UserWalletSnippetComponent"]], styles: ["p[_ngcontent-%COMP%] {\n  background: #F1FAEE;\n  padding: 1%;\n  margin-bottom: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLXByaXZhdGUtd2FsbGV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7QUFDckIiLCJmaWxlIjoidXNlci1wcml2YXRlLXdhbGxldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gICAgYmFja2dyb3VuZDogI0YxRkFFRTtcclxuICAgIHBhZGRpbmc6IDElO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgfVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ApiService {
    constructor(http) {
        this.http = http;
        this.BASE_URI = 'https://broker-pick.herokuapp.com/api'; //'http://localhost:3000/api';
        this.url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&";
        this.url2 = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin";
        this.currency = "&vs_currencies=usd";
    }
    /* Para hacer poder mostrar los datos en el HTML del componente, en lugar de hacer el subscribe en el servicio,
    tenemos que devolver un Observable de la llamada http */
    /* Los métodos observables son funciones declarativas, se definen para publicar valores pero no se ejecutan
    hasta que un consumidor se suscribe a ellas, desde ese momento recibe notificaciones hasta que finalice
    la función observable o finalice la suscripción de forma programada. */
    getAllCoins() {
        return this.http.get(`${this.url}`);
    }
    ;
    getPriceCoin(coin) {
        return this.http.get("https://api.coingecko.com/api/v3/simple/price?ids=" + coin + "&vs_currencies=usd");
    }
    ;
    getAllUserWallets() {
        return this.http.get(`${this.BASE_URI}/wallets/usersWallets`);
    }
    ;
    getWalletByUser(user) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('user', user);
        return this.http.get(`${this.BASE_URI}/wallets`, { params: params });
    }
    ;
    addWallet(payload) {
        return this.http.post(`${this.BASE_URI}/wallets`, payload);
    }
    ;
    sellCoin(payload) {
        return this.http.post(`${this.BASE_URI}/wallets/sellCoin`, payload);
    }
    ;
    getMarginByUser(user) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('user', user);
        return this.http.get(`${this.BASE_URI}/wallets/userMargin`, { params: params });
    }
    ;
    getMarginByUserName(user = "", limit) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('user', user)
            .set('limit', limit);
        return this.http.get(`${this.BASE_URI}/wallets/usersName`, { params: params });
    }
    ;
    getAllMargins(limit = "4") {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('limit', limit);
        return this.http.get(`${this.BASE_URI}/wallets/usersMargin`, { params: params });
    }
    ;
    getFollowsByUser(user) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('user', user);
        return this.http.get(`${this.BASE_URI}/socials`, { params: params });
    }
    ;
    addFollow(payload) {
        return this.http.post(`${this.BASE_URI}/socials`, payload);
    }
    ;
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "JQqO":
/*!*********************************************!*\
  !*** ./src/app/services/trades.resolver.ts ***!
  \*********************************************/
/*! exports provided: TradesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradesResolver", function() { return TradesResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "H+bZ");


class TradesResolver {
    constructor(apiService) {
        this.apiService = apiService;
    }
    resolve(route, state) {
        return this.apiService.getAllUserWallets();
    }
}
TradesResolver.ɵfac = function TradesResolver_Factory(t) { return new (t || TradesResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
TradesResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TradesResolver, factory: TradesResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QlPV":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_user_card_snippet_user_card_snippet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/user-card-snippet/user-card-snippet.component */ "+0Pt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function HomeComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const coin_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](coin_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 5, coin_r1.current_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", coin_r1.price_change_percentage_24h > 0 ? "green" : "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](8, 7, coin_r1.price_change_percentage_24h / 100, ".2"));
} }
class HomeComponent {
    constructor(apiService, route) {
        this.apiService = apiService;
        this.route = route;
        this.coins = [];
        this.userWallets = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        /* NO DEJA HACER RESOLVER PARA QUE REPIITA LA PETICIÓN A LA API CADA X SEGUNDOS
      
           this.route.data.subscribe(data => {
            console.log("data",data.coins);
            this.coins = data.coins;
          }); */
    }
    ;
    ngOnInit() {
        this.getRecurrentData();
        this.getUsersWallets();
    }
    ;
    /**
     * Capturamos la data de la Api externa
     */
    getRecurrentData() {
        this.coins = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(1, 60000) /* timer is another function that allows us to start the interval whenever we want, including right now */
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(() => this.apiService.getAllCoins()));
    }
    ;
    /**
     * Hacemos la petición para obtener los top Users
     */
    getUsersWallets() {
        this.userWallets = this.apiService.getAllUserWallets()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            console.log("wallets: ", data.wallets);
            return data.wallets;
            //.pipe porque queremos entrar a la información de wallets (data.wallets)
        }));
    }
    ;
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 19, vars: 3, consts: [[1, "text-center"], [1, "m-4"], [1, "ocultar-div"], [1, "my-4"], [1, "table", "container", "my-4"], ["scope", "col"], ["scope", "col", 1, "text-right"], [4, "ngFor", "ngForOf"], ["scope", "row", 1, "text-left"], [1, "text-right"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Top Traders");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-user-card-snippet", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Las 100 principales monedas seg\u00FAn la capitalizaci\u00F3n de mercado");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Current Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Price change 24h");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, HomeComponent_tr_17_Template, 9, 10, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 1, ctx.coins));
    } }, directives: [_components_user_card_snippet_user_card_snippet_component__WEBPACK_IMPORTED_MODULE_5__["UserCardSnippetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["PercentPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "RZmA":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_no_images_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/no-images.pipe */ "yi7A");







function SearchComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_div_3_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const marginData_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r5.verUserDetail(marginData_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "noImages");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Rent. acumulada: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Operaciones cerradas: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const marginData_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 6, marginData_r4._id.picture), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](marginData_r4._id.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", marginData_r4.totalMargin > 0 ? "#2ECC71" : "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 8, marginData_r4.totalMargin, ".2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](marginData_r4.totalTransactions);
} }
function SearchComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchComponent_div_3_div_1_Template, 16, 11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const marginsData_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", marginsData_r2);
} }
class SearchComponent {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.limit = "30";
        this.users = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        this.buscar(undefined);
    }
    ngOnInit() {
    }
    buscar(value) {
        console.log(value);
        this.users = this.apiService.getMarginByUserName(value, this.limit)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            console.log("artistadata: ", data);
            return data.userMargin;
        }));
        console.log("buscar user: ", this.users);
    }
    verUserDetail(item) {
        let idUser = item._id.idSub;
        console.log("ver datos de usuario: ", item);
        this.router.navigate(['/userList', idUser]);
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 5, vars: 3, consts: [["type", "search", "placeholder", "Buscar trader", 1, "form-control", "rounded", 3, "keyup"], ["userText", ""], ["class", "row", 4, "ngIf"], [1, "row"], ["class", " col-12 col-md-6 col-lg-3 col-xl-2 my-2", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "col-lg-3", "col-xl-2", "my-2"], [1, "card", 3, "click"], ["alt", "...", 1, "img-thumbnail", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function SearchComponent_Template_input_keyup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); return ctx.buscar(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SearchComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 1, ctx.users));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _pipes_no_images_pipe__WEBPACK_IMPORTED_MODULE_6__["NoImagesPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["PercentPipe"]], styles: ["img[_ngcontent-%COMP%] {\n  width: 20%;\n  border-radius: 20px;\n}\n\ninput[_ngcontent-%COMP%] {\n  background-color: #F1FAEE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3ZCOztBQUNBO0VBQ0kseUJBQXlCO0FBRTdCIiwiZmlsZSI6InNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIH1cclxuaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRkFFRTtcclxufSAgICAiXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _views_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/nav-bar/nav-bar.component */ "wMm4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container-fluid"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_views_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _views_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/page-not-found/page-not-found.component */ "r4Iu");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/home/home.component */ "QlPV");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/auth0-angular */ "2beD");
/* harmony import */ var _views_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/nav-bar/nav-bar.component */ "wMm4");
/* harmony import */ var _components_login_button_login_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login-button/login-button.component */ "9iHZ");
/* harmony import */ var _components_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/logout-button/logout-button.component */ "gbrI");
/* harmony import */ var _components_trades_trades_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/trades/trades.component */ "AH7J");
/* harmony import */ var _components_purchase_purchase_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/purchase/purchase.component */ "wRQo");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_purchase_snippet_purchase_snippet_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/purchase-snippet/purchase-snippet.component */ "kwXV");
/* harmony import */ var _components_user_private_wallet_user_private_wallet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/user-private-wallet/user-private-wallet.component */ "B0da");
/* harmony import */ var _components_user_wallet_snippet_user_wallet_snippet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user-wallet-snippet/user-wallet-snippet.component */ "aKGt");
/* harmony import */ var _components_user_card_snippet_user_card_snippet_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user-card-snippet/user-card-snippet.component */ "+0Pt");
/* harmony import */ var _components_pipes_no_images_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pipes/no-images.pipe */ "yi7A");
/* harmony import */ var _components_margin_margin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/margin/margin.component */ "8eS2");
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/user-list/user-list.component */ "sgBM");
/* harmony import */ var _components_user_wallet_details_user_wallet_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/user-wallet-details/user-wallet-details.component */ "yHn5");
/* harmony import */ var _components_wallet_historical_wallet_historical_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/wallet-historical/wallet-historical.component */ "eqE4");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/search/search.component */ "RZmA");
/* harmony import */ var _components_social_social_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/social/social.component */ "nJq9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ "fXoL");






// Import the module from the SDK




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__["AuthModule"].forRoot({
                domain: 'luisluchos.eu.auth0.com',
                clientId: 'EHFVk3EpOoS3bFaEhoL2jMS571czgDI3'
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _views_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"],
        _views_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _views_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"],
        _components_login_button_login_button_component__WEBPACK_IMPORTED_MODULE_8__["LoginButtonComponent"],
        _components_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_9__["LogoutButtonComponent"],
        _components_trades_trades_component__WEBPACK_IMPORTED_MODULE_10__["TradesComponent"],
        _components_purchase_purchase_component__WEBPACK_IMPORTED_MODULE_11__["PurchaseComponent"],
        _components_purchase_snippet_purchase_snippet_component__WEBPACK_IMPORTED_MODULE_13__["PurchaseSnippetComponent"],
        _components_user_private_wallet_user_private_wallet_component__WEBPACK_IMPORTED_MODULE_14__["UserPrivateWalletComponent"],
        _components_user_wallet_snippet_user_wallet_snippet_component__WEBPACK_IMPORTED_MODULE_15__["UserWalletSnippetComponent"],
        _components_user_card_snippet_user_card_snippet_component__WEBPACK_IMPORTED_MODULE_16__["UserCardSnippetComponent"],
        _components_pipes_no_images_pipe__WEBPACK_IMPORTED_MODULE_17__["NoImagesPipe"],
        _components_margin_margin_component__WEBPACK_IMPORTED_MODULE_18__["MarginComponent"],
        _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_19__["UserListComponent"],
        _components_user_wallet_details_user_wallet_details_component__WEBPACK_IMPORTED_MODULE_20__["UserWalletDetailsComponent"],
        _components_wallet_historical_wallet_historical_component__WEBPACK_IMPORTED_MODULE_21__["WalletHistoricalComponent"],
        _components_search_search_component__WEBPACK_IMPORTED_MODULE_22__["SearchComponent"],
        _components_social_social_component__WEBPACK_IMPORTED_MODULE_23__["SocialComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__["AuthModule"]] }); })();


/***/ }),

/***/ "aKGt":
/*!*********************************************************************************!*\
  !*** ./src/app/components/user-wallet-snippet/user-wallet-snippet.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UserWalletSnippetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserWalletSnippetComponent", function() { return UserWalletSnippetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




class UserWalletSnippetComponent {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.coin = "";
        this.purchase_price = 0;
        this.market_price = 0;
        this.id = "";
    }
    ngOnInit() {
    }
    /**
     * save in dataBase
     * @param margin operation margin
     * @param payload data that we send
     * reload th page
     */
    sell(event) {
        event.preventDefault();
        let margin = (this.market_price - this.purchase_price) / this.purchase_price;
        let payload = { id: this.id, market_price: this.market_price, sold: true, margin: margin, coin_sold: 1 };
        console.log("sell", payload);
        this.apiService.sellCoin(payload).subscribe((data) => {
            console.log("data Sell", data);
            /**
             * QUIERO QUE HAGA UN REFRESH DE LA PÁGINA, NO FUNCIONA HACER DIRECTAMENTE this.router.navigate(["/userwallet"]);
             */
            let currentUrl = this.router.url;
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate([currentUrl]);
            });
        });
    }
    ;
}
UserWalletSnippetComponent.ɵfac = function UserWalletSnippetComponent_Factory(t) { return new (t || UserWalletSnippetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UserWalletSnippetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserWalletSnippetComponent, selectors: [["app-user-wallet-snippet"]], inputs: { coin: "coin", purchase_price: "purchase_price", market_price: "market_price", id: "id" }, decls: 15, vars: 15, consts: [[1, "row", "d-flex", "mx-2"], [1, "col-6", "col-md-2", "text-left"], [1, "col-2", "col-md-2", "text-right"], [1, "col-12", "col-md-2", "btn", "btn-primary", "mx-auto", 3, "click"]], template: function UserWalletSnippetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "percent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserWalletSnippetComponent_Template_button_click_13_listener($event) { return ctx.sell($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx.coin));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, ctx.purchase_price));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 10, ctx.market_price));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.market_price - ctx.purchase_price > 0 ? "green" : "red");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 12, (ctx.market_price - ctx.purchase_price) / ctx.purchase_price, ".2"));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["PercentPipe"]], styles: ["p[_ngcontent-%COMP%] {\n  background: #F1FAEE;\n  padding: 1%;\n  margin-bottom: 1%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-bottom: 1%;\n  background-color: #E63946;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLXdhbGxldC1zbmlwcGV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBR0E7RUFDRSxpQkFBaUI7RUFFakIseUJBQXlCO0FBRDNCIiwiZmlsZSI6InVzZXItd2FsbGV0LXNuaXBwZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICBiYWNrZ3JvdW5kOiAjRjFGQUVFO1xyXG4gIHBhZGRpbmc6IDElO1xyXG4gIG1hcmdpbi1ib3R0b206IDElO1xyXG59XHJcblxyXG5cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U2Mzk0NjtcclxuXHJcbn0gXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "eqE4":
/*!*****************************************************************************!*\
  !*** ./src/app/components/wallet-historical/wallet-historical.component.ts ***!
  \*****************************************************************************/
/*! exports provided: WalletHistoricalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletHistoricalComponent", function() { return WalletHistoricalComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/auth0-angular */ "2beD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function WalletHistoricalComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 6, data_r3.coin));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 8, data_r3.purchase_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 10, data_r3.sold_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", data_r3.margin > 0 ? "green" : "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](12, 12, data_r3.margin, ".2"));
} }
function WalletHistoricalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, WalletHistoricalComponent_div_0_div_1_Template, 13, 15, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const newData_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", newData_r1);
} }
class WalletHistoricalComponent {
    constructor(apiService, auth) {
        this.apiService = apiService;
        this.auth = auth;
        this.idSubscription = "";
        this.historicalData = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        this.auth.user$.subscribe((data) => {
            this.idSubscription = data.sub.slice(6);
            console.log("hisoricaluserDataID:", this.idSubscription);
        });
    }
    ngOnInit() {
        this.historicalData = this.apiService.getWalletByUser(this.idSubscription)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            console.log("dataHistory", data.wallets[0]);
            return data.wallets[0].coins.filter((dataWallet) => dataWallet.sold);
        }));
    }
}
WalletHistoricalComponent.ɵfac = function WalletHistoricalComponent_Factory(t) { return new (t || WalletHistoricalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
WalletHistoricalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WalletHistoricalComponent, selectors: [["app-wallet-historical"]], decls: 2, vars: 3, consts: [[4, "ngIf"], ["class", "row d-flex mx-2 ", 4, "ngFor", "ngForOf"], [1, "row", "d-flex", "mx-2"], [1, "col-6", "col-md-3", "text-left"], [1, "col-2", "col-md-3", "text-right"]], template: function WalletHistoricalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, WalletHistoricalComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.historicalData));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["PercentPipe"]], styles: ["p[_ngcontent-%COMP%] {\n  background: #F1FAEE;\n  padding: 1%;\n  margin-bottom: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx3YWxsZXQtaGlzdG9yaWNhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CIiwiZmlsZSI6IndhbGxldC1oaXN0b3JpY2FsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgYmFja2dyb3VuZDogI0YxRkFFRTtcclxuICBwYWRkaW5nOiAxJTtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "gbrI":
/*!*********************************************************************!*\
  !*** ./src/app/components/logout-button/logout-button.component.ts ***!
  \*********************************************************************/
/*! exports provided: LogoutButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutButtonComponent", function() { return LogoutButtonComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-angular */ "2beD");




function LogoutButtonComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LogoutButtonComponent_ng_container_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.auth.logout({ returnTo: ctx_r3.document.location.origin }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Log out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function LogoutButtonComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LogoutButtonComponent_ng_template_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.auth.loginWithRedirect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LogoutButtonComponent {
    constructor(document, auth) {
        this.document = document;
        this.auth = auth;
    }
    ngOnInit() {
    }
}
LogoutButtonComponent.ɵfac = function LogoutButtonComponent_Factory(t) { return new (t || LogoutButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
LogoutButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LogoutButtonComponent, selectors: [["app-logout-button"]], decls: 4, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["loggedOut", ""], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-primary", 3, "click"]], template: function LogoutButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LogoutButtonComponent_ng_container_0_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LogoutButtonComponent_ng_template_2_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.auth.isAuthenticated$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["AsyncPipe"]], encapsulation: 2 });


/***/ }),

/***/ "kwXV":
/*!***************************************************************************!*\
  !*** ./src/app/components/purchase-snippet/purchase-snippet.component.ts ***!
  \***************************************************************************/
/*! exports provided: PurchaseSnippetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseSnippetComponent", function() { return PurchaseSnippetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "2beD");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




class PurchaseSnippetComponent {
    constructor(auth, apiService) {
        this.auth = auth;
        this.apiService = apiService;
        this.coin = "";
        this.price = 0;
    }
    ;
    ngOnInit() { }
    /**
     * Guardamos la seleccin en la base de datos
     * obtenemos primero los datos del usuario
     * obtemos el resto de datos que vienen del padre.
     * mandamos el payload al apiservice
     *
     */
    save(event) {
        event.preventDefault();
        this.auth.user$.subscribe((data) => {
            console.log(data);
            let payload = {
                coin: this.coin,
                purchase_price: this.price,
                quantity: 1,
                picture: data.picture,
                name: data.nickname,
                nickname: data.nickname,
                email: data.email,
                idSub: data.sub.slice(6),
                updated_at: data.updated_at,
                sold: false
            };
            this.apiService.addWallet(payload).subscribe();
        });
    }
    ;
}
PurchaseSnippetComponent.ɵfac = function PurchaseSnippetComponent_Factory(t) { return new (t || PurchaseSnippetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
PurchaseSnippetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseSnippetComponent, selectors: [["app-purchase-snippet"]], inputs: { coin: "coin", price: "price" }, decls: 9, vars: 6, consts: [[1, "row", "d-flex", "justify-content-center"], [1, "col-4", "col-md-2", "text-left"], [1, "col-2", "col-md-2", "text-right"], [1, "col-4", "col-md-2", "btn", "btn-primary", 3, "click"]], template: function PurchaseSnippetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "P", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseSnippetComponent_Template_button_click_7_listener($event) { return ctx.save($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Send to my wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.coin));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.price));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: ["p[_ngcontent-%COMP%] {\n  width: 20%;\n  text-align: justify;\n  margin: 1%;\n  background: #F1FAEE;\n  border-radius: 2%;\n  padding: 0.5%;\n  padding-left: 2%;\n  padding-right: 2%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwdXJjaGFzZS1zbmlwcGV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNSLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1RUciLCJmaWxlIjoicHVyY2hhc2Utc25pcHBldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICAgIGJhY2tncm91bmQ6ICNGMUZBRUU7O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgICBwYWRkaW5nOiAwLjUlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbjogMSU7XHJcblxyXG59XHJcbi8qIFxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJhcnJpb3xNb250c2VycmF0OjcwMCcpO1xyXG4kZ3JlZW46ICM0NTdCOUQ7XHJcblxyXG5cclxuXHJcbmJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwJTtcclxuICBtYXJnaW46IDElO1xyXG4gIHBhZGRpbmc6IDElO1xyXG4gIGNvbG9yOiAjZmFmYWZhO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgYm94LXNoYWRvdzogMiUgcmdiYSg1MCw1MCw1MCwuNCk7XHJcbiAgdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcclxuICBmb250LXNpemU6IC44NXJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XHJcbiAgXHJcbiAgJjphZnRlcixcclxuICAmOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LWZhbWlseTogJ0JhcnJpbycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICdfJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEuNHJlbTtcclxuICAgIHRvcDogLjlyZW07XHJcbiAgfVxyXG4gIFxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJz4nO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLjhyZW07XHJcbiAgICB0b3A6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAyMHB4IHJnYmEoMTUwLDE1MCwxNTAsLjIpO1xyXG4gICAgdG9wOiAtLjFyZW07XHJcbiAgICByaWdodDogLS4xcmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgXHJcbiAgICBcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJ18nO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IC44cmVtO1xyXG4gICAgICB0b3A6IC43cmVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogJz4nO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDEuMXJlbTtcclxuICAgICAgdG9wOiAxcmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5idXR0b246YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQzLCAyMCk7XHJcbn0gKi8iXX0= */"] });
;


/***/ }),

/***/ "nJq9":
/*!*******************************************************!*\
  !*** ./src/app/components/social/social.component.ts ***!
  \*******************************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "2beD");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class SocialComponent {
    constructor(auth, apiService, router) {
        this.auth = auth;
        this.apiService = apiService;
        this.router = router;
        this.userToFollow = [];
        this.follower = false;
        this.router.params.subscribe(params => {
            console.log("parametrosSocials", params["id"]);
        });
        this.isFollower();
    }
    ngOnInit() { }
    /**
    * @param data vemos si el usuario está subscrito
     * @param data.sub.slice(6) extraemos su id y pedimos que nos enseñe sus folowers
     * @param values iteramos en el array de follows ,map()
     * @param dataFollowers obtemos los seguidores y lo filtramos para ver si ya existe
     * @param res.length Longitud del array, si es >0 significa que ya existe
     */
    isFollower() {
        this.auth.user$.subscribe((data) => {
            console.log(data);
            this.apiService.getFollowsByUser(data.sub.slice(6))
                .subscribe((dataFollows) => {
                dataFollows.follows.map((values) => {
                    let res = values.follows.filter((dataFollowers) => dataFollowers.id_follow === this.userToFollow._id.idSub);
                    if (res.length > 0) {
                        this.follower = true;
                        return console.log("ya es follower");
                    }
                });
            });
        });
    }
    /**
     * @param this.follower si es true, ya existe
     * si existe ("ya es follower"), y si no enviamos payload
     * @param payload información que vamos a subir a la base de datos
     *
     */
    save(event) {
        event.preventDefault();
        this.auth.user$.subscribe((data) => {
            console.log(data);
            if (this.follower === true) {
                return console.log("ya es follower");
            }
            else {
                let payload = {
                    id_follow: this.userToFollow._id.idSub,
                    name_follow: this.userToFollow._id.name,
                    name: data.nickname,
                    nickname: data.nickname,
                    email: data.email,
                    idSub: data.sub.slice(6),
                    sold: false
                };
                this.apiService.addFollow(payload).subscribe();
                this.follower = true;
            }
        });
    }
    ;
}
SocialComponent.ɵfac = function SocialComponent_Factory(t) { return new (t || SocialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
SocialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialComponent, selectors: [["app-social"]], inputs: { userToFollow: "userToFollow" }, decls: 2, vars: 2, consts: [[1, "like-button", 3, "click"]], template: function SocialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialComponent_Template_div_click_0_listener($event) { return ctx.save($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.follower ? "red" : "grey");
    } }, styles: ["@charset \"UTF-8\";\n.like-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 10%;\n}\n.like-button[_ngcontent-%COMP%]::before {\n  font-size: 2em;\n  content: '\u2665';\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzb2NpYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsZUFBZTtFQUVmLFVBQVU7QUFBWjtBQUhBO0VBS0ksY0FBYztFQUNkLFlBQVM7QUFFYiIsImZpbGUiOiJzb2NpYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ubGlrZS1idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMCU7XG59XG5cbi5saWtlLWJ1dHRvbjo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGNvbnRlbnQ6ICfimaUnO1xufVxuIl19 */"] });


/***/ }),

/***/ "r4Iu":
/*!******************************************************************!*\
  !*** ./src/app/views/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 1, vars: 0, consts: [["width", "100%", "src", "https://www.initcoms.com/wp-content/uploads/2020/07/404-error-not-found-1.png"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "sgBM":
/*!*************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.ts ***!
  \*************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/search.component */ "RZmA");


class UserListComponent {
    constructor() {
        this.limit = "30";
    }
    ngOnInit() {
    }
}
UserListComponent.ɵfac = function UserListComponent_Factory(t) { return new (t || UserListComponent)(); };
UserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserListComponent, selectors: [["app-user-list"]], decls: 4, vars: 0, consts: [[1, "container-fluid"], [1, "row", "align-items-start"], [1, "col"], [1, "m-2"]], template: function UserListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-search", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "2beD");
/* harmony import */ var _components_purchase_purchase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/purchase/purchase.component */ "wRQo");
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user-list/user-list.component */ "sgBM");
/* harmony import */ var _components_user_wallet_details_user_wallet_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-wallet-details/user-wallet-details.component */ "yHn5");
/* harmony import */ var _components_user_private_wallet_user_private_wallet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-private-wallet/user-private-wallet.component */ "B0da");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/home/home.component */ "QlPV");
/* harmony import */ var _views_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/page-not-found/page-not-found.component */ "r4Iu");
/* harmony import */ var _services_trades_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/trades.resolver */ "JQqO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', pathMatch: 'full', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] /* ,resolve: { coins: HomeResolver} */ },
    { path: 'userList', pathMatch: 'full', component: _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__["UserListComponent"] },
    { path: 'userList/:id', pathMatch: 'full', component: _components_user_wallet_details_user_wallet_details_component__WEBPACK_IMPORTED_MODULE_4__["UserWalletDetailsComponent"] },
    { path: 'purchase', pathMatch: 'full', component: _components_purchase_purchase_component__WEBPACK_IMPORTED_MODULE_2__["PurchaseComponent"], canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]], resolve: { trades: _services_trades_resolver__WEBPACK_IMPORTED_MODULE_8__["TradesResolver"] } },
    { path: 'userwallet', pathMatch: 'full', component: _components_user_private_wallet_user_private_wallet_component__WEBPACK_IMPORTED_MODULE_5__["UserPrivateWalletComponent"], canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: '404', component: _views_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] },
    { path: '**', redirectTo: '/404', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wMm4":
/*!****************************************************!*\
  !*** ./src/app/views/nav-bar/nav-bar.component.ts ***!
  \****************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "2beD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/logout-button/logout-button.component */ "gbrI");





function NavBarComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Protected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/userList"]; };
const _c1 = function () { return ["/purchase"]; };
const _c2 = function () { return ["/userwallet"]; };
class NavBarComponent {
    constructor(auth) {
        this.auth = auth;
        this.login = false;
        auth.isAuthenticated$.subscribe(data => this.login = data); //hide or show when we are login
        console.log("login", this.login);
    }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 21, vars: 7, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark"], ["href", "#", 1, "navbar-brand"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["routerLinkActive", "active", 1, "nav-item"], ["aria-current", "page", "routerLink", "home", 1, "nav-link"], [1, "nav-link", 3, "routerLink"], ["class", "nav-item", "routerLinkActive", "active", 4, "ngIf"], [1, "my-2", "my-sm-0"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["routerLink", "protected", 1, "nav-link"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "BrokerPick");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavBarComponent_li_11_Template, 3, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "My Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-logout-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_4__["LogoutButtonComponent"]], styles: [".navbar[_ngcontent-%COMP%] {\n  background-color: #1D3557;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6Im5hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFEMzU1NztcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "wRQo":
/*!***********************************************************!*\
  !*** ./src/app/components/purchase/purchase.component.ts ***!
  \***********************************************************/
/*! exports provided: PurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseComponent", function() { return PurchaseComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/auth0-angular */ "2beD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _purchase_snippet_purchase_snippet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../purchase-snippet/purchase-snippet.component */ "kwXV");








function PurchaseComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-purchase-snippet", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const coin_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("coin", coin_r1.id)("price", coin_r1.current_price);
} }
/* interface Coins {
  id: string;
  current_price: number;
} */
class PurchaseComponent {
    constructor(apiServce, fb, auth) {
        this.apiServce = apiServce;
        this.fb = fb;
        this.auth = auth;
        this.coins = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
    }
    ngOnInit() {
        this.coins = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(1, 60000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(() => this.apiServce.getAllCoins()));
        /* interval works, but it would start our polling after 60000 milliseconds. We want to begin polling right away.
        timer is another function that allows us to start the interval whenever we want, including right now */
        /* switchMap, which turns an input Observable into another Observable.
        In our case, we will be turning every number emitted by timer into an HTTP request to our backend */
    }
}
PurchaseComponent.ɵfac = function PurchaseComponent_Factory(t) { return new (t || PurchaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
PurchaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PurchaseComponent, selectors: [["app-purchase"]], decls: 6, vars: 3, consts: [[1, "my-4"], [1, "justify-content-center", "my-4"], [4, "ngFor", "ngForOf"], [3, "coin", "price"]], template: function PurchaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Top coins");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PurchaseComponent_div_4_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 1, ctx.coins));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _purchase_snippet_purchase_snippet_component__WEBPACK_IMPORTED_MODULE_7__["PurchaseSnippetComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdXJjaGFzZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "yHn5":
/*!*********************************************************************************!*\
  !*** ./src/app/components/user-wallet-details/user-wallet-details.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UserWalletDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserWalletDetailsComponent", function() { return UserWalletDetailsComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_card_snippet_user_card_snippet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-card-snippet/user-card-snippet.component */ "+0Pt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../social/social.component */ "nJq9");








function UserWalletDetailsComponent_div_2_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const coin_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](coin_r4.coinName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 6, coin_r4.purchase_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 8, coin_r4.market_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", coin_r4.market_price > coin_r4.purchase_price ? "green" : "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 10, (coin_r4.market_price - coin_r4.purchase_price) / coin_r4.purchase_price, ".2"), "%");
} }
function UserWalletDetailsComponent_div_2_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 6, data_r7.coin));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 8, data_r7.purchase_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 10, data_r7.sold_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", data_r7.margin > 0 ? "green" : "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](12, 12, data_r7.margin, ".2"));
} }
function UserWalletDetailsComponent_div_2_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UserWalletDetailsComponent_div_2_div_34_div_1_Template, 13, 15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const newData_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", newData_r5);
} }
function UserWalletDetailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-social", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Operaciones abiertas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Purchase Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Market Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, UserWalletDetailsComponent_div_2_div_22_Template, 12, 13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Hist\u00F3rico");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Purchase Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Market Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, UserWalletDetailsComponent_div_2_div_34_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const marginData_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", marginData_r1._id.picture, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](marginData_r1._id.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", marginData_r1.margin > 0 ? "green" : "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Margin: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 8, marginData_r1.margin, ".2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("userToFollow", marginData_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.myWallet);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](35, 11, ctx_r0.historicalData));
} }
class UserWalletDetailsComponent {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.myWallet = [];
        this.historicalData = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        this.margin = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        this.router.params.subscribe(params => {
            console.log("parametros", params["id"]);
            this.myWallet = []; //vaciamos la cartera para mostrar los nuevos
            this.getWalletDetailUser(params["id"]);
            this.getWalletHistoricalUser(params["id"]);
            this.getWalletMaarginlUser(params["id"]);
        });
    }
    ngOnInit() {
    }
    getWalletDetailUser(idSubscription) {
        this.apiService.getWalletByUser(idSubscription)
            .subscribe((data) => {
            data.wallets.map((values) => {
                let data = values.coins.filter((dataWallet) => !dataWallet.sold);
                data.forEach((dataUser) => {
                    let coinName = dataUser.coin;
                    let purchase_price = dataUser.purchase_price;
                    let id = dataUser._id;
                    this.apiService.getPriceCoin(coinName).subscribe((p) => {
                        let pricing = p[coinName].usd;
                        this.myWallet.push({ market_price: pricing, coinName, purchase_price, id, });
                        console.log("myWalletobsdetails", this.myWallet);
                    });
                });
            });
        });
    }
    ;
    getWalletHistoricalUser(idSubscription) {
        this.historicalData = this.apiService.getWalletByUser(idSubscription)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            console.log("dataHistory", data.wallets[0]);
            return data.wallets[0].coins.filter((dataWallet) => dataWallet.sold);
        }));
    }
    ;
    getWalletMaarginlUser(idSubscription) {
        this.margin = this.apiService.getMarginByUser(idSubscription).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            console.log("margin margin,", data);
            return data.userMargin[0];
        }));
    }
    ;
}
UserWalletDetailsComponent.ɵfac = function UserWalletDetailsComponent_Factory(t) { return new (t || UserWalletDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
UserWalletDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserWalletDetailsComponent, selectors: [["app-user-wallet-details"]], decls: 4, vars: 3, consts: [[1, "ocultar-div"], ["class", "container-fluid m-4 p-4", 4, "ngIf"], [1, "container-fluid", "m-4", "p-4"], [1, "perfil"], ["alt", "", 1, "img-thumbnail", "rounded-circle", 3, "src"], [3, "userToFollow"], [1, "row", "justify-content-center"], [1, "col-12"], [1, "p-4"], [1, "row", "d-flex", "mx-2", "font-weight-bold"], [1, "col-6", "col-md-3", "text-left"], [1, "col-2", "col-md-3", "text-right"], ["class", "row d-flex mx-2", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "row", "d-flex", "mx-2"]], template: function UserWalletDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-user-card-snippet", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, UserWalletDetailsComponent_div_2_Template, 36, 13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx.margin));
    } }, directives: [_user_card_snippet_user_card_snippet_component__WEBPACK_IMPORTED_MODULE_5__["UserCardSnippetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _social_social_component__WEBPACK_IMPORTED_MODULE_7__["SocialComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["UpperCasePipe"]], styles: ["p[_ngcontent-%COMP%] {\n  background: #F1FAEE;\n  padding: 1%;\n  margin-bottom: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLXdhbGxldC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkIiLCJmaWxlIjoidXNlci13YWxsZXQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gIGJhY2tncm91bmQ6ICNGMUZBRUU7XHJcbiAgcGFkZGluZzogMSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "yi7A":
/*!****************************************************!*\
  !*** ./src/app/components/pipes/no-images.pipe.ts ***!
  \****************************************************/
/*! exports provided: NoImagesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoImagesPipe", function() { return NoImagesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NoImagesPipe {
    transform(imagenes) {
        //si no hay imagenes le enseñamos la ruta de la imagen
        return imagenes === undefined ? '../../assets/noimage.png' : imagenes;
    }
}
NoImagesPipe.ɵfac = function NoImagesPipe_Factory(t) { return new (t || NoImagesPipe)(); };
NoImagesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "noImages", type: NoImagesPipe, pure: true });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map