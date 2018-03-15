webpackJsonp([0],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coze_coze__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__friends_friends__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(235);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'TabsPage',template:/*ion-inline-start:"/Users/evan/workspace/StartupStudio/CozeApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabIcon="md-bonfire"></ion-tab>\n  <ion-tab [root]="tab2Root" tabIcon="md-contacts"></ion-tab>\n  <ion-tab [root]="tab3Root" tabIcon="md-settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/evan/workspace/StartupStudio/CozeApp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 145:
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
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 188:
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
webpackEmptyAsyncContext.id = 188;

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CozePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_diagnostic__ = __webpack_require__(233);
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
    function CozePage(navCtrl, nativeAudio, platform, http, diagnostic) {
        //this.GetCameraPermission();
        //this.GetRecordAudioPermission();
        var _this = this;
        this.navCtrl = navCtrl;
        this.nativeAudio = nativeAudio;
        this.platform = platform;
        this.http = http;
        this.diagnostic = diagnostic;
        // TODO: This needs to be set to the countdown until the next Coze
        this.timeToCoze = 5;
        this.gotNextCozeTime = false;
        this.readyForCoze = false;
        this.startCoze = false;
        this.callTimeLeft = 30;
        this.showControls = false;
        this.showRemoteVideo = true;
        this.showMyVideo = true;
        this.partner_id = -1;
        this.incomingCallId = 0;
        platform.ready().then(function (readySource) {
            _this.InitializeApiRTC();
            _this.nativeAudio.preloadComplex('uniqueI1', 'assets/tone.mp3', 1, 1, 0).then(function (succ) {
                console.log("suu", succ);
            }, function (err) {
                console.log("err", err);
            });
            _this.screenWidth = platform.width();
            _this.screenHeight = platform.height();
            _this.GetNextCozeTime();
            // console.log(nextCozeTime)
            _this.StartCozeTimer();
        });
    }
    CozePage.prototype.InitializeApiRTC = function () {
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
    CozePage.prototype.sessionReadyHandler = function (e) {
        this.myCallId = apiRTC.session.apiCCId;
        //this.InitializeControls();
        this.AddEventListeners();
        this.InitializeWebRTCClient();
    };
    CozePage.prototype.InitializeWebRTCClient = function () {
        this.webRTCClient = apiRTC.session.createWebRTCClient({
            status: "status" //Optionnal
        });
        /*    this.webRTCClient.setAllowMultipleCalls(true);
            this.webRTCClient.setVideoBandwidth(300);
            this.webRTCClient.setUserAcceptOnIncomingCall(true);*/
    };
    CozePage.prototype.InitializeControls = function () {
        this.showCall = true;
        this.showAnswer = false;
        this.showHangup = false;
        this.showReject = false;
    };
    CozePage.prototype.InitializeControlsForIncomingCall = function () {
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
    CozePage.prototype.InitializeControlsForHangup = function () {
        this.showCall = true;
        this.showAnswer = false;
        this.showReject = false;
        this.showHangup = false;
    };
    CozePage.prototype.UpdateControlsOnAnswer = function () {
        this.showAnswer = false;
        this.showReject = false;
        this.showHangup = true;
        this.showCall = false;
    };
    CozePage.prototype.UpdateControlsOnReject = function () {
        this.showAnswer = false;
        this.showReject = false;
        this.showHangup = false;
        this.showCall = true;
    };
    CozePage.prototype.RemoveMediaElements = function (callId) {
        this.webRTCClient.removeElementFromDiv('mini', 'miniElt-' + callId);
        this.webRTCClient.removeElementFromDiv('remote', 'remoteElt-' + callId);
    };
    CozePage.prototype.AddStreamInDiv = function (stream, callType, divId, mediaEltId, style, muted) {
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
    CozePage.prototype.AddEventListeners = function () {
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
            console.log("incomingCall");
            //this.InitializeControlsForIncomingCall();
            _this.incomingCallId = e.detail.callId;
            _this.AnswerCall(_this.incomingCallId);
            _this.StartCallTimer();
        });
        apiRTC.addEventListener("hangup", function (e) {
            if (e.detail.lastEstablishedCall === true) {
                _this.InitializeControlsForHangup();
            }
            _this.status = _this.status + "<br/> The call has been hunged up due to the following reasons <br/> " + e.detail.reason;
            _this.RemoveMediaElements(e.detail.callId);
        });
        apiRTC.addEventListener("remoteStreamAdded", function (e) {
            //var w = Math.min(this.screenWidth, this.screenHeight);
            //console.log(w);
            _this.webRTCClient.addStreamInDiv(e.detail.stream, e.detail.callType, "remote", 'remoteElt-' + e.detail.callId, {
                width: "300px",
                height: "225px"
                //width: Math.floor(w*0.5),
                //height: Math.floor(w*0.5)
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
    CozePage.prototype.MakeCall = function (calleeId) {
        console.log("MakeCall");
        var callId = this.webRTCClient.call(calleeId);
        if (callId != null) {
            this.incomingCallId = callId;
            this.showHangup = true;
        }
    };
    CozePage.prototype.HangUp = function () {
        this.webRTCClient.hangUp(this.incomingCallId);
    };
    CozePage.prototype.AnswerCall = function (incomingCallId) {
        console.log("AnswerCall");
        this.webRTCClient.acceptCall(incomingCallId);
        this.nativeAudio.stop('uniqueI1').then(function () { }, function () { });
        this.UpdateControlsOnAnswer();
    };
    CozePage.prototype.RejectCall = function (incomingCallId) {
        this.webRTCClient.refuseCall(incomingCallId);
        this.UpdateControlsOnReject();
        this.RemoveMediaElements(incomingCallId);
    };
    CozePage.prototype.StartCozeTimer = function () {
        var _this = this;
        this.cozeTimer = setTimeout(function (x) {
            if (_this.timeToCoze <= 0) { }
            _this.timeToCoze -= 1;
            if (_this.timeToCoze < 3 && !_this.readyForCoze) {
                _this.readyForCoze = true;
                _this.ReadyForCoze();
            }
            if (_this.timeToCoze > 0) {
                _this.StartCozeTimer();
            }
            else {
                _this.startCoze = true;
                _this.GetMatch();
            }
        }, 1000);
    };
    CozePage.prototype.StartCallTimer = function () {
        var _this = this;
        this.callTimer = setTimeout(function (x) {
            if (_this.callTimeLeft <= 0) { }
            _this.callTimeLeft -= 1;
            if (_this.callTimeLeft > 0) {
                _this.HangUp();
                // TODO: This needs to be reset to the countdown until the next Coze
                _this.timeToCoze = 5;
            }
        }, 1000);
    };
    CozePage.prototype.GetNextCozeTime = function () {
        var _this = this;
        var url = 'http://middleware.ddns.net:5000/get_next_coze_time';
        this.http.get(url, {}, {}).then(function (data) {
            var nextCozeTime = JSON.parse(data.data)["next_coze_time"];
            var timeNow = +new Date();
            _this.timeToCoze = Math.floor((+new Date(nextCozeTime) - timeNow) / 1000);
            console.log(nextCozeTime);
            console.log(new Date(nextCozeTime));
            console.log(_this.timeToCoze);
            //this.StartCozeTimer()
            _this.gotNextCozeTime = true;
            _this.debugmsg = data.data;
        });
    };
    CozePage.prototype.ReadyForCoze = function () {
        var url = 'http://middleware.ddns.net:5000/ready_for_coze?webrtc_id=' + encodeURI(this.myCallId);
        this.http.get(url, {}, {}).then(function (data) {
            console.log("Signaled 'Ready for Coze'");
        });
    };
    CozePage.prototype.GetMatch = function () {
        var attempt = 0;
        var _partner_id = -1;
        var url = 'http://middleware.ddns.net:5000/get_match?webrtc_id=' + encodeURI(this.myCallId);
        var $this = this;
        var getMatchIntervalID = setInterval(function () {
            console.log("Attempt " + (attempt + 1) + " at GetMatch()");
            $this.http.get(url, {}, {}).then(function (data) {
                _partner_id = parseInt(JSON.parse(data.data)["partner_id"]);
                console.log(_partner_id);
                if (_partner_id == -1) {
                    console.log("Didn't find a match - trying again");
                    attempt += 1;
                    if (attempt >= 3) {
                        console.log("Tried " + attempt + " times, quitting");
                        window.clearInterval(getMatchIntervalID);
                    }
                }
                else {
                    console.log("Found a match: " + _partner_id);
                    //this.partner_id = _partner_id;
                    window.clearInterval(getMatchIntervalID);
                    $this.MakeCall(_partner_id);
                }
                console.log("End of GetMatch attempt");
            });
        }, 3000);
    };
    CozePage.prototype.GetCameraPermission = function () {
        var _this = this;
        this.diagnostic.getPermissionAuthorizationStatus(this.diagnostic.permission.CAMERA).then(function (status) {
            console.log("AuthorizationStatus");
            console.log(status);
            if (status != _this.diagnostic.permissionStatus.GRANTED) {
                _this.diagnostic.requestRuntimePermission(_this.diagnostic.permission.CAMERA).then(function (data) {
                    console.log("getCameraAuthorizationStatus");
                    console.log(data);
                });
            }
            else {
                console.log("We have the CAMERA permission");
            }
        }, function (statusError) {
            console.log("statusError");
            console.log(statusError);
        });
    };
    CozePage.prototype.GetRecordAudioPermission = function () {
        var _this = this;
        this.diagnostic.getPermissionAuthorizationStatus(this.diagnostic.permission.RECORD_AUDIO).then(function (status) {
            console.log("AuthorizationStatus");
            console.log(status);
            if (status != _this.diagnostic.permissionStatus.GRANTED) {
                _this.diagnostic.requestRuntimePermission(_this.diagnostic.permission.RECORD_AUDIO).then(function (data) {
                    console.log("getRecordAudioAuthorizationStatus");
                    console.log(data);
                });
            }
            else {
                console.log("We have the RECORD_AUDIO permission");
            }
        }, function (statusError) {
            console.log("statusError");
            console.log(statusError);
        });
    };
    CozePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coze',template:/*ion-inline-start:"/Users/evan/workspace/StartupStudio/CozeApp/src/pages/coze/coze.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Coze\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list *ngIf="!this.startCoze && this.gotNextCozeTime">\n      <ion-item>\n        <h1 class="coze-timer-header">\n          Countdown to Next Coze:\n        </h1>\n      </ion-item>\n      <ion-item>\n        <h1 class="coze-timer">\n          {{this.timeToCoze}}\n        </h1>\n      </ion-item>\n    </ion-list>\n    <ion-list *ngIf="this.startCoze && !showRemoteVideo">\n        <ion-item>\n          <h3>Connecting to your partner...</h3>\n        </ion-item>\n        <ion-item *ngIf="this.showControls">\n            <ion-label floating>Call ID:</ion-label>\n            <ion-input type="text" [(ngModel)]="calleeId"></ion-input>\n        </ion-item>\n    </ion-list>\n    <ion-grid *ngIf="this.startCoze">\n        <ion-row *ngIf="this.showControls">\n          <h3>\n            My Call ID: {{myCallId}}\n          </h3>\n        </ion-row>\n        <ion-row *ngIf="this.showControls">\n            <ion-col>\n                <button *ngIf="showCall" ion-button block (click)=\'MakeCall(calleeId)\'>Call</button>\n            </ion-col>\n            <ion-col>\n                <button *ngIf="showHangup" ion-button block color="danger" (click)=\'HangUp()\'>Hangup</button>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="this.showControls">\n            <ion-col>\n                <button *ngIf="showAnswer" ion-button block color="secondary" (click)=\'AnswerCall(incomingCallId)\'>Answer</button>\n            </ion-col>\n            <ion-col>\n                <button *ngIf="showReject" ion-button block color="danger">Reject</button>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="this.showControls">\n            <ion-col>\n                <p *ngIf="showStatus" [innerHtml]="status"></p>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="showRemoteVideo">\n            <ion-col>\n                <p>Remote Stream</p>\n                <div id="remote" style="width:100%;"></div>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="showMyVideo">\n            <ion-col>\n                <p>My Stream</p>\n                <div id="mini"></div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/evan/workspace/StartupStudio/CozeApp/src/pages/coze/coze.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_diagnostic__["a" /* Diagnostic */]])
    ], CozePage);
    return CozePage;
}());

//# sourceMappingURL=coze.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
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
            selector: 'page-friends',template:/*ion-inline-start:"/Users/evan/workspace/StartupStudio/CozeApp/src/pages/friends/friends.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Friends\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-icon name="md-person" item-start></ion-icon>\n      Allison A. from NYU\n    </ion-item>\n    <ion-item>\n      <ion-icon name="md-person" item-start></ion-icon>\n      Barry B. from Columbia\n    </ion-item>\n    <ion-item>\n      <ion-icon name="md-person" item-start></ion-icon>\n      Cathy C. from Cornell Tech\n    </ion-item>\n    <ion-item>\n      <ion-icon name="md-person" item-start></ion-icon>\n      Donny D. from The New School\n    </ion-item>\n    <ion-item>\n      <ion-icon name="md-person" item-start></ion-icon>\n      Eric E. from CUNY\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/evan/workspace/StartupStudio/CozeApp/src/pages/friends/friends.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], FriendsPage);
    return FriendsPage;
}());

//# sourceMappingURL=friends.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
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
            selector: 'page-settings',template:/*ion-inline-start:"/Users/evan/workspace/StartupStudio/CozeApp/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Profile</h2>\n  <h2>Prerefences</h2>\n  <h2>Report a Bug</h2>\n</ion-content>\n'/*ion-inline-end:"/Users/evan/workspace/StartupStudio/CozeApp/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(305);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_coze_coze__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_friends_friends__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_native_audio__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_http__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_diagnostic__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__firebase_credentials__ = __webpack_require__(445);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_18__firebase_credentials__["a" /* FIREBASE_CREDENTIALS */]),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["a" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_coze_coze__["a" /* CozePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_friends_friends__["a" /* FriendsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_native_audio__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_diagnostic__["a" /* Diagnostic */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(124);
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
// import { HomePage } from '../pages/home/home';
var MyApp = (function () {
    // Uncomment this to make the home page the test WebRTC page
    //rootPage:any = HomePage;
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/evan/workspace/StartupStudio/CozeApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/evan/workspace/StartupStudio/CozeApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(afAuth, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!!user.email.endsWith(".edu")) return [3 /*break*/, 1];
                        this.loginError = "You must register with a .edu e-mail address";
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                        }
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/evan/workspace/StartupStudio/CozeApp/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Email Address</ion-label>\n    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n  </ion-item>\n\n  <button ion-button (click)="login(user)">Login</button>\n  <button ion-button color="light" (click)="register(user)">Register</button>\n  <br><br>\n  {{loginError}}\n\n</ion-content>\n'/*ion-inline-end:"/Users/evan/workspace/StartupStudio/CozeApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(125);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/evan/workspace/StartupStudio/CozeApp/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar color="dark">\n        <ion-title>\n            Call Demo - {{myCallId}}\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n            <ion-label floating>Call ID:</ion-label>\n            <ion-input type="text" [(ngModel)]="calleeId"></ion-input>\n        </ion-item>\n    </ion-list>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <button *ngIf="showCall" ion-button block (click)=\'MakeCall(calleeId)\'>Call</button>\n            </ion-col>\n            <ion-col>\n                <button *ngIf="showHangup" ion-button block color="danger" (click)=\'HangUp()\'>Hangup</button>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <button *ngIf="showAnswer" ion-button block color="secondary" (click)=\'AnswerCall(incomingCallId)\'>Answer</button>\n            </ion-col>\n            <ion-col>\n                <button *ngIf="showReject" ion-button block color="danger">Reject</button>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <p *ngIf="showStatus" [innerHtml]="status"></p>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="showRemoteVideo">\n            <ion-col>\n                <p>Remote Stream</p>\n                <div id="remote" style="width:100%;"></div>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="showMyVideo">\n            <ion-col>\n                <p>My Stream</p>\n                <div id="mini"></div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/evan/workspace/StartupStudio/CozeApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CREDENTIALS; });
var FIREBASE_CREDENTIALS = {
    apiKey: "AIzaSyA-ghCvFKtmWslyfdv7tfijtgfrSTkV_ZA",
    authDomain: "cozeserver.firebaseapp.com",
    databaseURL: "https://cozeserver.firebaseio.com",
    projectId: "cozeserver",
    storageBucket: "",
    messagingSenderId: "1048041411921"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ })

},[285]);
//# sourceMappingURL=main.js.map