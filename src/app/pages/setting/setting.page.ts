import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(public navctrl:NavController) { }
  SettingType:any=[
  {name:'Notifications',id:true},
  {name:'Rapper',id:false},
  {name:'Singer',id:false}, 
  {name:'Combined',id:false},
  {name:'New Post',id:false},
  ];

  ngOnInit() {
  }

  gotoback(){
  this.navctrl.navigateBack('');
  }
}
