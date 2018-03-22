webpackJsonp([0],{

/***/ 147:
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
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 190:
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
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CozePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_firebase_firebase__ = __webpack_require__(71);
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
    function CozePage(navCtrl, nativeAudio, platform, http, androidPermissions, afAuth, firebaseProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.nativeAudio = nativeAudio;
        this.platform = platform;
        this.http = http;
        this.androidPermissions = androidPermissions;
        this.afAuth = afAuth;
        this.firebaseProvider = firebaseProvider;
        // TODO: This needs to be set to the countdown until the next Coze
        this.timeToCoze = 5;
        this.gotNextCozeTime = false;
        this.readyForCoze = false;
        this.startCoze = false;
        this.callTimeLeft = 0;
        this.callMaxDuration = 30;
        this.timeToCozeStr = "-:-:-";
        //ifconfig | grep inet | grep broadcast
        //cozeHost: string = "http://10.148.128.133:5000"
        //cozeHost: string = "http://middleware.ddns.net:5000"
        this.cozeHost = __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* CONFIG */].cozeHost;
        this.showControls = false;
        this.showRemoteVideo = true;
        this.showMyVideo = true;
        this.connected = false;
        this.debugmsg = "";
        this.partnerIsFriend = false;
        this.incomingCallId = 0;
        console.log("On Coze Page");
        platform.ready().then(function (readySource) {
            console.log("Coze Page: platform.ready");
            _this.myUserId = _this.afAuth.auth.currentUser.uid;
            _this.GetPermissions();
            _this.InitializeApiRTC();
            /*
            this.nativeAudio.preloadComplex('uniqueI1', 'assets/tone.mp3', 1, 1, 0).then((succ)=>{
              console.log("suu",succ)
            }, (err)=> {
              console.log("err",err)
            });*/
            _this.screenWidth = platform.width();
            _this.screenHeight = platform.height();
            //this.GetNextCozeTime();
        });
    }
    CozePage.prototype.ionViewDidEnter = function () {
        this.GetNextCozeTime();
    };
    CozePage.prototype.InitializeApiRTC = function () {
        var _this = this;
        //apiRTC initialization
        apiRTC.init({
            apiKey: "819abef1fde1c833e0601ec6dd4a8226",
            //apiKey: "a4de60319a9495a413a6d4a3b2871f88",
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
        /*this.nativeAudio.loop('uniqueI1').then((succ)=>{
          console.log("succ",succ)
        }, (err)=>{
          console.log("err",err)
        });*/
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
            _this.InitializeControlsForIncomingCall();
            _this.incomingCallId = e.detail.callId;
            _this.AnswerCall(_this.incomingCallId);
        });
        apiRTC.addEventListener("hangup", function (e) {
            if (e.detail.lastEstablishedCall === true) {
                _this.InitializeControlsForHangup();
            }
            _this.status = _this.status + "<br/> The call has been hunged up due to the following reasons <br/> " + e.detail.reason;
            _this.RemoveMediaElements(e.detail.callId);
            _this.CallDoneCleanup();
        });
        // TODO: Add logging to database for coze's that happened (i.e. between whom and when, duration, etc)
        apiRTC.addEventListener("remoteStreamAdded", function (e) {
            _this.callTimeLeft = _this.callMaxDuration;
            _this.StartCallTimer();
            _this.connected = true;
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
            _this.webRTCClient.setVideoBandwidth(500);
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
    CozePage.prototype.CallDoneCleanup = function () {
        this.connected = false;
        this.partnerCallId = null;
        this.partnerUserId = null;
        this.callTimeLeft = 0;
        this.startCoze = false;
        this.readyForCoze = false;
        this.gotNextCozeTime = false;
        this.partnerIsFriend = false;
        this.GetNextCozeTime();
    };
    CozePage.prototype.AnswerCall = function (incomingCallId) {
        console.log("AnswerCall");
        this.webRTCClient.acceptCall(incomingCallId);
        //this.nativeAudio.stop('uniqueI1').then(()=>{},()=>{});
        this.UpdateControlsOnAnswer();
    };
    CozePage.prototype.RejectCall = function (incomingCallId) {
        this.webRTCClient.refuseCall(incomingCallId);
        this.UpdateControlsOnReject();
        this.RemoveMediaElements(incomingCallId);
        this.CallDoneCleanup();
    };
    CozePage.prototype.StartCozeTimer = function () {
        var _this = this;
        if (this.cozeTimer) {
            clearTimeout(this.cozeTimer);
        }
        this.cozeTimer = setTimeout(function (x) {
            _this.timeToCoze -= 1;
            _this.timeToCozeStr = _this.SecondstoStr(_this.timeToCoze);
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
        if (this.callTimer) {
            clearTimeout(this.callTimer);
        }
        this.callTimer = setTimeout(function (x) {
            if (_this.callTimeLeft <= 0) { }
            _this.callTimeLeft -= 1;
            if (_this.callTimeLeft > 0) {
                _this.StartCallTimer();
            }
            else {
                _this.HangUp();
            }
        }, 1000);
    };
    //coze states
    //waiting
    //matching
    //matched
    CozePage.prototype.GetNextCozeTime = function () {
        var url = this.cozeHost + '/get_next_coze_time';
        var $this = this;
        var getNextCozeTimeIntervalID = setInterval(function () {
            console.log("Trying to get next Coze time...");
            $this.http.get(url, {}, {}).then(function (data) {
                var cozeState = JSON.parse(data.data)["coze_state"];
                if (cozeState == "waiting") {
                    clearInterval(getNextCozeTimeIntervalID);
                    var nextCozeTime = JSON.parse(data.data)["next_coze_time"];
                    var timeNow = +new Date();
                    $this.timeToCoze = Math.floor((+new Date(nextCozeTime) - timeNow) / 1000);
                    $this.StartCozeTimer();
                    console.log(nextCozeTime);
                    console.log(new Date(nextCozeTime));
                    console.log($this.timeToCoze);
                    $this.gotNextCozeTime = true;
                }
                else {
                    //missed the COze
                }
            });
        }, 3000);
    };
    CozePage.prototype.ReadyForCoze = function () {
        //var url = this.cozeHost + '/ready_for_coze?user_id=' + encodeURI(this.myUserId);
        var url = this.cozeHost + '/ready_for_coze';
        this.http.get(url, { "user_id": this.myUserId, "webrtc_id": this.myCallId }, {}).then(function (data) {
            console.log("Signaled 'Ready for Coze'");
        });
    };
    CozePage.prototype.AddToFriends = function () {
        this.firebaseProvider.addFriend(this.myUserId, this.partnerUserId);
        this.partnerIsFriend = true;
    };
    CozePage.prototype.GetMatch = function () {
        this.debugmsg = "Entered GetMatch()";
        var attempt = 0;
        //var url = this.cozeHost + '/get_match?user_id=' + encodeURI(this.myUserId);
        var url = this.cozeHost + '/get_match';
        var $this = this;
        var getMatchIntervalID = setInterval(function () {
            console.log("Attempt " + (attempt + 1) + " at GetMatch()");
            $this.http.get(url, { "user_id": $this.myUserId }, {}).then(function (data) {
                $this.debugmsg += data.data;
                var result = JSON.parse(data.data);
                $this.debugmsg += "\n" + ("partner_user_id" in result);
                $this.debugmsg += "\n" + result["notin"];
                if ("partner_user_id" in result && "partner_webrtc_id" in result) {
                    console.log("Found a match!");
                    $this.debugmsg += "\nFound a match!";
                    clearInterval(getMatchIntervalID);
                    $this.partnerUserId = result["partner_user_id"];
                    $this.partnerCallId = parseInt(result["partner_webrtc_id"]);
                    console.log($this.partnerUserId);
                    console.log($this.partnerCallId);
                    $this.debugmsg += "\n" + result["is_caller"];
                    if (result["is_caller"] == 1) {
                        $this.debugmsg += "\nMaking the call!";
                        // Only one person makes the call
                        $this.MakeCall($this.partnerCallId);
                    }
                }
                else {
                    console.log("Didn't find a match - trying again");
                    $this.debugmsg += "\nDidn't find a match yet...";
                    attempt += 1;
                    if (attempt >= 3) {
                        console.log("Tried " + attempt + " times, quitting");
                        clearInterval(getMatchIntervalID);
                    }
                    console.log("End of GetMatch attempt");
                }
            });
        }, 3000);
    };
    CozePage.prototype.SecondstoStr = function (_seconds) {
        var hours = Math.floor(_seconds / 3600).toString();
        var minutes = Math.floor((_seconds % 3600) / 60).toString();
        var seconds = Math.floor(_seconds % 60).toString();
        if (hours.length < 2) {
            hours = "0" + hours;
        }
        ;
        if (minutes.length < 2) {
            minutes = "0" + minutes;
        }
        ;
        if (seconds.length < 2) {
            seconds = "0" + seconds;
        }
        ;
        var str = hours + ":" + minutes + ":" + seconds;
        return str;
    };
    CozePage.prototype.GetPermissions = function () {
        /*this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
          result => console.log('Has permission?',result.hasPermission),
          err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
        );
    
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO).then(
          result => console.log('Has permission?',result.hasPermission),
          err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO)
        );*/
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.RECORD_AUDIO]);
    };
    CozePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coze',template:/*ion-inline-start:"/Users/evan/workspace/StartupStudio/CozeApp/src/pages/coze/coze.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Coze\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list *ngIf="!this.startCoze && this.gotNextCozeTime">\n      <ion-item>\n        <h1 class="coze-timer-header">\n          Countdown to Next Coze:\n        </h1>\n      </ion-item>\n      <ion-item>\n        <h1 class="coze-timer">\n          {{this.timeToCozeStr}}\n        </h1>\n      </ion-item>\n    </ion-list>\n    <ion-list *ngIf="this.startCoze && !showRemoteVideo">\n        <ion-item>\n          <h3>Connecting to your partner...</h3>\n        </ion-item>\n        <ion-item *ngIf="this.showControls">\n            <ion-label floating>Call ID:</ion-label>\n            <ion-input type="text" [(ngModel)]="calleeId"></ion-input>\n        </ion-item>\n    </ion-list>\n    <ion-grid *ngIf="this.connected">\n        <ion-row *ngIf="this.showControls">\n          <h3>\n            My Call ID: {{myCallId}}\n          </h3>\n        </ion-row>\n        <ion-row *ngIf="this.showControls">\n            <ion-col>\n                <button *ngIf="showCall" ion-button block (click)=\'MakeCall(calleeId)\'>Call</button>\n            </ion-col>\n            <ion-col>\n                <button *ngIf="showHangup" ion-button block color="danger" (click)=\'HangUp()\'>Hangup</button>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="this.showControls">\n            <ion-col>\n                <button *ngIf="showAnswer" ion-button block color="secondary" (click)=\'AnswerCall(incomingCallId)\'>Answer</button>\n            </ion-col>\n            <ion-col>\n                <button *ngIf="showReject" ion-button block color="danger">Reject</button>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="this.showControls">\n            <ion-col>\n                <p *ngIf="showStatus" [innerHtml]="status"></p>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="showRemoteVideo">\n            <ion-col>\n                <div id="remote"></div>\n            </ion-col>\n            <ion-col *ngIf="!this.partnerIsFriend">\n                <button ion-button block (click)=\'AddToFriends()\'>I feel a connection!</button>\n            </ion-col>\n            <ion-col *ngIf="this.partnerIsFriend">\n                <button ion-button block color="energized">You are friends!</button>\n            </ion-col>\n            <ion-col>\n                <button ion-button block color="danger" (click)=\'HangUp()\'>Hangup</button>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="showMyVideo">\n            <ion-col>\n                <div id="mini"></div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/evan/workspace/StartupStudio/CozeApp/src/pages/coze/coze.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_7__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], CozePage);
    return CozePage;
}());

//# sourceMappingURL=coze.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(71);
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
    function FriendsPage(navCtrl, firebaseProvider, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.firebaseProvider = firebaseProvider;
        this.afAuth = afAuth;
        this.userFriends = null;
        this.myUserId = this.afAuth.auth.currentUser.uid;
        this.firebaseProvider.getUserData(this.myUserId).valueChanges()
            .subscribe(function (ref) {
            if ("friends" in ref) {
                _this.userFriends = ref.friends;
            }
        });
    }
    FriendsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-friends',template:/*ion-inline-start:"/Users/evan/workspace/StartupStudio/CozeApp/src/pages/friends/friends.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Friends\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <!--ion-item>\n      <ion-icon name="md-person" item-start></ion-icon>\n      Allison A. from NYU\n    </ion-item-->\n    <ion-item *ngIf="!this.userFriends">\n      No Coze Friends Yet!\n    </ion-item>\n    <ion-item *ngFor="let friend of this.userFriends">\n      {{friend}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/evan/workspace/StartupStudio/CozeApp/src/pages/friends/friends.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], FriendsPage);
    return FriendsPage;
}());

