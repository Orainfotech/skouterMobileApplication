import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-createnewprofile1',
  templateUrl: './createnewprofile1.page.html',
  styleUrls: ['./createnewprofile1.page.scss'],
})
export class Createnewprofile1Page implements OnInit {
  ProfileType:any=[{name:'DJ',id:true},
    {name:'Producer',id:false},
    {name:'Rapper',id:false},
    {name:'Singer',id:false}, 
     {name:'Agent',id:false},
     {name:'Distributor',id:false},
     {name:'Manager',id:false},
     {name:'Publisher',id:true}
    ];
  constructor(public navctrl:NavController) { }

  ngOnInit() {
  }
 Next(){
this.navctrl.navigateRoot('home');
 }
 gotosetting(){
  this.navctrl.navigateRoot('setting'); 
}
}
