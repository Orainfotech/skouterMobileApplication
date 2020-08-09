import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navctrl:NavController) {}
  findpeople(){
   this.navctrl.navigateRoot('findpeople');
  }
  gotoevent(){
    this.navctrl.navigateRoot('events');
  }
  gotoprofile(){
    this.navctrl.navigateRoot('profilemedia');
  }
  gotosetting(){
    this.navctrl.navigateRoot('setting'); 
  }
  search(){
    this.navctrl.navigateRoot('studios'); 
  }
  upload(){
    this.navctrl.navigateRoot('uploads'); 
  }
}
