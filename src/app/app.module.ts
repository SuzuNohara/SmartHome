import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';

import { HomePage } from './home/home.page';
import { ComprasComponent } from './modules/compras/compras.component';
import { CocinaComponent } from './modules/cocina/cocina.component';
import { ComidaComponent } from './modules/cocina/comida/comida.component';
import { HistorialComponent } from './modules/cocina/historial/historial.component';
import { ListaComponent } from './modules/cocina/lista/lista.component';
import { RecetasComponent } from './modules/cocina/recetas/recetas.component';
import { LavanderiaComponent } from './modules/lavanderia/lavanderia.component';

// modules created
import { RoutingLayoutModule } from './components/utils/routing-layout/routing-layout.module';

// modules external
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';

// environment
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    RegisterComponent, 
    LoginComponent,
    HomePage,
    ComprasComponent,
    CocinaComponent,
    ComidaComponent,
    HistorialComponent,
    ListaComponent,
    RecetasComponent,
    LavanderiaComponent,
    HeaderComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    RoutingLayoutModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  exports: [
    LoginComponent, 
    RegisterComponent, 
    LoginComponent,
    HeaderComponent
  ]
})
export class AppModule {}
