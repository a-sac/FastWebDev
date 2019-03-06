webpackJsonp([0],{

/***/ 177:
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
webpackEmptyAsyncContext.id = 177;

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_home_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(loadingCtrl, plt, navCtrl, sanitizer, navParams, homeService, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.plt = plt;
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.navParams = navParams;
        this.homeService = homeService;
        this.alertCtrl = alertCtrl;
        this.storage = navParams.get('storage');
        this.loading = this.loadingCtrl.create({
            content: 'Por favor espere...'
        });
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.navParams.get('storage').get('key').then(function (val) {
            _this.key = val;
            _this.navParams.get('storage').get('token').then(function (val2) {
                _this.token = val2;
                _this.getPosts();
            });
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('first').then(function (bool) {
            if (bool) {
                console.log("First time");
                console.log(bool);
                _this.faio();
            }
            else {
                console.log("NOT First time");
            }
        });
    };
    HomePage.prototype.faio = function () {
        var _this = this;
        this.storage.set('first', false);
        var alert = this.alertCtrl.create({
            title: 'Touch ID',
            message: 'Deseja ativar o Touch ID?',
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel',
                    handler: function () {
                        console.log('Não clicked');
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        console.log('Sim clicked');
                        _this.storage.set('faio', true);
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.getPosts = function () {
        var _this = this;
        this.loading.present();
        this.homeService.getID(this.key, this.token).subscribe(function (response) {
            _this.id = response.data.user.id;
            _this.homeService.getData(_this.key, _this.token, _this.id).subscribe(function (response) {
                _this.item = response.data.information;
                _this.storage.set('user', _this.item);
                _this.loading.dismiss();
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/sergiocosta/Desktop/asac/Experiments/CPF/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="favorite">\n    <ion-title text-center>Cartão de Funcionário Público</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="card" *ngIf="item">\n          <ion-thumbnail *ngIf="item.photo">\n              <img class="imagem" [src]="item.photo">\n          </ion-thumbnail>\n          <div class="container">\n            <p>\n              <b>Nome: </b> {{item.nome}}\n            </p>\n            <p>\n              <b>Número Mecanográfico: </b> {{item.numero}}\n            </p>\n            <p>\n              <b>Idade: </b> {{item.idade}}\n            </p>\n            <p>\n              <b>Género: </b> {{item.genero}}\n            </p>\n            <p>\n              <ion-thumbnail *ngIf="item.logo">\n                <img class="imagem" [src]="item.logo">\n              </ion-thumbnail>\n            </p>\n            <p>\n              <b>Instituição: </b> {{item.instituicao}}\n            </p>\n            <p>\n              <b>Sub-unidade: </b> {{item.subuni}}\n            </p>\n            <p>\n              <b>Função:</b> {{item.funcao}}\n            </p>\n          </div>\n    </div>   \n</ion-content>\n\n'/*ion-inline-end:"/Users/sergiocosta/Desktop/asac/Experiments/CPF/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 222:
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
webpackEmptyAsyncContext.id = 222;

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic2_pincode_input__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_crypto_js__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, pincodeCtrl, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pincodeCtrl = pincodeCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.storage = navParams.get('storage');
    }
    SettingsPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.storage.get('password_encrypt').then(function (pwd) {
            _this.pincode = String(pwd);
        });
        this.storage.get('faio').then(function (result) {
            if (result !== undefined) {
                _this.faio = result;
            }
        });
    };
    SettingsPage.prototype.toggleFaio = function () {
        this.storage.set('faio', this.faio);
        this.presentAlert("Touch ID", "Nova configuração de Touch ID efetuada. Reinicie a aplicação para concluir.");
    };
    SettingsPage.prototype.resetPassword = function () {
        this.openPinCode(false);
    };
    SettingsPage.prototype.cleanReset = function () {
        this.storage.remove('password_encrypt');
        this.storage.set('faio', false);
        this.storage.remove('token');
        this.storage.remove('key');
        this.storage.remove('users');
        this.presentAlert("Feito", "Todos os seus dados foram removidos. Reinicie a aplicação para terminar.");
    };
    SettingsPage.prototype.cleanHistory = function () {
        var _this = this;
        this.storage.remove('history').then(function (val) {
            _this.storage.set('history', []);
            _this.presentAlert("Feito", "O seu histórico foi removido.");
        });
    };
    SettingsPage.prototype.cleanToken = function () {
        this.storage.remove('token');
        this.storage.remove('key');
        this.presentAlert("Feito", "Chave única apagada. Reinicie a aplicação para terminar.");
    };
    SettingsPage.prototype.openPinCode = function (register) {
        var _this = this;
        var title = "Insira o seu PIN";
        if (register)
            title = "Insira o seu novo PIN";
        var pinCode = this.pincodeCtrl.create({
            title: title,
            passSize: 6,
            hideForgotPassword: true,
            hideCancelButton: false,
            enableBackdropDismiss: true
        });
        pinCode.present();
        pinCode.onDidDismiss(function (code, status) {
            // If user enter a password and the fase if confirm
            // do a login
            if (status === 'done' && !register) {
                _this.login(code);
            }
            else if (status === 'done' && register) {
                _this.newPincode = code;
                // Confirm if pincodes match
                _this.confirmCode();
            }
        });
    };
    SettingsPage.prototype.login = function (pincode) {
        var _this = this;
        var entered_pincode = String(__WEBPACK_IMPORTED_MODULE_3_crypto_js___default.a.SHA256(pincode));
        this.storage.get('password_encrypt').then(function (pwd) {
            var stored_pincode = String(pwd);
            console.log("Stored password: " + stored_pincode);
            if (entered_pincode == stored_pincode) {
                _this.presentAlert("Novo PIN", "Configure o seu novo PIN");
                _this.openPinCode(true);
            }
            else {
                _this.presentAlert("Erro", "PIN errado");
            }
        })
            .catch(function (error) { return console.log(error); });
    };
    SettingsPage.prototype.confirmCode = function () {
        var _this = this;
        var pinCode = this.pincodeCtrl.create({
            title: 'Confirme o seu novo PIN',
            passSize: 6,
            hideForgotPassword: true,
            hideCancelButton: false,
            enableBackdropDismiss: true
        });
        pinCode.present();
        pinCode.onDidDismiss(function (code, status) {
            if (status === 'done') {
                if (_this.newPincode == code) {
                    // if match send a message and do a registration of pin code
                    _this.presentAlert("PIN", "Novo PIN configurado!");
                    _this.register();
                }
                else {
                    _this.presentAlert("Erro!", "Os PINs inseridos não são iguais. Tente novamente.");
                    _this.openPinCode(true);
                }
            }
        });
    };
    SettingsPage.prototype.resetToken = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Apagar chave",
            subTitle: "Tem a certeza que quer apagar a chave? Esta ação não pode ser desfeita.",
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel'
                },
                {
                    text: 'Apagar',
                    handler: function () {
                        _this.cleanToken();
                    }
                }
            ]
        });
        alert.present();
    };
    SettingsPage.prototype.resetAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Apagar dados",
            subTitle: "Tem a certeza que quer apagar os dados? Esta ação não pode ser desfeita.",
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel'
                },
                {
                    text: 'Apagar',
                    handler: function () {
                        _this.cleanReset();
                    }
                }
            ]
        });
        alert.present();
    };
    SettingsPage.prototype.presentAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ["OK"]
        });
        alert.present();
    };
    SettingsPage.prototype.register = function () {
        var _this = this;
        var hash = String(__WEBPACK_IMPORTED_MODULE_3_crypto_js___default.a.SHA256(this.newPincode));
        this.storage.remove('password_encrypt').then(function (done) {
            console.log("Nova password");
            _this.storage.set('password_encrypt', hash);
            console.log(hash);
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'settings',template:/*ion-inline-start:"/Users/sergiocosta/Desktop/asac/Experiments/CPF/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar color="favorite">\n    <ion-title text-center>\n      Definições\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>\n      Segurança e Privacidade\n    </ion-list-header>\n    <button ion-item (click)="resetPassword()">\n      <ion-icon name="lock" item-start></ion-icon>\n      Alterar o PIN\n    </button>\n    <ion-item>\n        <ion-label>Touch ID</ion-label>\n        <ion-icon name="finger-print" item-start></ion-icon>\n        <ion-toggle [(ngModel)]="faio" (ionChange)="toggleFaio()"></ion-toggle>\n    </ion-item>\n    <ion-list-header>\n      Dados pessoais\n    </ion-list-header>\n    <button ion-item block outline color="danger" (click)="cleanHistory()">\n      Apagar histórico\n  </button>\n    <button ion-item block outline color="danger" (click)="resetToken()">\n        Apagar chave única\n    </button>\n    <button ion-item block outline color="danger" (click)="resetAlert()">\n        Apagar todos os dados\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/sergiocosta/Desktop/asac/Experiments/CPF/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic2_pincode_input__["a" /* PincodeController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_home_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__qr_qr__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__QrResultPage_QrResultPage__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var QrCodePage = /** @class */ (function () {
    function QrCodePage(camera, platform, alertCtrl, navCtrl, homeService, navParams, barcodeScanner) {
        this.camera = camera;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.homeService = homeService;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
    }
    QrCodePage.prototype.toggleAllInfo = function () {
        var _this = this;
        this.navParams.get('storage').get('history').then(function (val) {
            var array = val;
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            var todays = dd + '/' + mm + '/' + yyyy;
            val.unshift({ hdr: "Toda a informação", cnt: "Mostrei toda a minha informação.", date: todays });
            _this.navParams.get('storage').set('history', val);
            var data = JSON.stringify({
                id: _this.id,
                name: "Toda a Informação"
            });
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__qr_qr__["a" /* QrPage */], {
                qrData: data,
                name: 'Toda a Informação'
            });
        });
    };
    QrCodePage.prototype.toggleIdade = function () {
        var _this = this;
        this.navParams.get('storage').get('history').then(function (val) {
            var array = val;
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            var todays = dd + '/' + mm + '/' + yyyy;
            val.unshift({ hdr: "Idade", cnt: "Mostrei a minha idade.", date: todays });
            _this.navParams.get('storage').set('history', val);
            var data = JSON.stringify({
                id: _this.id,
                name: "Idade"
            });
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__qr_qr__["a" /* QrPage */], {
                qrData: data,
                name: "Idade"
            });
        });
    };
    QrCodePage.prototype.toggleInstituicao = function () {
        var _this = this;
        this.navParams.get('storage').get('history').then(function (val) {
            var array = val;
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            var todays = dd + '/' + mm + '/' + yyyy;
            var bool;
            val.unshift({ hdr: "Instituição", cnt: "Mostrei a minha Instituição", date: todays });
            _this.navParams.get('storage').set('history', val);
            var data = JSON.stringify({
                id: _this.id,
                name: "Instituição"
            });
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__qr_qr__["a" /* QrPage */], {
                qrData: data,
                name: "Instituição"
            });
        });
    };
    QrCodePage.prototype.openItem = function (text) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__QrResultPage_QrResultPage__["a" /* QrResultPage */], {
            contents: text
        });
    };
    QrCodePage.prototype.toggleLer = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.barcodeScanner.scan().then(function (barcodeData) {
                _this.data = barcodeData.text;
                _this.openItem(barcodeData.text);
            }, function (err) {
                var alert = _this.alertCtrl.create({
                    title: 'Erro',
                    subTitle: err,
                    buttons: ['Ok']
                });
                alert.present();
            });
        });
    };
    QrCodePage.prototype.toggleCamera = function () {
        var _this = this;
        var options = {
            quality: 100,
            encodingType: this.camera.EncodingType.JPEG,
            cameraDirection: 1
        };
        this.platform.ready().then(function () {
            _this.camera.getPicture(options).then(function (imageData) {
                var alert = _this.alertCtrl.create({
                    title: 'Prova de Vida',
                    subTitle: "Foto registda e verificada",
                    buttons: ['Ok']
                });
                alert.present();
            }, function (err) {
                var alert = _this.alertCtrl.create({
                    title: 'Erro',
                    subTitle: err,
                    buttons: ['Ok']
                });
                alert.present();
            });
        });
    };
    QrCodePage.prototype.ngOnInit = function () {
        var _this = this;
        this.navParams.get('storage').get('key').then(function (val) {
            _this.key = val;
            _this.navParams.get('storage').get('token').then(function (val2) {
                _this.token = val2;
                _this.getPosts();
            });
        });
    };
    QrCodePage.prototype.getPosts = function () {
        var _this = this;
        this.homeService.getID(this.key, this.token).subscribe(function (response) {
            _this.id = response.data.user.id;
        });
    };
    QrCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'qrcode',template:/*ion-inline-start:"/Users/sergiocosta/Desktop/asac/Experiments/CPF/src/pages/qrcode/qrcode.html"*/'<ion-header>\n    <ion-navbar color="favorite">\n      <ion-title text-center>\n          QR\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <div class="card">\n      <button (click)="toggleAllInfo()" ion-button block style="background-color: #ffffff; color: #000000">Partilhar toda a informação</button>\n    </div>\n    <div class="card">\n      <button (click)="toggleIdade()" ion-button block style="background-color: #ffffff; color: #000000">Partilhar Idade</button>\n    </div>\n    <div class="card">\n      <button (click)="toggleInstituicao()" ion-button block style="background-color: #ffffff; color: #000000">Partilhar Instituicao</button>\n    </div>\n    <div class="card">\n      <button (click)="toggleLer()" ion-button block style="background-color: #ffffff; color: #000000">Ler Informação</button>\n    </div>\n    <div class="card">\n      <button (click)="toggleCamera()" ion-button block style="background-color: #ffffff; color: #000000">Prova de Vida</button>\n    </div>\n  </ion-content>\n  '/*ion-inline-end:"/Users/sergiocosta/Desktop/asac/Experiments/CPF/src/pages/qrcode/qrcode.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_services_home_service__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], QrCodePage);
    return QrCodePage;
}());

//# sourceMappingURL=qrcode.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QrPage = /** @class */ (function () {
    function QrPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    QrPage.prototype.ngOnInit = function () {
        this.name = this.navParams.get('name');
        this.qrData = this.navParams.get('qrData');
    };
    QrPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'qr',template:/*ion-inline-start:"/Users/sergiocosta/Desktop/asac/Experiments/CPF/src/pages/qr/qr.html"*/'<ion-header>\n  <ion-navbar color="favorite">\n    <ion-title text-center>\n        {{name}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding *ngIf="qrData">\n  <ngx-qrcode [qrc-value]="qrData"></ngx-qrcode>\n</ion-content>'/*ion-inline-end:"/Users/sergiocosta/Desktop/asac/Experiments/CPF/src/pages/qr/qr.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], QrPage);
    return QrPage;
}());

//# sourceMappingURL=qr.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_home_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QrResultPage = /** @class */ (function () {
    function QrResultPage(loadingCtrl, plt, navCtrl, sanitizer, navParams, homeService, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.plt = plt;
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.navParams = navParams;
        this.homeService = homeService;
        this.alertCtrl = alertCtrl;
        this.contents = navParams.get('contents');
        var obj = JSON.parse(this.contents);
        this.id = obj.id;
        this.name = obj.name;
        this.getPosts();
    }
    QrResultPage.prototype.getPosts = function () {
        var _this = this;
        this.homeService.getData(this.key, this.token, this.id).subscribe(function (response) {
            _this.item = response.data.information;
        });
    };
    QrResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'qrp',template:/*ion-inline-start:"/Users/sergiocosta/Desktop/asac/Experiments/CPF/src/pages/QrResultPage/QrResultPage.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="favorite">\n    <ion-title text-center>Cartão Académico</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="card" *ngIf="item && name==\'Toda a Informação\'">\n          <ion-thumbnail *ngIf="item.photo">\n              <img class="imagem" [src]="item.photo">\n          </ion-thumbnail>\n          <div class="container">\n            <p>\n              <b>Nome: </b> {{item.nome}}\n            </p>\n            <p>\n              <b>Número Mecanográfico: </b> {{item.numero}}\n            </p>\n            <p>\n              <b>Idade: </b> {{item.idade}}\n            </p>\n            <p>\n              <b>Género: </b> {{item.genero}}\n            </p>\n            <p>\n              <ion-thumbnail *ngIf="item.logo">\n                <img class="imagem" [src]="item.logo">\n              </ion-thumbnail>\n            </p>\n            <p>\n              <b>Instituição: </b> {{item.instituicao}}\n            </p>\n            <p>\n              <b>Sub-unidade: </b> {{item.subuni}}\n            </p>\n            <p>\n              <b>Função:</b> {{item.funcao}}\n            </p>\n          </div>\n    </div>  \n    <div class="card" *ngIf="item && name==\'Idade\'">\n      <div class="container">\n        <div style="padding: 20px">\n          <p>\n            <b>Idade: </b> {{item.idade}}\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class="card" *ngIf="item && name==\'Instituição\'">\n      <div class="container">\n        <div style="padding: 20px">\n          <p>\n            <b>Instituição: </b> {{item.instituicao}}\n          </p>\n        </div>\n      </div>\n    </div> \n</ion-content>\n\n'/*ion-inline-end:"/Users/sergiocosta/Desktop/asac/Experiments/CPF/src/pages/QrResultPage/QrResultPage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], QrResultPage);
    return QrResultPage;
}());

//# sourceMappingURL=QrResultPage.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qrcode_qrcode__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history_history__ = __webpack_require__(368);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(navParams) {
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__qrcode_qrcode__["a" /* QrCodePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__history_history__["a" /* HistoryPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */];
        this.tabParams = {
            storage: this.navParams.get('storage')
        };
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/sergiocosta/Desktop/asac/Experiments/CPF/src/pages/tabs/tabs.html"*/'<ion-tabs color="favorite">\n  <ion-tab [root]="tab1Root" [rootParams]="tabParams" tabTitle="Início" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" [rootParams]="tabParams" tabTitle="QR" tabIcon="qr-scanner"></ion-tab>\n  <ion-tab [root]="tab3Root" [rootParams]="tabParams" tabTitle="Histórico" tabIcon="paper"></ion-tab>\n  <ion-tab [root]="tab4Root" [rootParams]="tabParams" tabTitle="Definições" tabIcon="construct"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/sergiocosta/Desktop/asac/Experiments/CPF/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistoryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.navParams.get('storage').get('history').then(function (val) {
            _this.history = val;
        });
    };
    HistoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.navParams.get('storage').get('history').then(function (val) {
            _this.history = val;
        });
    };
    HistoryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.navParams.get('storage').get('history').then(function (val) {
            _this.history = val;
        });
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/Users/sergiocosta/Desktop/asac/Experiments/CPF/src/pages/history/history.html"*/'<ion-header>\n    <ion-navbar color="favorite">\n      <ion-title text-center>\n          Histórico\n      </ion-title>\n    </ion-navbar>\n</ion-header>\n  \n<ion-content padding>\n    <div *ngIf="history !== undefined">\n        <div *ngFor="let item of history">\n            <ion-card>\n              <ion-note item-end>\n                {{item.date}}\n              </ion-note>\n              <ion-card-header>\n                {{item.hdr}}\n              </ion-card-header>\n              <ion-card-content>\n                {{item.cnt}}\n              </ion-card-content>\n            </ion-card>\n        </div>\n      </div>\n</ion-content>\n  '/*ion-inline-end:"/Users/sergiocosta/Desktop/asac/Experiments/CPF/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_home_service__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KeyPage = /** @class */ (function () {
    function KeyPage(navCtrl, storage, homeService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.homeService = homeService;
        this.alertCtrl = alertCtrl;
        this.show = false;
    }
    KeyPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('key').then(function (pwd) {
            if (pwd) {
                _this.storage.get('token').then(function (pwd2) {
                    if (pwd2) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], {
                            storage: _this.storage
                        });
                    }
                    else {
                        _this.showT = true;
                    }
                });
            }
            else {
                _this.show = true;
            }
        });
    };
    KeyPage.prototype.toggleKey = function () {
        var _this = this;
        if (this.key != undefined) {
            console.log(this.key);
            this.homeService.getToken(this.key).subscribe(function (response) {
                _this.error = response;
                if (_this.error.status == "error") {
                    var alert_1 = _this.alertCtrl.create({
                        title: "ERRO",
                        subTitle: "Chave única errada",
                        buttons: [
                            {
                                text: 'Ok',
                                role: 'ok'
                            }
                        ]
                    });
                    alert_1.present();
                }
                else {
                    _this.show = false;
                    _this.showT = true;
                }
            });
        }
    };
    KeyPage.prototype.toggleBC = function () {
        this.show = true;
        this.showT = false;
    };
    KeyPage.prototype.toggleToken = function () {
        var _this = this;
        if ((this.key != undefined) && (this.token != undefined)) {
            this.homeService.getID(this.key, this.token).subscribe(function (response) {
                _this.item = response;
                console.log(response);
                console.log(_this.item.status);
                if (_this.item.status == "error") {
                    var alert_2 = _this.alertCtrl.create({
                        title: "ERRO",
                        subTitle: "Token errado",
                        buttons: [
                            {
                                text: 'Ok',
                                role: 'ok'
                            }
                        ]
                    });
                    alert_2.present();
                }
                else {
                    var array = [];
                    _this.storage.set('key', _this.key);
                    _this.storage.set('history', array);
                    _this.storage.set('token', _this.token);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], {
                        storage: _this.storage
                    });
                }
            });
        }
    };
    KeyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'key',template:/*ion-inline-start:"/Users/sergiocosta/Desktop/asac/Experiments/CPF/src/pages/key/key.html"*/'<ion-header>\n    <ion-navbar color="favorite">\n      <ion-title text-center>\n          Chave Móvel Digital\n      </ion-title>\n    </ion-navbar>\n</ion-header>\n  \n<ion-content padding>\n  <form *ngIf="show" (ngSubmit)="toggleKey()">\n      <ion-item>\n        <ion-label>Chave Móvel Digital:</ion-label>\n        <ion-textarea [(ngModel)]="key" name="key"></ion-textarea>\n      </ion-item>\n      <button ion-button type="submit" block style="background-color: #143363;">Confirmar</button>\n  </form>\n  <div *ngIf="showT">\n    <form (ngSubmit)="toggleToken()">\n        <ion-item>\n          <ion-label>Token:</ion-label>\n          <ion-textarea [(ngModel)]="token" name="token"></ion-textarea>\n        </ion-item>\n        <button ion-button type="submit" block style="background-color: #143363;">Confirmar</button>\n    </form>\n    <form (ngSubmit)="toggleBC()">\n        <button ion-button type="submit" block style="background-color: #143363;">Voltar Atrás</button>\n    </form>\n    </div>\n</ion-content>\n  '/*ion-inline-end:"/Users/sergiocosta/Desktop/asac/Experiments/CPF/src/pages/key/key.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__app_services_home_service__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], KeyPage);
    return KeyPage;
}());

//# sourceMappingURL=key.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Splash; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Splash = /** @class */ (function () {
    function Splash(viewCtrl, splashScreen) {
        this.viewCtrl = viewCtrl;
        this.splashScreen = splashScreen;
    }
    Splash.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.splashScreen.hide();
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 4000);
    };
    Splash = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splash',template:/*ion-inline-start:"/Users/sergiocosta/Desktop/asac/Experiments/CPF/src/pages/splash/splash.html"*/'<ion-content>\n    <table>\n        <tr><img src="assets/imgs/incm.png"></tr>\n        <tr><img src="assets/imgs/uminho.png"></tr>\n        <tr><img src="assets/imgs/unu-egov.png"></tr>\n        <tr><img src="assets/imgs/moçambique.jpeg"></tr>\n        <tr><img src="assets/imgs/inesctec.jpeg"></tr>\n    </table>\n</ion-content>'/*ion-inline-end:"/Users/sergiocosta/Desktop/asac/Experiments/CPF/src/pages/splash/splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], Splash);
    return Splash;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockScreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__key_key__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_pincode_input__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fingerprint_aio__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_crypto_js__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LockScreenPage = /** @class */ (function () {
    //Fazer tentativas depois
    function LockScreenPage(navCtrl, navParams, pincodeCtrl, storage, alertCtrl, faio) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pincodeCtrl = pincodeCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.faio = faio;
        this.storage.get('faio').then(function (fid) {
            if (fid !== undefined) {
                console.log("FAIO IS SET");
                console.log(fid);
                _this.id = fid;
            }
            else {
                console.log("SET FAIO FALSE");
                _this.storage.set('faio', false);
            }
        })
            .catch(function (error) { return console.log(error); });
    }
    LockScreenPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Try to get password stored
        this.storage.get('password_encrypt').then(function (pdw) {
            if (pdw) {
                console.log("Encrypted passwordk: " + pdw);
            }
            else {
                _this.presentAlert('PIN', "Para começar a usar a aplicação precisa de configurar um PIN de 6 digitos.", true);
            }
        })
            .catch(function (error) { return console.log(error); });
        this.storage.get('faio').then(function (faio) {
            if (faio) {
                setTimeout(function () {
                    _this.startTouchID();
                }, 4000);
            }
        });
    };
    LockScreenPage.prototype.openPinCode = function (register) {
        var _this = this;
        var pinCode = this.pincodeCtrl.create({
            title: 'Insira um PIN',
            passSize: 6,
            hideForgotPassword: true,
            hideCancelButton: register,
            enableBackdropDismiss: !register //Se estiver a registar tem que configurar
        });
        pinCode.present();
        pinCode.onDidDismiss(function (code, status) {
            // If user enter a password and the fase if confirm
            // do a login
            if (status === 'done' && !register) {
                _this.login(code);
            }
            else if (status === 'done' && register) {
                _this.code = code;
                // Confirm if pincodes match
                _this.confirmCode();
            }
        });
    };
    LockScreenPage.prototype.confirmCode = function () {
        var _this = this;
        var pinCode = this.pincodeCtrl.create({
            title: 'Confirme o seu PIN',
            passSize: 6,
            hideForgotPassword: true,
            hideCancelButton: true,
            enableBackdropDismiss: false
        });
        pinCode.present();
        pinCode.onDidDismiss(function (code, status) {
            if (status === 'done') {
                if (_this.code == code) {
                    // if match send a message and do a registration of pin code
                    _this.presentAlert("PIN configurado!", "Pode mudar o PIN mais tarde nas Definições.", false);
                    _this.register(code);
                }
                else {
                    _this.presentAlert("Erro!", "Os PINs inseridos não são iguais. Tente novamente.", false);
                    _this.openPinCode(true);
                }
            }
        });
    };
    LockScreenPage.prototype.startTouchID = function () {
        var _this = this;
        this.faio.show({
            clientId: 'FingerPrintLockScreen',
            clientSecret: 'lasd08aah@981',
            disableBackup: true,
            localizedFallbackTitle: 'Insira o Pin',
            localizedReason: 'Autentique-se' //Only for iOS
        })
            .then(function (result) {
            // If the TouchID is correct
            _this.storage.get('password_encrypt').then(function (pwd) {
                var stored_pincode = String(pwd);
                console.log("Stored password: " + stored_pincode);
                // Go to key page
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__key_key__["a" /* KeyPage */], {
                    pincode: stored_pincode
                });
            });
        })
            .catch(function (error) { return console.log(error); });
    };
    LockScreenPage.prototype.presentAlert = function (title, message, register) {
        var _this = this;
        var botoes;
        if (register) {
            botoes = [
                {
                    text: 'OK',
                    handler: function () {
                        _this.openPinCode(true);
                    }
                }
            ];
        }
        else {
            botoes = ["OK"];
        }
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: botoes
        });
        alert.present();
    };
    //Encryption
    LockScreenPage.prototype.register = function (pincode) {
        var hash = String(__WEBPACK_IMPORTED_MODULE_5_crypto_js___default.a.SHA256(pincode));
        this.storage.set('password_encrypt', hash);
        this.storage.set('first', true);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__key_key__["a" /* KeyPage */], {
            pincode: hash
        });
    };
    LockScreenPage.prototype.login = function (pincode) {
        var _this = this;
        // store passwords 
        var entered_pincode = String(__WEBPACK_IMPORTED_MODULE_5_crypto_js___default.a.SHA256(pincode));
        // get password stored on local storage
        this.storage.get('password_encrypt').then(function (pwd) {
            var stored_pincode = String(pwd);
            console.log("Stored password: " + stored_pincode);
            // if match go to tabs page
            if (entered_pincode == stored_pincode) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__key_key__["a" /* KeyPage */], {
                    pincode: entered_pincode
                });
            }
            else {
                _this.presentAlert("Erro", "PIN errado", false);
            }
        })
            .catch(function (error) { return console.log(error); });
    };
    LockScreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-lockscreen',template:/*ion-inline-start:"/Users/sergiocosta/Desktop/asac/Experiments/CPF/src/pages/lock-screen/lock-screen.html"*/'<!--\n  Generated template for the LockScreenPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="favorite">\n      <ion-title text-center>\n        Cartão de Funcionário Público\n      </ion-title>\n    </ion-navbar>\n</ion-header>\n  \n  <ion-content padding>\n      <!--<h4 text-center>Insira o seu PIN</h4> -->\n    <div class="pin-container">\n      <button ion-button icon-only full (click)="openPinCode(false)" style="background-color: #143363;">\n        <ion-icon name="lock"></ion-icon>\n      </button>\n        <button ion-button icon-only full *ngIf="id" (click)="startTouchID()" style="background-color: #143363;">\n          <ion-icon name="finger-print"></ion-icon>\n        </button>\n    </div>  \n  </ion-content>\n'/*ion-inline-end:"/Users/sergiocosta/Desktop/asac/Experiments/CPF/src/pages/lock-screen/lock-screen.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic2_pincode_input__["a" /* PincodeController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */]])
    ], LockScreenPage);
    return LockScreenPage;
}());

