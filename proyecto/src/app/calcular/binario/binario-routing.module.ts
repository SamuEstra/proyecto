import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BinarioPage } from './binario.page';

const routes: Routes = [
  {
    path: '',
    component: BinarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BinarioPageRoutingModule {}
