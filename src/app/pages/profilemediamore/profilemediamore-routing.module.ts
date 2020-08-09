import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilemediamorePage } from './profilemediamore.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilemediamorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilemediamorePageRoutingModule {}
