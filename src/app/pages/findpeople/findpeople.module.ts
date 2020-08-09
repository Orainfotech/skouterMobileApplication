import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindpeoplePageRoutingModule } from './findpeople-routing.module';

import { FindpeoplePage } from './findpeople.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindpeoplePageRoutingModule
  ],
  declarations: [FindpeoplePage]
})
export class FindpeoplePageModule {}
