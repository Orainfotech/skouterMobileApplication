import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileinsightPage } from './profileinsight.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileinsightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileinsightPageRoutingModule {}
