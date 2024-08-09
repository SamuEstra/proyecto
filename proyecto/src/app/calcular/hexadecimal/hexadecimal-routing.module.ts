import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HexadecimalPage } from './hexadecimal.page';

const routes: Routes = [
  {
    path: '',
    component: HexadecimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HexadecimalPageRoutingModule {}
