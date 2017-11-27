// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
// import { AngularFireAuth } from 'angularfire2/auth';
// import { FirebaseApp } from 'angularfire2';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DadisDadoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DadisDadoProvider {
  bairro: any;
  endereco: any;
  idade: any;
  nome: any;

  // items: FirebaseListObservable<any[]>;
  
    constructor(private storage: Storage) {
      // angularFireAuth.authState.subscribe(user => {
      //   var path = '/Dadis/Osman/'
      //   this.items = db.list(path);
      //   console.log(this.items)
      // })
    }
  
    public getAll() {
      // return this.items;
    }

    public ligarOsman(callnumber: CallNumber, sms: SMS){
      callnumber.callNumber("999570670", true)
      .then(() =>{
        this.storage.get('nome').then((val) => {
          this.nome = val
        });
        this.storage.get('idade').then((val) => {
          this.idade = val
        });
        this.storage.get('endereco').then((val) => {
          this.endereco = val
        });
        this.storage.get('bairro').then((val) => {
          this.bairro = val
        });
        sms.send('55999570670', this.nome+"\n"+this.idade+"\n"+this.endereco+"\n"+this.bairro);
      }); 
    }

    public ligarLeoni(callnumber: CallNumber){
      callnumber.callNumber("55999016063", true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
      // sms.send("55999016063", 'Hello world!')
    }

}
