import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OctalPage } from './octal.page';

const routes: Routes = [
  {
    path: '',
    component: OctalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OctalPageRoutingModule {}