//# sourceMappingURL=friends.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
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
            selector: 'page-settings',template:/*ion-inline-start:"/Users/evan/workspace/StartupStudio/CozeApp/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Profile</h2>\n  <h2>Report a Bug</h2>\n  <h2>Log Out</h2>\n</ion-content>\n'/*ion-inline-end:"/Users/evan/workspace/StartupStudio/CozeApp/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up__ = __webpack_require__(288);
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
        this.showLogin = false;
        this.user = {};
        console.log("On Login Page");
        /*this.afAuth.authState.subscribe(res => {
          if (res && res.uid) {
            this.navCtrl.setRoot(TabsPage);
          } else {
            this.showLogin = true;
          }
        });*/
    }
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Attempting login");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                        }
                        else {
                            this.loginError = "Incorrect e-mail or password";
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // New separate sign-up page - direct to there
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up__["a" /* SignUpPage */]);
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/evan/workspace/StartupStudio/CozeApp/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Email Address</ion-label>\n    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n  </ion-item>\n\n  <button ion-button (click)="login(user)">Login</button>\n  <button ion-button color="light" (click)="register(user)">Register</button>\n\n  <br><br>\n  {{loginError}}\n\n</ion-content>\n'/*ion-inline-end:"/Users/evan/workspace/StartupStudio/CozeApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__ = __webpack_require__(71);
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
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPage = (function () {
    function SignUpPage(navCtrl, navParams, afAuth, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.firebaseProvider = firebaseProvider;
        this.user = {};
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, userId, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!(!user.firstName || !user.firstName || !user.password || !user.email)) return [3 /*break*/, 1];
                        this.error = "Please fill in all required fields";
                        return [3 /*break*/, 4];
                    case 1:
                        if (!!user.email.endsWith(".edu")) return [3 /*break*/, 2];
                        this.error = "You must register with a .edu e-mail address";
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)];
                    case 3:
                        result = _a.sent();
                        if (result) {
                            userId = this.afAuth.auth.currentUser.uid;
                            this.firebaseProvider.addUser(userId, user.email, user.firstName, user.lastName, user.major);
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                        }
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"/Users/evan/workspace/StartupStudio/CozeApp/src/pages/sign-up/sign-up.html"*/'<!--\n  Generated template for the SignUpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label floating>First Name</ion-label>\n    <ion-input type="text" [(ngModel)]="user.firstName"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Last Name</ion-label>\n    <ion-input type="text" [(ngModel)]="user.lastName"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>University Email Address</ion-label>\n    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Major (Optional)</ion-label>\n    <ion-input type="text" [(ngModel)]="user.major"></ion-input>\n  </ion-item>\n\n  <ion-content padding>\n  <button ion-button color="secondary" (click)=\'register(user)\'>I\'m Ready to Coze!</button>\n  <br><br>\n  {{error}}\n\n</ion-content>\n'/*ion-inline-end:"/Users/evan/workspace/StartupStudio/CozeApp/src/pages/sign-up/sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(309);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_coze_coze__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_friends_friends__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_audio__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_http__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_android_permissions__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__firebase_credentials__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_firebase_firebase__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//import { SignUpPage } from '../pages/sign-up/sign-up'
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
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__["a" /* SignUpPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_19__firebase_credentials__["a" /* FIREBASE_CREDENTIALS */]),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_coze_coze__["a" /* CozePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_friends_friends__["a" /* FriendsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__["a" /* SignUpPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_audio__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_firebase_firebase__["a" /* FirebaseProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { SignUpPage } from '../pages/sign-up/sign-up'

// This is temporary so we can port over the WebRTC funcitonality to our Coze page
// import { HomePage } from '../pages/home/home';
var MyApp = (function () {
    // Uncomment this to make the home page the test WebRTC page
    //rootPage:any = HomePage;
    function MyApp(platform, statusBar, splashScreen, afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        console.log("App.Component Constructor");
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.afAuth.authState.subscribe(function (res) {
                if (res && res.uid) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                }
            });
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/evan/workspace/StartupStudio/CozeApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/evan/workspace/StartupStudio/CozeApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIG; });
var CONFIG = {
    cozeHost: "http://middleware.ddns.net:5000",
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(127);
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

/***/ 448:
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

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coze_coze__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__friends_friends__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(286);
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

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseProvider = (function () {
    function FirebaseProvider(afd) {
        this.afd = afd;
        console.log('Hello FirebaseProvider Provider');
    }
    FirebaseProvider.prototype.getUserData = function (userId) {
        var itemRef;
        itemRef = this.afd.object("users/" + userId);
        return itemRef;
        //return this.afd.object('users/' + userId);
    };
    FirebaseProvider.prototype.addUser = function (userId, email, firstName, lastName, major) {
        var newUser = { "email": email, "firstName": firstName,
            "lastName": lastName, "major": major, "friends": {} };
        this.afd.database.ref("users/" + userId)
            .set(newUser);
    };
    // Using getUserData for now - this is a placeholder for later implementation
    FirebaseProvider.prototype.getUserFriends = function (userId) {
        var itemRef;
        itemRef = this.afd.object("users/" + userId + "/friends");
        return itemRef;
    };
    FirebaseProvider.prototype.addFriend = function (userId, friendId) {
        // TODO: Don't add friend until partner agrees!
        var newFriend = { friendId: { "dateAdded": new Date() } };
        this.afd.database.ref("users/" + userId + "/friends")
            .push(newFriend);
    };
    FirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseProvider);
    return FirebaseProvider;
}());

//# sourceMappingURL=firebase.js.map

/***/ })

},[289]);
//# sourceMappingURL=main.js.map