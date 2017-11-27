import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../providers/auth-service/users'
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'
import { HomePage } from '../home/home'
import { NgForm } from '@angular/forms';
import { CadastrarperfilPage } from '../cadastrarperfil/cadastrarperfil';

/**
 * Generated class for the SingupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html',
})

export class SingupPage {
  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, private toastCtrl: ToastController) {
  }

  createAccount() {
    if (this.form.form.valid) {
      let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });

      this.authService.createUser(this.user)
        .then((user: any) => {
          user.sendEmailVerification();

          toast.setMessage('Usuário criado com sucesso.');
          toast.present();

          this.navCtrl.setRoot(CadastrarperfilPage);
        })
        .catch((error: any) => {
          if (error.code  == 'auth/email-already-in-use') {
            toast.setMessage('O e-mail digitado já está em uso.');
          } else if (error.code  == 'auth/invalid-email') {
            toast.setMessage('O e-mail digitado não é valido.');
          } else if (error.code  == 'auth/operation-not-allowed') {
            toast.setMessage('Não está habilitado criar usuários.');
          } else if (error.code  == 'auth/weak-password') {
            toast.setMessage('A senha digitada é muito fraca.');
          }
          toast.present();
        });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingupPage');
  }

}
