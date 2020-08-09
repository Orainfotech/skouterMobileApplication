import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilemediaPage } from './profilemedia.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilemediaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilemediaPageRoutingModule {}
