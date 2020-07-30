import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomePage } from './home/home.page';
import { ComprasComponent } from './modules/compras/compras.component';
import { CocinaComponent } from './modules/cocina/cocina.component';
import { ComidaComponent } from './modules/cocina/comida/comida.component';
import { HistorialComponent } from './modules/cocina/historial/historial.component';
import { ListaComponent } from './modules/cocina/lista/lista.component';
import { RecetasComponent } from './modules/cocina/recetas/recetas.component';
import { LavanderiaComponent } from './modules/lavanderia/lavanderia.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'home', component: HomePage, pathMatch: 'full' },
  { path: 'compras', component: ComprasComponent, pathMatch: 'full' },
  { path: 'cocina', component: CocinaComponent, pathMatch: 'full' },
  { path: 'cocinaComida', component: ComidaComponent, pathMatch: 'full' },
  { path: 'cocinaHistorial', component: HistorialComponent, pathMatch: 'full' },
  { path: 'cocinaLista', component: ListaComponent, pathMatch: 'full' },
  { path: 'cocinaRecetas', component: RecetasComponent, pathMatch: 'full' },
  { path: 'lavanderia', component: LavanderiaComponent, pathMatch: 'full' },
  { path: '*', redirectTo: '', pathMatch: 'full' },
  { path: '*', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
