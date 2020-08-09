import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Createnewprofile1PageRoutingModule } from './createnewprofile1-routing.module';

import { Createnewprofile1Page } from './createnewprofile1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Createnewprofile1PageRoutingModule
  ],
  declarations: [Createnewprofile1Page]
})
export class Createnewprofile1PageModule {}
