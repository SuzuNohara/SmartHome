import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'compras',
    loadChildren: () => import('./modules/compras/compras.module').then( m => m.ComprasModule)
  },
  {
    path: 'cocina',
    loadChildren: () => import('./modules/cocina/cocina.module').then( m => m.CocinaModule)
  },
  {
    path: 'lavanderia',
    loadChildren: () => import('./modules/lavanderia/lavanderia.module').then( m => m.LavanderiaModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
