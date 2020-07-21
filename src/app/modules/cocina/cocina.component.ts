import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/services/utils/routing.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.scss'],
})
export class CocinaComponent implements OnInit {

  public options = environment.cocinaFunctions;

  constructor(private routing: RoutingService) { }

  ngOnInit() {}

  public navigateBack(){
    this.routing.goTo('home');
  }

}
