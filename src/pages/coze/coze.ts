import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { HTTP } from '@ionic-native/http';
import { AndroidPermissions } from '@ionic-native/android-permissions';


declare var apiRTC: any

@Component({
  selector: 'page-coze',
  templateUrl: 'coze.html'
})
export class CozePage {

  // Vars for timers
  cozeTimer: number;
  // TODO: This needs to be set to the countdown until the next Coze
  timeToCoze: any=5;
  gotNextCozeTime: boolean = false;
  readyForCoze: boolean = false;
  startCoze: boolean = false;
  callTimer: number;
  callTimeLeft: any=0;
  callDuration: any=30;
  timeToCozeStr: string = "-:-:-";

//ifconfig | grep inet | grep broadcast
  cozeHost: string = "http://10.148.128.133:5000"

  // Vars for RTC
  showCall: boolean;
  showHangup: boolean;
  showAnswer: boolean;
  showReject: boolean;
  showStatus: boolean;
  showControls: boolean = false;
  showRemoteVideo: boolean = true;
  showMyVideo: boolean = true;
  screenWidth: number;
  screenHeight: number;
  debugmsg: string;
  partnerId: number = -1;

  session;
  webRTCClient;
  incomingCallId = 0;
  myCallId;
  status;
  calleeId;

  constructor(public navCtrl: NavController, private nativeAudio: NativeAudio,
      private platform: Platform, private http: HTTP,
      private androidPermissions: AndroidPermissions
    ) {

    platform.ready().then((readySource) => {

      this.GetPermissions();

      this.InitializeApiRTC();

      this.nativeAudio.preloadComplex('uniqueI1', 'assets/tone.mp3', 1, 1, 0).then((succ)=>{
        console.log("suu",succ)
      }, (err)=>{
        console.log("err",err)
      });

      this.screenWidth = platform.width();
      this.screenHeight = platform.height();

      this.GetNextCozeTime();
      // console.log(nextCozeTime)

      //this.StartCozeTimer();
    });
  }

  InitializeApiRTC() {
    //apiRTC initialization
    apiRTC.init({
      apiKey: "819abef1fde1c833e0601ec6dd4a8226",
      //apiKey: "a4de60319a9495a413a6d4a3b2871f88",
      // apiCCId : "2",
      onReady: (e) => {
        this.sessionReadyHandler(e);
      }
    });
  }

  sessionReadyHandler(e) {
    this.myCallId = apiRTC.session.apiCCId;
    //this.InitializeControls();
    this.AddEventListeners();
    this.InitializeWebRTCClient();
  }

  InitializeWebRTCClient() {
    this.webRTCClient = apiRTC.session.createWebRTCClient({
      status: "status" //Optionnal
    });
    /*    this.webRTCClient.setAllowMultipleCalls(true);
        this.webRTCClient.setVideoBandwidth(300);
        this.webRTCClient.setUserAcceptOnIncomingCall(true);*/
  }

  InitializeControls() {
    this.showCall = true;
    this.showAnswer = false;
    this.showHangup = false;
    this.showReject = false;
  }

  InitializeControlsForIncomingCall() {
    this.showCall = false;
    this.showAnswer = true;
    this.showReject = true;
    this.showHangup = true;
    this.nativeAudio.loop('uniqueI1').then((succ)=>{
      console.log("succ",succ)
    }, (err)=>{
      console.log("err",err)
    });

  }

  InitializeControlsForHangup() {
    this.showCall = true;
    this.showAnswer = false;
    this.showReject = false;
    this.showHangup = false;
  }

  UpdateControlsOnAnswer() {
    this.showAnswer = false;
    this.showReject = false;
    this.showHangup = true;
    this.showCall = false;
  }

  UpdateControlsOnReject() {
    this.showAnswer = false;
    this.showReject = false;
    this.showHangup = false;
    this.showCall = true;
  }

  RemoveMediaElements(callId) {
    this.webRTCClient.removeElementFromDiv('mini', 'miniElt-' + callId);
    this.webRTCClient.removeElementFromDiv('remote', 'remoteElt-' + callId);
  }

