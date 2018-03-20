import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from "../tabs/tabs";
import { SignUpPage } from "../sign-up/sign-up";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  showLogin: boolean = false;
  loginError: string;
  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
      /*this.afAuth.authState.subscribe(res => {
        if (res && res.uid) {
          this.navCtrl.setRoot(TabsPage);
        } else {
          this.showLogin = true;
        }
      });*/
  }

  async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.setRoot(TabsPage);
      }
    }
    catch (e) {
      console.error(e);
    }
  }

  async register(user: User) {
    // New separate sign-up page - direct to there
    this.navCtrl.push(SignUpPage);
    /*try {
      if (!user.email.endsWith(".edu")) {
        this.loginError = "You must register with a .edu e-mail address";
      } else {
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(
          user.email,
          user.password
        );
        if (result) {
          this.navCtrl.setRoot(TabsPage);
        }
      }
    } catch (e) {
      console.error(e);
    }*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
