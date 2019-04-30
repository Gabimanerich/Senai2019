webpackJsonp([3],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_cadastrar__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CadastroPage = /** @class */ (function () {
    function CadastroPage(navCtrl, navParams, cadastrar, http, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cadastrar = cadastrar;
        this.http = http;
        this.toast = toast;
        this.idTamanho = 0;
        // Ao abrir a tela de cadastro de sabores chama esta função "buscarTamanho();"
        this.buscarTamanho();
    }
    CadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
    };
    CadastroPage.prototype.cadastro = function () {
        this.cadastrar.cadastrando(this.sabor, this.preco, this.idTamanho).subscribe(function (data) {
        }, function (error) {
            console.log("não foi possivel cadastrar");
        });
    };
    CadastroPage.prototype.buscarTamanho = function () {
        var _this = this;
        this.cadastrar.getTamanho().subscribe(function (data) {
            _this.listaTamanhos = data;
        }, function (error) {
            console.log("não foi possivel cadastrar");
        });
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"C:\Users\Aluno\Desktop\senai2019\ionic-si032019\src\pages\cadastro\cadastro.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Tela de Cadastro</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item>\n          <ion-label>Escolha o tamanho:</ion-label>\n          <ion-select [(ngModel)]="idTamanho">\n            <ion-option value={{tamanho.tamanho}} *ngFor="let tamanho of listaTamanhos">{{tamanho.tamanho}}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n    <ion-item>\n      <ion-label floating>Sabor:</ion-label>\n      <ion-input [(ngModel)]="sabor" type="text">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Valor:</ion-label>\n      <ion-input [(ngModel)]="preco" type="text">\n      </ion-input>\n    </ion-item>\n\n  <div padding>\n      <button ion-button color="primary" block (click)="cadastro()">Salvar</button>\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Aluno\Desktop\senai2019\ionic-si032019\src\pages\cadastro\cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__providers_cadastrar__["a" /* cadastrar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_cadastrar__["a" /* cadastrar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_http__["a" /* HttpProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_http__["a" /* HttpProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_toast__["a" /* Toasts */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_toast__["a" /* Toasts */]) === "function" && _e || Object])
    ], CadastroPage);
    return CadastroPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageprincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_toast__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageprincipalPage = /** @class */ (function () {
    function PageprincipalPage(navCtrl, navParams, http, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toast = toast;
        this.tamanhos = [];
        this.sabores = [];
        this.idTamanhos = [];
    }
    PageprincipalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PageprincipalPage');
        this.http.url = 'http://localhost:3000/tamanhos';
        this.http.get().subscribe(function (data) {
            _this.tamanhos = data;
        }, function (error) {
            _this.toast.showToast("Não foi possivel carregar...");
        });
    };
    PageprincipalPage.prototype.escolherSabores = function () {
        var _this = this;
        this.http.url = 'http://localhost:3000/sabores/' + this.idTamanhos;
        this.http.get().subscribe(function (data) {
            console.log(data);
            _this.sabores = data;
        });
    };
    PageprincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-pageprincipal',template:/*ion-inline-start:"C:\Users\Aluno\Desktop\senai2019\ionic-si032019\src\pages\pageprincipal\pageprincipal.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Faça seu Pedido:</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item>\n          <ion-label>Tamanhos</ion-label>\n          <ion-select [(ngModel)]="idTamanhos" (ionChange)="escolherSabores()">\n            <ion-option value={{tamanho.idtamanhos}} *ngFor="let tamanho of tamanhos">{{tamanho.tamanho}}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item *ngFor="let escolherSabores of sabores">{{escolherSabores.sabores}}                   - R${{escolherSabores.preco}}</ion-item>\n      </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Aluno\Desktop\senai2019\ionic-si032019\src\pages\pageprincipal\pageprincipal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_toast__["a" /* Toasts */]])
    ], PageprincipalPage);
    return PageprincipalPage;
}());

