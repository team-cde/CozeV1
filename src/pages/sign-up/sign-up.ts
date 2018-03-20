import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from "../tabs/tabs"
import { FirebaseProvider } from './../../providers/firebase/firebase';


/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  error: string;

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afAuth: AngularFireAuth, public firebaseProvider: FirebaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  async register(user: User) {
    try {
      if (!user.firstName || !user.firstName || !user.password || !user.email) {
        this.error = "Please fill in all required fields"
      } else if (!user.email.endsWith(".edu")) {
        this.error = "You must register with a .edu e-mail address";
      } else {
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(
          user.email,
          user.password,
        );
        if (result) {
          var userId = this.afAuth.auth.currentUser.uid;
          this.firebaseProvider.addUser(userId, user.email, user.firstName,
            user.lastName, user.major);
          this.navCtrl.setRoot(TabsPage);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

}
