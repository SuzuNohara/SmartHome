import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/services/utils/routing.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss'],
})
export class RecetasComponent implements OnInit {

  constructor(private routing: RoutingService) { }

  ngOnInit() {}

  navigateBack(){
    this.routing.goTo('cocina');
  }

  options(){

  }

}
