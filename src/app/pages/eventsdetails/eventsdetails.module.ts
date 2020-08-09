import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsdetailsPageRoutingModule } from './eventsdetails-routing.module';

import { EventsdetailsPage } from './eventsdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsdetailsPageRoutingModule
  ],
  declarations: [EventsdetailsPage]
})
export class EventsdetailsPageModule {}
