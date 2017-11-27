import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';import { FirebaseApp } from 'angularfire2';
import { User } from '../auth-service/users';
import { Storage } from '@ionic/storage';


/*
  Generated class for the PerfilServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PerfilServiceProvider {

  items: Observable<any[]>;
  uid: string
  
    constructor(private db2: AngularFireDatabase, private storage: Storage,private angularFireAuth: AngularFireAuth, private fb: FirebaseApp) {
      angularFireAuth.authState.subscribe(user => {
        this.uid = user.uid
      })
      this.items = db2.list('usuarios/glfDM8DRtTgHqmTpAxzIleLJDXU2/-KzvCCkUItns7mLvo1g4').valueChanges();      
    }

    public getAll(){
      return this.items;
    }

    public save(nomeUs: string, idadeUs: string, enderecoUs: string, bairroUs: string){
      const afList = this.db2.list('usuarios/glfDM8DRtTgHqmTpAxzIleLJDXU2');
      afList.push({ Nome: nomeUs , Idade: idadeUs, Endereco: enderecoUs, Bairro: bairroUs});
      this.storage.set('nome', nomeUs)
      this.storage.set('idade', idadeUs)
      this.storage.set('endereco', enderecoUs)
      this.storage.set('bairro', bairroUs)
      
      const listObservable = afList.snapshotChanges();
      listObservable.subscribe();
    }

}
