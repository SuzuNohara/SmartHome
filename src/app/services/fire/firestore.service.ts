import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../../classes/user';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private store: AngularFirestore) { }

  public userData(user: User){
    const usRef: AngularFirestoreDocument<any> = this.store.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName
    };
    return usRef.set(data,{ merge: true } );
  }
}
