import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListDadisPage } from '../list-dadis/list-dadis';
import { DetailsUserPage } from '../details-user/details-user';
import { CadastrarperfilPage } from '../cadastrarperfil/cadastrarperfil';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  chamarDadi() {
    this.navCtrl.push(ListDadisPage)
  }

  verCadastro() {
    this.navCtrl.push(DetailsUserPage)
  }

}