//# sourceMappingURL=lock-screen.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(384);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_settings_settings__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_qrcode_qrcode__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_qr_qr__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_QrResultPage_QrResultPage__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_key_key__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_history_history__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_splash_splash__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_lock_screen_lock_screen__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic2_pincode_input__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_fingerprint_aio__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_qrcode2__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_barcode_scanner__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_lock_screen_lock_screen__["a" /* LockScreenPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_key_key__["a" /* KeyPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_splash_splash__["a" /* Splash */],
                __WEBPACK_IMPORTED_MODULE_1__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_qrcode_qrcode__["a" /* QrCodePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_qr_qr__["a" /* QrPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_QrResultPage_QrResultPage__["a" /* QrResultPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_21_ionic2_pincode_input__["b" /* PincodeInputModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_23_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_lock_screen_lock_screen__["a" /* LockScreenPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_key_key__["a" /* KeyPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_splash_splash__["a" /* Splash */],
                __WEBPACK_IMPORTED_MODULE_1__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_qrcode_qrcode__["a" /* QrCodePage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_qr_qr__["a" /* QrPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_QrResultPage_QrResultPage__["a" /* QrResultPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
                { provide: __WEBPACK_IMPORTED_MODULE_10__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["g" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
        this.baseUrl = 'https://mighty-woodland-27266.herokuapp.com/';
    }
    HomeService.prototype.getData = function (key, token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        var data = JSON.stringify({
            email: key,
            password: token
        });
        return this.http.get(this.baseUrl + "api/auth/data/" + id, options)
            .map(function (res) { return res.json(); });
    };
    HomeService.prototype.getID = function (key, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        var data = JSON.stringify({
            email: key,
            password: token
        });
        return this.http.post(this.baseUrl + "api/users/sign_in", data, options)
            .map(function (res) { return res.json(); });
    };
    HomeService.prototype.getURL = function () {
        return this.baseUrl;
    };
    HomeService.prototype.getToken = function (key) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        var data = JSON.stringify({
            email: key
        });
        return this.http.post(this.baseUrl + 'api/users/send_token', data, options)
            .map(function (res) { return res.json(); });
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HomeService);
    return HomeService;
}());

//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_lock_screen_lock_screen__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_splash_splash__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_home_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(72);
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
    function MyApp(platform, storage, statusBar, splashScreen, modalCtrl) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_lock_screen_lock_screen__["a" /* LockScreenPage */];
        platform.ready().then(function () {
            /*
              if (PIN) {
                rootPage = HomePage;
                lockService.init();
              } else {
                rootPage = StartPage;
              }
              TIRAR O LOCKSERVICE DAQUI DE BAIXO
              */
            //lockService.init();
            statusBar.styleDefault();
            var splash = modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_splash_splash__["a" /* Splash */]);
            splash.present();
            //splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/sergiocosta/Desktop/asac/Experiments/CPF/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/sergiocosta/Desktop/asac/Experiments/CPF/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_home_service__["a" /* HomeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[379]);
//# sourceMappingURL=main.js.map