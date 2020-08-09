import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-studios',
  templateUrl: './studios.page.html',
  styleUrls: ['./studios.page.scss'],
})
export class StudiosPage implements OnInit {

  studiolist:any=[
  {name:'Penhouse StudioLondon, Se 18',id:true},
  {name:'Hot Money StudioLondon, Se 18',id:false},
  {name:'Hilltop Recording Studios London SE7',id:false}, 
  {name:'Wox Recording Studios London Se7',id:false},
  ];

  constructor(public navctrl:NavController) { }

  ngOnInit() {
  }
  gotohome(){
    this.navctrl.navigateRoot('home');
  }
  gotopeople(){
    this.navctrl.navigateRoot('findpeople');
  }
}
