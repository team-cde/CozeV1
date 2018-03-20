import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseProvider } from './../../providers/firebase/firebase';

@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html'
})
export class FriendsPage {

  constructor(public navCtrl: NavController,
    public firebaseProvider: FirebaseProvider,
    private afAuth: AngularFireAuth) {
      var userId = this.afAuth.auth.currentUser.uid;
      var friendsList = this.firebaseProvider.getUserData(userId);
  }

}
