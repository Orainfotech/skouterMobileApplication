import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile1',
  templateUrl: './profile1.page.html',
  styleUrls: ['./profile1.page.scss'],
})
export class Profile1Page implements OnInit {
  universityList: any = [];
  searchText: any = '';
  universityListOld:any=[];
  constructor(public navctrl:NavController) { }

  ngOnInit() {
  }
  gotosetting(){
    this.navctrl.navigateRoot('setting'); 
  }
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

}
