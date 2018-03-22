import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireList, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseProvider } from './../../providers/firebase/firebase';

@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html'
})
export class FriendsPage {
  userFriends: any = null;
  myUserId: any;

  constructor(public navCtrl: NavController,
    public firebaseProvider: FirebaseProvider,
    private afAuth: AngularFireAuth) {
      this.myUserId = this.afAuth.auth.currentUser.uid;

      this.firebaseProvider.getUserData(this.myUserId).valueChanges()
        .subscribe(ref => {
          if ("friends" in ref) {
            this.userFriends = ref.friends;
          }
        }
      );
  }

}
