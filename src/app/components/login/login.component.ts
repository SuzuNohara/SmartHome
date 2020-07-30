import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../../services/utils/routing.service';
import { AuthService } from '../../services/fire/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public data: any;

  constructor(
    private routing: RoutingService, 
    private auth: AuthService) {
      this.data = {};
      this.data.email = '';
      this.data.password = '';
  }

  async ngOnInit() {
    this.auth.logout();
    let session = await this.auth.checkSession();
    if(session != null && session != undefined){
      console.log('SESSION:: ', session['user']['uid']);
    }
  }

  public async login(){
    console.log(this.data.email);
    console.log(this.data.password);
    let user = await this.auth.login(this.data.email, this.data.password);
    let session = await this.auth.checkSession();
    console.log(session);
    /*if(user.user.uid != undefined && user.user.uid != null){
      this.routing.goTo('home');
    }*/
  }

  public register(){
    this.routing.goTo('register')
  }
}
