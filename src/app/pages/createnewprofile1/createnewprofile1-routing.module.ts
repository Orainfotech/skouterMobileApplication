import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Createnewprofile1Page } from './createnewprofile1.page';

const routes: Routes = [
  {
    path: '',
    component: Createnewprofile1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Createnewprofile1PageRoutingModule {}
