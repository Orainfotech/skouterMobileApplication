import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profilemediaactivity',
  templateUrl: './profilemediaactivity.page.html',
  styleUrls: ['./profilemediaactivity.page.scss'],
})
export class ProfilemediaactivityPage implements OnInit {

  constructor(public navctrl:NavController) { }

  ngOnInit() {
  }
  gotomedia(){
    this.navctrl.navigateRoot('profilemedia');
  }
  gotoactivity(){
    this.navctrl.navigateRoot('profilemedaactivity');
  }
  gotoinsights(){
    this.navctrl.navigateRoot('profileinsight');
  }
  gotosetting(){
    this.navctrl.navigateRoot('setting'); 
  }
}
