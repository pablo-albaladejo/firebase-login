import { Injectable } from '@angular/core';

import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthProvider{
  constructor(public af:AngularFire) {}
  
  getCurrentUid(){
    return this.af.auth.getAuth().auth.uid;
  }

  signin(credentails) {   
    return this.af.auth.login(credentails);
  }
  
  createAccount(credentails) {
    return this.af.auth.createUser(credentails);
  };
  
  logout() {
     this.af.auth.logout();
  }

}