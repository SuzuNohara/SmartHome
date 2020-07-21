import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/services/utils/routing.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {

  constructor(private routing: RoutingService) { }

  ngOnInit() {}

  navigateBack(){
    this.routing.goTo('cocina');
  }

  options(){

  }

}
