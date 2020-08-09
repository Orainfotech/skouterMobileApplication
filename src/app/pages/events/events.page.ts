import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  constructor(public navctrl:NavController) { }

  ngOnInit() {
  }
  gotonext(){
    this.navctrl.navigateRoot('eventsdetails')
  }
  gotoback(){
    this.navctrl.navigateRoot('home')
  }
}
