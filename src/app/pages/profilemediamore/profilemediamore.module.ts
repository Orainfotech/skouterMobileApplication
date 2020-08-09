import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilemediamorePageRoutingModule } from './profilemediamore-routing.module';

import { ProfilemediamorePage } from './profilemediamore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilemediamorePageRoutingModule
  ],
  declarations: [ProfilemediamorePage]
})
export class ProfilemediamorePageModule {}
