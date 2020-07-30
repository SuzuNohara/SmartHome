import { Injectable } from '@angular/core';
import { User } from 'src/app/classes/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from "firebase/app";
import { Observable, of } from 'rxjs';
import { FirestoreService } from './firestore.service';
import { RoutingService } from '../utils/routing.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$: Observable<User>;

  constructor(private auth: AngularFireAuth, private store: FirestoreService, private route: RoutingService) {
    this.auth.onIdTokenChanged((data)=>{
      console.log('SESSION STATUS CHANGED:: ', data);
      this.route.goTo('home');
    });
  }

  public async checkSession(): Promise<any>{
    let retorno;
    try{
      await this.auth.authState.subscribe((data) =>{
        retorno = data;
      });
    }catch(e){
      retorno = null;
    }
    return retorno;
  }

  public async login( user: string, password: string): Promise<any>{
    let retorno;
    try{
      retorno = await this.auth.signInWithEmailAndPassword(user, password);
    }catch(e){
      retorno = null;
    }
    return retorno;
  }
  
  public async logout(): Promise<void>{
    try{
      await this.auth.signOut();
    }catch(e){
      console.log(e);
      return null;
    }
  }
  
  public async register(email: string, password: string): Promise<any>{
    let retorno
    try{
      retorno = await this.auth.createUserWithEmailAndPassword(email, password);
    }catch(e){
      retorno = null;
    }
    return retorno;
  }

  public authState(){
    return this.auth.authState;
  }

  public async googleRegister(): Promise<any>{
    try{
      let retorno = await this.auth.signInWithPopup(new auth.GoogleAuthProvider());
      console.log(retorno);
      return retorno;
    }catch(e){
      console.log(e);
      return null;
    }
  }

  public async resetPassword(email: string): Promise<void>{
    try{
      let retorno = await this.auth.sendPasswordResetEmail(email);
      console.log(retorno);
      return retorno;
    }catch(e){
      console.log(e);
      return null;
    }
  }

  public async verification(): Promise<void>{
    try{
      let retorno = await (await this.auth.currentUser).sendEmailVerification();
      console.log(retorno);
      return retorno;
    }catch(e){
      console.log(e);
      return null;
    }
  }
}
