import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profilemedia',
  templateUrl: './profilemedia.page.html',
  styleUrls: ['./profilemedia.page.scss'],
})
export class ProfilemediaPage implements OnInit {

  constructor(public navctrl:NavController) { }

  ngOnInit() {
  }

  Next(){ 
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
  gotomediamore(){
    this.navctrl.navigateRoot('profilemediamore');
  }
  gotosetting(){
    this.navctrl.navigateRoot('setting'); 
  }
}