  AddStreamInDiv(stream, callType, divId, mediaEltId, style, muted) {
    let mediaElt = null;
    let divElement = null;

    if (callType === 'audio') {
      mediaElt = document.createElement("audio");
    } else {
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
  }

  AddEventListeners() {
    apiRTC.addEventListener("userMediaSuccess", (e) => {
      this.showStatus = true;
      this.showMyVideo = true;

      this.webRTCClient.addStreamInDiv(e.detail.stream, e.detail.callType, "mini", 'miniElt-' + e.detail.callId, {
        width: "128px",
        height: "96px"
      }, true);

    });

    apiRTC.addEventListener("userMediaError", (e) => {
      this.InitializeControlsForHangup();

      this.status = this.status + "<br/> The following error has occurred <br/> " + e;
    });

    apiRTC.addEventListener("incomingCall", (e) => {
      console.log("incomingCall")
      this.InitializeControlsForIncomingCall();
      this.incomingCallId = e.detail.callId;
      this.AnswerCall(this.incomingCallId);
    });

    apiRTC.addEventListener("hangup", (e) => {
      if (e.detail.lastEstablishedCall === true) {
        this.InitializeControlsForHangup();
      }
      this.status = this.status + "<br/> The call has been hunged up due to the following reasons <br/> " + e.detail.reason;
      this.RemoveMediaElements(e.detail.callId);
    });

    apiRTC.addEventListener("remoteStreamAdded", (e) => {
      this.callTimeLeft = this.callDuration;
      this.StartCallTimer();
      //var w = Math.min(this.screenWidth, this.screenHeight);
      //console.log(w);
      this.webRTCClient.addStreamInDiv(e.detail.stream, e.detail.callType, "remote", 'remoteElt-' + e.detail.callId, {
        width: "300px",
        height: "225px"
        //width: Math.floor(w*0.5),
        //height: Math.floor(w*0.5)
      }, false);
    });

    apiRTC.addEventListener("webRTCClientCreated", (e) => {
      console.log("webRTC Client Created");
      this.webRTCClient.setAllowMultipleCalls(true);
      this.webRTCClient.setVideoBandwidth(500);
      this.webRTCClient.setUserAcceptOnIncomingCall(true);

      /*      this.InitializeControls();
            this.AddEventListeners();*/

      //this.MakeCall("729278");
    });

  }

  MakeCall(calleeId) {
    console.log("MakeCall");
    var callId = this.webRTCClient.call(calleeId);
    if (callId != null) {
      this.incomingCallId = callId;
      this.showHangup = true;
    }
  }

  HangUp() {
    this.startCoze = false;
    this.readyForCoze = false;
    this.gotNextCozeTime = false;
    this.GetNextCozeTime();
    this.webRTCClient.hangUp(this.incomingCallId);
  }

  AnswerCall(incomingCallId) {
    console.log("AnswerCall");
    this.webRTCClient.acceptCall(incomingCallId);
    this.nativeAudio.stop('uniqueI1').then(()=>{},()=>{});

    this.UpdateControlsOnAnswer();
  }

  RejectCall(incomingCallId) {
    this.webRTCClient.refuseCall(incomingCallId);
    this.UpdateControlsOnReject();
    this.RemoveMediaElements(incomingCallId);
  }

  StartCozeTimer(){
    this.cozeTimer = setTimeout(x =>
      {
        this.timeToCoze -= 1;
        this.timeToCozeStr = this.SecondstoStr(this.timeToCoze);

        if (this.timeToCoze  < 3 && !this.readyForCoze) {
            this.readyForCoze = true;
            this.ReadyForCoze()
        }

        if (this.timeToCoze > 0) {
          this.StartCozeTimer();
        } else {
          this.startCoze = true;
          this.GetMatch();
        }

      }, 1000);
  }

  StartCallTimer(){
    this.callTimer = setTimeout(x =>
    {
      if (this.callTimeLeft <= 0) {}
      this.callTimeLeft -= 1;

      if (this.callTimeLeft > 0) {
        this.StartCallTimer();
      } else {
        this.HangUp();
      }
    }, 1000);
  }

//coze states
//waiting
//matching
//matched

  GetNextCozeTime() {
    var url = this.cozeHost + '/get_next_coze_time';
    var $this = this;
    var getNextCozeTimeIntervalID = setInterval(function () {
      console.log("Trying to get next Coze time...");
      $this.http.get(url, {}, {}).then(data => {
        var cozeState = JSON.parse(data.data)["coze_state"];
        if (cozeState == "waiting") {
          window.clearInterval(getNextCozeTimeIntervalID);
          var nextCozeTime = JSON.parse(data.data)["next_coze_time"];
          var timeNow = +new Date();
          $this.timeToCoze = Math.floor((+new Date(nextCozeTime) - timeNow) / 1000);
          console.log(nextCozeTime);
          console.log(new Date(nextCozeTime));
          console.log($this.timeToCoze);
          $this.gotNextCozeTime = true;
          $this.StartCozeTimer();
        } else {
          //missed the COze
        }
      });
    }, 3000);
  }

  ReadyForCoze() {
    var url = this.cozeHost + '/ready_for_coze?webrtc_id=' + encodeURI(this.myCallId);
    this.http.get(url, {}, {}).then(data => {
      console.log("Signaled 'Ready for Coze'")
    });
  }

  GetMatch() {
    var attempt = 0
    var _partnerId = -1
    var url = this.cozeHost + '/get_match?webrtc_id=' + encodeURI(this.myCallId);
    var $this = this;
    var getMatchIntervalID = setInterval(function () {
      console.log("Attempt " + (attempt+1) + " at GetMatch()");
      $this.http.get(url, {}, {}).then(data => {
        _partnerId = parseInt(JSON.parse(data.data)["partner_id"]);
        console.log(_partnerId);
        if (_partnerId == -1) {
          console.log("Didn't find a match - trying again");
          attempt += 1;
          if (attempt >= 3) {
            console.log("Tried " + attempt + " times, quitting");
            window.clearInterval(getMatchIntervalID);
          }
        } else {
          console.log("Found a match: " + _partnerId);
          //this.partnerId = _partnerId;
          window.clearInterval(getMatchIntervalID);
          $this.MakeCall(_partnerId);
        }
        console.log("End of GetMatch attempt");
      })
    }, 3000);
  }

  SecondstoStr(_seconds) {
    var hours = Math.floor(_seconds/3600).toString();
    var minutes = Math.floor((_seconds % 3600) / 60).toString();
    var seconds = Math.floor(_seconds % 60).toString();
    if (hours.length < 2) { hours = "0" + hours };
    if (minutes.length < 2) { minutes = "0" + minutes };
    if (seconds.length < 2) { seconds = "0" + seconds };
    var str = hours + ":" + minutes + ":" + seconds;
    return str
  }

  GetPermissions() {
    /*this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      result => console.log('Has permission?',result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
    );

    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO).then(
      result => console.log('Has permission?',result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO)
    );*/

    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.RECORD_AUDIO]);
  }
}
