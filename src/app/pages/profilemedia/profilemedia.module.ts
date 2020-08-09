import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilemediaPageRoutingModule } from './profilemedia-routing.module';

import { ProfilemediaPage } from './profilemedia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilemediaPageRoutingModule
  ],
  declarations: [ProfilemediaPage]
})
export class ProfilemediaPageModule {}