//# sourceMappingURL=pageprincipal.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cadastrar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_http__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var cadastrar = /** @class */ (function () {
    function cadastrar(http) {
        this.http = http;
    }
    cadastrar.prototype.cadastrando = function (pSabor, pValor, pTamanho) {
        var json = {
            sabor: pSabor,
            preco: pValor,
            tamanho: pTamanho
        };
        this.http.url = 'http://localhost:3000/cadastro';
        return this.http.post(json);
    };
    cadastrar.prototype.getTamanho = function () {
        this.http.url = 'http://localhost:3000/tamanhoConsulta';
        return this.http.get();
    };
    cadastrar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_http__["a" /* HttpProvider */]])
    ], cadastrar);
    return cadastrar;
}());

//# sourceMappingURL=cadastrar.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_http__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Logon = /** @class */ (function () {
    function Logon(http) {
        this.http = http;
    }
    Logon.prototype.login = function (username, password) {
        var json = {
            userName: username,
            password: password
        };
        this.http.url = 'http://localhost:3000/logon';
        return this.http.post(json);
    };
    Logon = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_http__["a" /* HttpProvider */]])
    ], Logon);
    return Logon;
}());

//# sourceMappingURL=logon.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro/cadastro.module": [
		290,
		2
	],
	"../pages/cidades/cidades.module": [
		291,
		1
	],
	"../pages/pageprincipal/pageprincipal.module": [
		292,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CidadesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_toast__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CidadesPage = /** @class */ (function () {
    function CidadesPage(navCtrl, navParams, http, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toast = toast;
        this.cidades = [];
        this.bairros = [];
    }
    CidadesPage.prototype.mostrarCidade = function () {
        var _this = this;
        console.log('ionViewDidLoad CidadesPage');
        this.http.url = 'http://localhost:3000/cidades';
        this.http.get().subscribe(function (data) {
            _this.cidades = data;
        }, function (error) {
            _this.toast.showToast("Não foi possivel carregar...");
        });
    };
    CidadesPage.prototype.escolherBairro = function () {
        var _this = this;
        this.http.url = 'http://localhost:3000/bairros/' + this.idcidades;
        this.http.get().subscribe(function (data) {
            console.log(data);
            _this.bairros = data;
        });
    };
    CidadesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-cidades',template:/*ion-inline-start:"C:\Users\Aluno\Desktop\senai2019\ionic-si032019\src\pages\cidades\cidades.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Cidades</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item>\n          <ion-label>Cidades</ion-label>\n          <ion-select [(ngModel)]="idcidades" (ionChange)="escolherBairro()">\n            <ion-option value={{cidades.idcidades}} *ngFor="let cidade of cidades">{{cidades.cidade}}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item *ngFor="let escolherBairro of bairros">{{escolherBairro.bairros}}</ion-item>\n      </ion-list>\n    </ion-content>\n'/*ion-inline-end:"C:\Users\Aluno\Desktop\senai2019\ionic-si032019\src\pages\cidades\cidades.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_toast__["a" /* Toasts */]])
    ], CidadesPage);
    return CidadesPage;
}());

