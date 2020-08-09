import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  constructor(public navctrl:NavController) { }

  ngOnInit() {
  }
  forgotpassword(){
   this.navctrl.navigateRoot('signin');
  }
  Signin()
  {
    this.navctrl.navigateRoot('signin');

  }
}
