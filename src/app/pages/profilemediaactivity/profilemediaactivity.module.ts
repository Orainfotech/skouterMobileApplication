import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilemediaactivityPageRoutingModule } from './profilemediaactivity-routing.module';

import { ProfilemediaactivityPage } from './profilemediaactivity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilemediaactivityPageRoutingModule
  ],
  declarations: [ProfilemediaactivityPage]
})
export class ProfilemediaactivityPageModule {}
