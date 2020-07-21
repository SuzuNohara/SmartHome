import { Component, Input, OnInit } from '@angular/core';
import { RoutingService } from '../../../services/utils/routing.service';

@Component({
  selector: 'app-routing-layout',
  templateUrl: './routing-layout.component.html',
  styleUrls: ['./routing-layout.component.scss'],
})
export class RoutingLayoutComponent implements OnInit {

  @Input('params') params: any;

  public options;

  constructor(private routing: RoutingService) {}

  ngOnInit() {
    this.options = this.params;
  }

  public goTo(route: string){
    this.routing.goTo(route);
  }

}
