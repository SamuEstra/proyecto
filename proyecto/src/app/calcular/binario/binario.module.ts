import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BinarioPageRoutingModule } from './binario-routing.module';

import { BinarioPage } from './binario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BinarioPageRoutingModule
  ],
  declarations: [BinarioPage]
})
export class BinarioPageModule {}
