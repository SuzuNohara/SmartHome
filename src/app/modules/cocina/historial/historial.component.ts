import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/services/utils/routing.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'],
})
export class HistorialComponent implements OnInit {

  constructor(private routing: RoutingService) { }

  ngOnInit() {}

  navigateBack(){
    this.routing.goTo('cocina');
  }

  options(){

  }

}
