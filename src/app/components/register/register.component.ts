import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/fire/auth.service';
import { AlertService } from '../../services/utils/alert.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  f: NgForm;

  public backRoute: string;

  constructor(private auth: AuthService, private alert: AlertService) {
    this.backRoute = '';
  }

  ngOnInit() {
  }

  public register(f: NgForm){
    console.log(f.value.email);
    console.log(f.value.password);
    console.log(f.value.pass);
    console.log(f.value.terms);
    let usuario = this.auth.register(f.value.email, f.value.password);
    console.log(usuario);
    let usss = this.auth.login(f.value.email, f.value.password);
    console.log(usss);
    console.log(this.auth.checkSession());
  }

}
