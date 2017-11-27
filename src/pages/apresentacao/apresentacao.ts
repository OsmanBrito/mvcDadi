import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SiginPage } from '../sigin/sigin';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ApresentacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apresentacao',
  templateUrl: 'apresentacao.html',
})
export class ApresentacaoPage {
  slides = [
    {
      title: "Bem-Vindo ao Dadi!",
      description: "O Dadi é um aplicativo de prestações de serviços, focado em acompanhamento de idosos. Os prestadores de serviços são chamados de 'Dadis'",
      image: "/assets/imgs/dadi.png",
    },
    {
      title: "Primeiro passo",
      description: "Para começar, crie uma conta no nosso aplicativo, ou acessa a sua conta com o seu e-mail e senha.",
      image: "/assets/imgs/fotoSlide1.png",
    },
    {
      title: "Segundo passo",
      description: "Preencha o formulario sobre seus dados pessoais, isso irá auxiliar o prestador de serviço (Dadis).",
      image: "/assets/imgs/fot.png",
    }
  ];

constructor(private navCtrl: NavController, private storage: Storage){}

concluirSlide(){
  console.log('opa')
  this.storage.set('slide', true)
  this.navCtrl.push(SiginPage)
}

}
