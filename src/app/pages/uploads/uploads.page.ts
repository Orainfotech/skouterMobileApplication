import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.page.html',
  styleUrls: ['./uploads.page.scss'],
})
export class UploadsPage implements OnInit {

  constructor(public navctrl:NavController) { }

  ngOnInit() {
  }
  search(){
    this.navctrl.navigateRoot('studios'); 
  }
  upload(){
    this.navctrl.navigateRoot('uploads'); 
  }
  findpeople(){
    this.navctrl.navigateRoot('findpeople');
   }
   home(){
    this.navctrl.navigateRoot('home');
   }
}
