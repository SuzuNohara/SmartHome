import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/services/utils/routing.service';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.scss'],
})
export class ComidaComponent implements OnInit {

  constructor(private routing: RoutingService) { }

  ngOnInit() {}

  navigateBack(){
    this.routing.goTo('cocina');
  }

  options(){

  }

}
