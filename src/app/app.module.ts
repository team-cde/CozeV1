import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CozePage } from '../pages/coze/coze';
import { FriendsPage } from '../pages/friends/friends';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from "../pages/sign-up/sign-up";

//import { SignUpPage } from '../pages/sign-up/sign-up'

// Temporary until we get video chat working
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NativeAudio } from '@ionic-native/native-audio';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { HTTP } from '@ionic-native/http'

import { AndroidPermissions } from '@ionic-native/android-permissions';

import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { FirebaseProvider } from '../providers/firebase/firebase';

@NgModule({
  declarations: [
    MyApp,
    CozePage,
    FriendsPage,
    SettingsPage,
    TabsPage,
    LoginPage,
    HomePage,
    SignUpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CozePage,
    FriendsPage,
    SettingsPage,
    TabsPage,
    LoginPage,
    HomePage,
    SignUpPage
  ],
  providers: [
    NativeAudio,
    StatusBar,
    SplashScreen,
    HTTP,
    AndroidPermissions,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
  ]
})
export class AppModule {}
