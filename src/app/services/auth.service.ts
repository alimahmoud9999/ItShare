import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ : Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth , private route:ActivatedRoute) {
    // afAuth.authState.subscribe(user => this.user = user);
    this.user$ = afAuth.authState;
  }

  logingoogle(){
    // let returUrl = this.route.snapshot.queryParamMap.get('returUrl') || '/';
    // localStorage.setItem('returUrl', returUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout(){
    this.afAuth.auth.signOut();
  }

}
