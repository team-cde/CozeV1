webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CozePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CozePage = (function () {
    function CozePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.maxTime = 30;
    }
    CozePage.prototype.StartTimer = function () {
        var _this = this;
        this.timer = setTimeout(function (x) {
            if (_this.maxTime <= 0) { }
            _this.maxTime -= 1;
            if (_this.maxTime > 0) {
                _this.hidevalue = false;
                _this.StartTimer();
            }
            else {
                _this.hidevalue = true;
            }
        }, 1000);
    };
    CozePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coze',template:/*ion-inline-start:"/Users/evan/workspace/StartupStudio/CozeV1/src/pages/coze/coze.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Coze\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1 class="countdown-timer" *ngIf="!this.hidevalue">\n    {{this.maxTime}}\n  </h1>\n</ion-content>\n'/*ion-inline-end:"/Users/evan/workspace/StartupStudio/CozeV1/src/pages/coze/coze.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], CozePage);
    return CozePage;
}());

//# sourceMappingURL=coze.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FriendsPage = (function () {
    function FriendsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FriendsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-friends',template:/*ion-inline-start:"/Users/evan/workspace/StartupStudio/CozeV1/src/pages/friends/friends.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Friends\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-icon name="md-person" item-start></ion-icon>\n      Allison A. from NYU\n    </ion-item>\n    <ion-item>\n      <ion-icon name="md-person" item-start></ion-icon>\n      Barry B. from Columbia\n    </ion-item>\n    <ion-item>\n      <ion-icon name="md-person" item-start></ion-icon>\n      Cathy C. from Cornell Tech\n    </ion-item>\n    <ion-item>\n      <ion-icon name="md-person" item-start></ion-icon>\n      Donny D. from The New School\n    </ion-item>\n    <ion-item>\n      <ion-icon name="md-person" item-start></ion-icon>\n      Eric E. from CUNY\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/evan/workspace/StartupStudio/CozeV1/src/pages/friends/friends.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], FriendsPage);
    return FriendsPage;
}());

//# sourceMappingURL=friends.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/evan/workspace/StartupStudio/CozeV1/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Profile</h2>\n  <h2>Prerefences</h2>\n  <h2>Report a Bug</h2>\n</ion-content>\n'/*ion-inline-end:"/Users/evan/workspace/StartupStudio/CozeV1/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_coze_coze__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_friends_friends__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_audio__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Temporary until we get video chat working




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_coze_coze__["a" /* CozePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_friends_friends__["a" /* FriendsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_coze_coze__["a" /* CozePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_friends_friends__["a" /* FriendsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_audio__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// This is temporary so we can port over the WebRTC funcitonality to our Coze page

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        //rootPage:any = TabsPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/evan/workspace/StartupStudio/CozeV1/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/evan/workspace/StartupStudio/CozeV1/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, nativeAudio) {
        this.navCtrl = navCtrl;
        this.nativeAudio = nativeAudio;
        this.showRemoteVideo = true;
        this.showMyVideo = true;
        this.incomingCallId = 0;
        this.InitializeApiRTC();
        this.nativeAudio.preloadComplex('uniqueI1', 'assets/tone.mp3', 1, 1, 0).then(function (succ) {
            console.log("suu", succ);
        }, function (err) {
            console.log("err", err);
        });
    }
    HomePage.prototype.InitializeApiRTC = function () {
        var _this = this;
        //apiRTC initialization
        apiRTC.init({
            apiKey: "819abef1fde1c833e0601ec6dd4a8226",
            // apiCCId : "2",
            onReady: function (e) {
                _this.sessionReadyHandler(e);
            }
        });
    };
    HomePage.prototype.sessionReadyHandler = function (e) {
        this.myCallId = apiRTC.session.apiCCId;
        this.InitializeControls();
        this.AddEventListeners();
        this.InitializeWebRTCClient();
    };
    HomePage.prototype.InitializeWebRTCClient = function () {
        this.webRTCClient = apiRTC.session.createWebRTCClient({
            status: "status" //Optionnal
        });
        /*    this.webRTCClient.setAllowMultipleCalls(true);
            this.webRTCClient.setVideoBandwidth(300);
            this.webRTCClient.setUserAcceptOnIncomingCall(true);*/
    };
    HomePage.prototype.InitializeControls = function () {
        this.showCall = true;
        this.showAnswer = false;
        this.showHangup = false;
        this.showReject = false;
    };
    HomePage.prototype.InitializeControlsForIncomingCall = function () {
        this.showCall = false;
        this.showAnswer = true;
        this.showReject = true;
        this.showHangup = true;
        this.nativeAudio.loop('uniqueI1').then(function (succ) {
            console.log("succ", succ);
        }, function (err) {
            console.log("err", err);
        });
    };
    HomePage.prototype.InitializeControlsForHangup = function () {
        this.showCall = true;
        this.showAnswer = false;
        this.showReject = false;
        this.showHangup = false;
    };
    HomePage.prototype.UpdateControlsOnAnswer = function () {
        this.showAnswer = false;
        this.showReject = false;
        this.showHangup = true;
        this.showCall = false;
    };
    HomePage.prototype.UpdateControlsOnReject = function () {
        this.showAnswer = false;
        this.showReject = false;
        this.showHangup = false;
        this.showCall = true;
    };
    HomePage.prototype.RemoveMediaElements = function (callId) {
        this.webRTCClient.removeElementFromDiv('mini', 'miniElt-' + callId);
        this.webRTCClient.removeElementFromDiv('remote', 'remoteElt-' + callId);
    };
    HomePage.prototype.AddStreamInDiv = function (stream, callType, divId, mediaEltId, style, muted) {
        var mediaElt = null;
        var divElement = null;
        if (callType === 'audio') {
            mediaElt = document.createElement("audio");
        }
        else {
            mediaElt = document.createElement("video");
        }
        mediaElt.id = mediaEltId;
        mediaElt.autoplay = true;
        mediaElt.muted = muted;
        mediaElt.style.width = style.width;
        mediaElt.style.height = style.height;
        divElement = document.getElementById(divId);
        divElement.appendChild(mediaElt);
        this.webRTCClient.attachMediaStream(mediaElt, stream);
    };
    HomePage.prototype.AddEventListeners = function () {
        var _this = this;
        apiRTC.addEventListener("userMediaSuccess", function (e) {
            _this.showStatus = true;
            _this.showMyVideo = true;
            _this.webRTCClient.addStreamInDiv(e.detail.stream, e.detail.callType, "mini", 'miniElt-' + e.detail.callId, {
                width: "128px",
                height: "96px"
            }, true);
        });
        apiRTC.addEventListener("userMediaError", function (e) {
            _this.InitializeControlsForHangup();
            _this.status = _this.status + "<br/> The following error has occurred <br/> " + e;
        });
        apiRTC.addEventListener("incomingCall", function (e) {
            _this.InitializeControlsForIncomingCall();
            _this.incomingCallId = e.detail.callId;
        });
        apiRTC.addEventListener("hangup", function (e) {
            if (e.detail.lastEstablishedCall === true) {
                _this.InitializeControlsForHangup();
            }
            _this.status = _this.status + "<br/> The call has been hunged up due to the following reasons <br/> " + e.detail.reason;
            _this.RemoveMediaElements(e.detail.callId);
        });
        apiRTC.addEventListener("remoteStreamAdded", function (e) {
            _this.webRTCClient.addStreamInDiv(e.detail.stream, e.detail.callType, "remote", 'remoteElt-' + e.detail.callId, {
                width: "300px",
                height: "225px"
            }, false);
        });
        apiRTC.addEventListener("webRTCClientCreated", function (e) {
            console.log("webRTC Client Created");
            _this.webRTCClient.setAllowMultipleCalls(true);
            _this.webRTCClient.setVideoBandwidth(300);
            _this.webRTCClient.setUserAcceptOnIncomingCall(true);
            /*      this.InitializeControls();
                  this.AddEventListeners();*/
            //this.MakeCall("729278");
        });
    };
    HomePage.prototype.MakeCall = function (calleeId) {
        var callId = this.webRTCClient.call(calleeId);
        if (callId != null) {
            this.incomingCallId = callId;
            this.showHangup = true;
        }
    };
    HomePage.prototype.HangUp = function () {
        this.webRTCClient.hangUp(this.incomingCallId);
    };
    HomePage.prototype.AnswerCall = function (incomingCallId) {
        this.webRTCClient.acceptCall(incomingCallId);
        this.nativeAudio.stop('uniqueI1').then(function () { }, function () { });
        this.UpdateControlsOnAnswer();
    };
    HomePage.prototype.RejectCall = function (incomingCallId) {
        this.webRTCClient.refuseCall(incomingCallId);
        this.UpdateControlsOnReject();
        this.RemoveMediaElements(incomingCallId);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/evan/workspace/StartupStudio/CozeV1/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar color="dark">\n        <ion-title>\n            Call Demo - {{myCallId}}\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n            <ion-label floating>Call ID:</ion-label>\n            <ion-input type="text" [(ngModel)]="calleeId"></ion-input>\n        </ion-item>\n    </ion-list>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <button *ngIf="showCall" ion-button block (click)=\'MakeCall(calleeId)\'>Call</button>\n            </ion-col>\n            <ion-col>\n                <button *ngIf="showHangup" ion-button block color="danger" (click)=\'HangUp()\'>Hangup</button>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <button *ngIf="showAnswer" ion-button block color="secondary" (click)=\'AnswerCall(incomingCallId)\'>Answer</button>\n            </ion-col>\n            <ion-col>\n                <button *ngIf="showReject" ion-button block color="danger">Reject</button>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <p *ngIf="showStatus" [innerHtml]="status"></p>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="showRemoteVideo">\n            <ion-col>\n                <p>Remote Stream</p>\n                <div id="remote" style="width:100%;"></div>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="showMyVideo">\n            <ion-col>\n                <p>My Stream</p>\n                <div id="mini"></div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/evan/workspace/StartupStudio/CozeV1/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coze_coze__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__friends_friends__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__coze_coze__["a" /* CozePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__friends_friends__["a" /* FriendsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/evan/workspace/StartupStudio/CozeV1/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabIcon="md-bonfire"></ion-tab>\n  <ion-tab [root]="tab2Root" tabIcon="md-contacts"></ion-tab>\n  <ion-tab [root]="tab3Root" tabIcon="md-settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/evan/workspace/StartupStudio/CozeV1/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map