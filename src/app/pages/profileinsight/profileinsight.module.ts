import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileinsightPageRoutingModule } from './profileinsight-routing.module';

import { ProfileinsightPage } from './profileinsight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileinsightPageRoutingModule
  ],
  declarations: [ProfileinsightPage]
})
export class ProfileinsightPageModule {}
