import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecimalPage } from './decimal.page';

const routes: Routes = [
  {
    path: '',
    component: DecimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecimalPageRoutingModule {}
