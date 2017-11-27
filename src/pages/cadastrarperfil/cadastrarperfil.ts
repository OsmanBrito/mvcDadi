import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PerfilServiceProvider } from '../../providers/perfil-service/perfil-service';
import { HomePage } from '../home/home';

/**
 * Generated class for the CadastrarperfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrarperfil',
  templateUrl: 'cadastrarperfil.html',
})

export class CadastrarperfilPage {
  private _id: string
  private _nome: string
  private _idade: string
  private _endereco: string
  private _bairro: string
  private _key: string

  constructor(public navCtrl: NavController, private toastCtrl: ToastController,public navParams: NavParams, private perfil: PerfilServiceProvider) {
    this._nome = ''
    this._idade = ''
    this._endereco = ''
    this._bairro = ''
    this._key = ''    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarperfilPage');
  }

  cadastrarPerfil(){
    this.perfil.save(this._nome, this._idade, this._endereco, this._bairro)
    this.navCtrl.push(HomePage)
  }

}
