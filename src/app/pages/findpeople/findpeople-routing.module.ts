import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindpeoplePage } from './findpeople.page';

const routes: Routes = [
  {
    path: '',
    component: FindpeoplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindpeoplePageRoutingModule {}
