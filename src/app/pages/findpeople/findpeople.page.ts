import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-findpeople',
  templateUrl: './findpeople.page.html',
  styleUrls: ['./findpeople.page.scss'],
})
export class FindpeoplePage implements OnInit {
  universityList: any = [];
  searchText: any = '';
  universityListOld:any=[];
 
  constructor(public navctrl:NavController) { }
  listData:any=[
    {'Icon':'assets/images/d.jpg', 'Name':'Rianai'},
    {'Icon':'assets/images/d.jpg', 'Name':'Rianai'},
    {'Icon':'assets/images/d.jpg', 'Name':'Rianai'},
    {'Icon':'assets/images/d.jpg', 'Name':'Rianai'},
  ]
  
  ngOnInit() {
  }
  gotoDJ(){}
  gotoProducer(){}
  gotoRapper(){}
  gotosinger(){}
  gotoAgents(){}
  gotodistributers(){}
  gotoManager(){}
  gotopublisher(){}

search() {
  setTimeout(() => {
    this.universityList = this.universityListOld;
    this.universityList = this.universityList.filter((data) => {
      if (data.UniversityName.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1) {
        return data;
      }
    });
  }, 100);
}

clearFilter() {
  this.universityList = this.universityListOld;
  this.searchText = '';
}
gotohome(){
  this.navctrl.navigateRoot('home');
}
}