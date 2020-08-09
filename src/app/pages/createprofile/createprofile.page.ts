import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.page.html',
  styleUrls: ['./createprofile.page.scss'],
})
export class CreateprofilePage implements OnInit {

  constructor(public navctrl:NavController) { }

  ngOnInit() {
  }
  Next(){
    this.navctrl.navigateRoot('createnewprofile1');
  }
  gotosetting(){
    this.navctrl.navigateRoot('setting'); 
  }
}
