import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsdetailsPage } from './eventsdetails.page';

const routes: Routes = [
  {
    path: '',
    component: EventsdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsdetailsPageRoutingModule {}
