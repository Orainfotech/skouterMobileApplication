import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(public navctrl:NavController) { }

  ngOnInit() {
  }
  signin(){
    this.navctrl.navigateRoot('home');
  }
  Signup(){
    this.navctrl.navigateRoot('signup');
  }
  Forgotpassword(){
    this.navctrl.navigateRoot('forgotpassword');
  }
}
