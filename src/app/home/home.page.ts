import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RoutingService } from '../services/utils/routing.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public options = environment.homefuntions;
  
  constructor() {}

}
