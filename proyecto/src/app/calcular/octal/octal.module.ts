import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OctalPageRoutingModule } from './octal-routing.module';

import { OctalPage } from './octal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OctalPageRoutingModule
  ],
  declarations: [OctalPage]
})
export class OctalPageModule {}
