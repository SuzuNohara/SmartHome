import { Component, Input, OnInit } from '@angular/core';
import { RoutingService } from '../../services/utils/routing.service';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {

  @Input('route') route: string;

  constructor(public routing: RoutingService) { }

  ngOnInit() {}

  public back(){
    this.routing.goTo(this.route);
  }

}
