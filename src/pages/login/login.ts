import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Validators, FormGroup, FormControl } from '@angular/forms';

import { AuthProvider } from '../../providers/auth-provider';

import { HomePage } from '../home/home'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loginForm:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public auth:AuthProvider
              ) 
  {
    
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
        email: new FormControl("",[Validators.required]),
        password: new FormControl("",Validators.required)
    });
  }

  signin() {
    this.auth.signin(this.loginForm.value)
    .then((data) => {
        this.navCtrl.push(HomePage);
    }, (error) => {
      console.log("Error: ",error.message);
    });
  };

  createAccount() {
    let credentials = this.loginForm.value;
    this.auth.createAccount(credentials)
    .then((data) => {
      console.log("uid: ",data.uid);
    }, (error) => {
      console.log("Error: ",error.message);
    });
  };
}
