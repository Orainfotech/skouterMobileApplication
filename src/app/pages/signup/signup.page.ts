import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(public navctrl:NavController) { }

  ngOnInit() {
  }
  SignIn(){
    this.navctrl.navigateRoot('signin');
  }
  signup(){
    this.navctrl.navigateRoot('createprofile');
  }
}
