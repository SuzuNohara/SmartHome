import { Component, OnInit, Input } from '@angular/core';
import { RoutingService } from '../../services/utils/routing.service';
import { AuthService } from '../../services/fire/auth.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input('route') route: string;
  public showBack: boolean;

  constructor(
    public routing: RoutingService,
    public auth: AuthService,
    public actions: ActionSheetController){
    this.showBack = true;//this.route != null && this.route != undefined;
  }

  async ngOnInit() {}

  public async showOptions(){
    const actionSheet = await this.actions.create({
      header: 'Opciones',
      cssClass: 'header-actions',
      buttons: [{
        text: 'Opcion',
        role: 'destructive',
        icon: 'person',
        handler: () => {
          console.log('Opcion');
        }
      }]
    });
    await actionSheet.present();
  }

  public logout(){
    this.auth.logout();
  }

  public back(){
    this.routing.goTo(this.route);
  }

  public async showUserOptions(){
    const actionSheet = await this.actions.create({
      header: 'Usuario',
      cssClass: 'header-actions',
      buttons: [{
        text: 'Ver Perfil',
        role: 'destructive',
        icon: 'person',
        handler: () => {
          console.log('Perfil de usuario');
        }
      }, {
        text: 'Configuración',
        role: 'destructive',
        icon: 'build',
        handler: () => {
          console.log('configuración de aplicación');
        }
      }, {
        text: 'Cerrar sesión',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
          this.logout();
        }
      }]
    });
    await actionSheet.present();
  }

}
