import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcularPage } from './calcular.page';

const routes: Routes = [
  {
    path: '',
    component: CalcularPage
  },  {
    path: 'binario',
    loadChildren: () => import('./binario/binario.module').then( m => m.BinarioPageModule)
  },
  {
    path: 'octal',
    loadChildren: () => import('./octal/octal.module').then( m => m.OctalPageModule)
  },
  {
    path: 'decimal',
    loadChildren: () => import('./decimal/decimal.module').then( m => m.DecimalPageModule)
  },
  {
    path: 'hexadecimal',
    loadChildren: () => import('./hexadecimal/hexadecimal.module').then( m => m.HexadecimalPageModule)
  },
  {
    path: 'maya',
    loadChildren: () => import('./maya/maya.module').then( m => m.MayaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcularPageRoutingModule {}
