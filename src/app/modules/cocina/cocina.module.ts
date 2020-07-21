import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CocinaRoutingModule } from './cocina-rounting.module';
import { CocinaComponent } from './cocina.component';
import { ComponentsModule } from '../../components/components.module';
import { ComidaComponent } from './comida/comida.component';
import { RecetasComponent } from './recetas/recetas.component';
import { HistorialComponent } from './historial/historial.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [
    CocinaComponent,
    ComidaComponent,
    RecetasComponent,
    HistorialComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CocinaRoutingModule,
    ComponentsModule
  ]
})
export class CocinaModule { }
