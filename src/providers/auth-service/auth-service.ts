import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { User } from './users'
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  user : Observable<firebase.User>;

  constructor(public http: HttpClient, private angularFireAuth: AngularFireAuth) {
    console.log('Hello AuthServiceProvider Provider');
  }

  createUser(user: User) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  singnIn(user : User){
    return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password)
  }
  
}
