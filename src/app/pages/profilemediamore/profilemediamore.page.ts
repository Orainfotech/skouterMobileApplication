import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profilemediamore',
  templateUrl: './profilemediamore.page.html',
  styleUrls: ['./profilemediamore.page.scss'],
})
export class ProfilemediamorePage implements OnInit {

  constructor(public navctrl:NavController) { }

  ngOnInit() {
  }
  gotomedia(){
    this.navctrl.navigateRoot('profilemedia');
  }
  gotoactivity(){
    this.navctrl.navigateRoot('profilemediaactivity');
  }
  gotoinsights(){
    this.navctrl.navigateRoot('profileinsight');
  }
  gotosetting(){
    this.navctrl.navigateRoot('setting'); 
  }
}
