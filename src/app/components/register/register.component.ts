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

  public email: string;
  public password: string;
  public terms: boolean;

  public backRoute: string;

  constructor(private auth: AuthService, private alert: AlertService) {
    this.backRoute = '';
  }

  ngOnInit() {
  }

  public register(){
    if(this.terms){
      //if()
      let usuario = this.auth.register(this.email, this.password);
      console.log(usuario);
    }else{
      this.alert.presentAlert('Error', 'No has aceptado los términos y condiciones', 'Acepta los térmionos y condiciones para continuar', ['OK']);
    }
    //let usss = this.auth.login(f.value.email, f.value.password);
  }

}
