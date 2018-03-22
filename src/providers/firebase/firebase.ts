import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(private afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  getUserData(userId) {
    var itemRef : AngularFireObject<any>;
    itemRef = this.afd.object("users/" + userId);
    return itemRef;
    //return this.afd.object('users/' + userId);
  }

  addUser(userId, email, firstName, lastName, major) {
    var newUser = {"email":email, "firstName":firstName,
      "lastName":lastName, "major":major, "friends":{}};

    this.afd.database.ref("users/" + userId)
      .set(newUser);
  }

  // Using getUserData for now - this is a placeholder for later implementation
  getUserFriends(userId) {
    var itemRef : AngularFireObject<any>;
    itemRef = this.afd.object("users/" + userId + "/friends");
    return itemRef;
  }

  addFriend(userId, friendId) {
    // TODO: Don't add friend until partner agrees!
    var newFriend = {friendId:{"dateAdded":new Date()}}

    this.afd.database.ref("users/" + userId + "/friends")
      .push(newFriend);
  }

}
