import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocinaComponent } from './cocina.component';
import { ComidaComponent } from './comida/comida.component';
import { HistorialComponent } from './historial/historial.component';
import { ListaComponent } from './lista/lista.component';
import { RecetasComponent } from './recetas/recetas.component';

const routes: Routes = [
  {
    path: '',
    component: CocinaComponent,
  },{
    path: 'comida',
    component: ComidaComponent,
  },{
    path: 'recetas',
    component: RecetasComponent,
  },{
    path: 'historial',
    component: HistorialComponent,
  },{
    path: 'lista',
    component: ListaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocinaRoutingModule {}
