import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-eventsdetails',
  templateUrl: './eventsdetails.page.html',
  styleUrls: ['./eventsdetails.page.scss'],
})
export class EventsdetailsPage implements OnInit {

  constructor(public navctrl:NavController) { }

  ngOnInit() {
  }
  goback(){
    this.navctrl.navigateRoot('events');
  }
}
