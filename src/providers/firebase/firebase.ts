import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

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
    return this.afd.list('users/' + userId);
  }

  addUser(userId, email, firstName, lastName, major) {
    var newUser = {"email":email, "firstName":firstName,
      "lastName":lastName, "major":major, "friends":{}};

    this.afd.database.ref('users/' + userId)
      .set(newUser);
  }

}
