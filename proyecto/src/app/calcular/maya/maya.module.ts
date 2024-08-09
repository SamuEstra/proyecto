import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MayaPageRoutingModule } from './maya-routing.module';

import { MayaPage } from './maya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MayaPageRoutingModule
  ],
  declarations: [MayaPage]
})
export class MayaPageModule {}
