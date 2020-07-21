import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingLayoutComponent } from './utils/routing-layout/routing-layout.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [RoutingLayoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [RoutingLayoutComponent]
})
export class ComponentsModule { }
