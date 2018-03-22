import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
//import { SignUpPage } from '../pages/sign-up/sign-up'

import { AngularFireAuth } from 'angularfire2/auth';


// This is temporary so we can port over the WebRTC funcitonality to our Coze page
// import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  // Uncomment this to make the home page the test WebRTC page
  //rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar,
    splashScreen: SplashScreen, private afAuth: AngularFireAuth,) {
    console.log("App.Component Constructor")
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.afAuth.authState.subscribe(res => {
        if (res && res.uid) {
          this.rootPage = TabsPage;
        } else {
          this.rootPage = LoginPage;
        }
      });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
