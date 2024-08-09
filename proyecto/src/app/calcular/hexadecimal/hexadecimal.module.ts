import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HexadecimalPageRoutingModule } from './hexadecimal-routing.module';

import { HexadecimalPage } from './hexadecimal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HexadecimalPageRoutingModule
  ],
  declarations: [HexadecimalPage]
})
export class HexadecimalPageModule {}