//# sourceMappingURL=cidades.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_cadastrar__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_cadastro_cadastro__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_toast__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pageprincipal_pageprincipal__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_logon__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { ListPage } from '../pages/list/list';
//import {Messages} from '../providers/messages';







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                //ListPage,
                __WEBPACK_IMPORTED_MODULE_10__pages_pageprincipal_pageprincipal__["a" /* PageprincipalPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_cadastro_cadastro__["a" /* CadastroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cidades/cidades.module#CidadesPageModule', name: 'CidadesPage', segment: 'cidades', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pageprincipal/pageprincipal.module#PageprincipalPageModule', name: 'PageprincipalPage', segment: 'pageprincipal', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                //ListPage,
                __WEBPACK_IMPORTED_MODULE_10__pages_pageprincipal_pageprincipal__["a" /* PageprincipalPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_cadastro_cadastro__["a" /* CadastroPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                // Messages,
                __WEBPACK_IMPORTED_MODULE_11__providers_http__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_toast__["a" /* Toasts */],
                __WEBPACK_IMPORTED_MODULE_13__providers_logon__["a" /* Logon */],
                __WEBPACK_IMPORTED_MODULE_0__providers_cadastrar__["a" /* cadastrar */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Aluno\Desktop\senai2019\ionic-si032019\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}} xD\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Aluno\Desktop\senai2019\ionic-si032019\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpProvider = /** @class */ (function () {
    function HttpProvider(http) {
        this.http = http;
        this.TIMEOUT = 15000;
        this.url = null;
        this.token = null;
    }
    HttpProvider.prototype.prepareHeaders = function (contentType) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        if (contentType) {
            headers.append('Content-Type', 'application/json');
        }
        if (this.token == '') {
            this.token = null;
        }
        if (this.token != null) {
            headers.append('Authorization', 'bearer ' + this.token);
        }
        return headers;
    };
    HttpProvider.prototype.get = function () {
        var headers = this.prepareHeaders(false);
        return this.http.get(this.url, { headers: headers }).timeout(this.TIMEOUT).map(function (res) { return res.json(); });
    };
    HttpProvider.prototype.post = function (object) {
        var body = '';
        var headers = this.prepareHeaders(true);
        if (object != null && object != undefined) {
            body = JSON.stringify(object);
        }
        return this.http.post(this.url, body, { headers: headers }).timeout(this.TIMEOUT).map(function (res) { return res.json(); });
    };
    HttpProvider.prototype.put = function (object) {
        var body = '';
        var headers = this.prepareHeaders(true);
        if (object != null && object != undefined) {
            body = JSON.stringify(object);
        }
        return this.http.put(this.url, body, { headers: headers }).timeout(this.TIMEOUT);
        ;
    };
    HttpProvider.prototype.patch = function (object) {
        var body = '';
        var headers = this.prepareHeaders(true);
        if (object != null && object != undefined) {
            body = JSON.stringify(object);
        }
        return this.http.patch(this.url, body, { headers: headers }).timeout(this.TIMEOUT);
        ;
    };
    HttpProvider.prototype.delete = function (object) {
    };
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=http.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toasts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Toasts = /** @class */ (function () {
    function Toasts(toastCtrl) {
        this.toastCtrl = toastCtrl;
        this.toasting = null;
    }
    Toasts.prototype.showToast = function (param1, param2) {
        if (param2 === void 0) { param2 = 5000; }
        var toast = this.toastCtrl.create({
            message: param1,
            duration: param2
        }).present();
    };
    Toasts = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], Toasts);
    return Toasts;
}());

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cadastro_cadastro__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_logon__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pageprincipal_pageprincipal__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cidades_cidades__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import {Messages} from '../../providers/messages';


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toast, logon) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.logon = logon;
    }
    HomePage.prototype.showToast = function () {
        this.toast.showToast;
    };
    HomePage.prototype.showToastlogin = function () {
        this.toast.showToast("Usuario ou senha Invalido", 5000);
    };
    HomePage.prototype.login = function () {
        var _this = this;
        this.logon.login(this.username, this.password).subscribe(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pageprincipal_pageprincipal__["a" /* PageprincipalPage */]);
        }, function (error) {
            _this.showToastlogin();
        });
    };
    HomePage.prototype.accessPageCreate = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cadastro_cadastro__["a" /* CadastroPage */]);
        (function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cidades_cidades__["a" /* CidadesPage */]);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Aluno\Desktop\senai2019\ionic-si032019\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Tela de Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input [(ngModel)]="username" type="text">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input [(ngModel)]="password"  type="password">\n      </ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" block (click)="login()">Sign In</button>\n  </div>\n\n  <div padding>\n    <button ion-button color="primary" block (click)="accessPageCreate()">Cadastro</button>\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Aluno\Desktop\senai2019\ionic-si032019\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_toast__["a" /* Toasts */], __WEBPACK_IMPORTED_MODULE_1__providers_logon__["a" /* Logon */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map