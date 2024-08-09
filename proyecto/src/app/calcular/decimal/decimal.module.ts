import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecimalPageRoutingModule } from './decimal-routing.module';

import { DecimalPage } from './decimal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DecimalPageRoutingModule
  ],
  declarations: [DecimalPage]
})
export class DecimalPageModule {}
