import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilServiceProvider } from '../../providers/perfil-service/perfil-service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the DetailsUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-user',
  templateUrl: 'details-user.html',
})
export class DetailsUserPage {
  bairroUser: any;
  enderecoUser: any;
  idadeUser: any;
  nomeUser: any;
  items: Storage;
  nome: string
  
  constructor(public navCtrl: NavController, private storage: Storage,public navParams: NavParams, private perfil: PerfilServiceProvider) {
    this.items = storage
    
    var uni = storage.get('nome').then((val) => {
      this.nomeUser = val
    });

    storage.get('idade').then((val) => {
      this.idadeUser = val
    });

    storage.get('endereco').then((val) => {
      this.enderecoUser = val
    });

    storage.get('bairro').then((val) => {
      this.bairroUser = val
    });

  }

  cadastrarPerfil(){
    console.log(this.nomeUser)
    this.perfil.save(this.nomeUser, this.idadeUser, this.enderecoUser, this.bairroUser)
    this.navCtrl.pop()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsUserPage');
  }

}
