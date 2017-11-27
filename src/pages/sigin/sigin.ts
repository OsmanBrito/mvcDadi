import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SingupPage } from '../singup/singup';
import { NgForm } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { User } from '../../providers/auth-service/users';
import { HomePage } from '../home/home';
import { CadastrarperfilPage } from '../cadastrarperfil/cadastrarperfil';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SiginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sigin',
  templateUrl: 'sigin.html',
})
export class SiginPage {
  user: User = new User()
  @ViewChild('form') form: NgForm;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private authService: AuthServiceProvider, private toastCtrl: ToastController) {
  }

  signInWithEmailPage() {
    this.navCtrl.push(SingupPage)
  }

  createAccount() {
    this.navCtrl.push(SingupPage)
  }

  resetPassword() {
    this.navCtrl.push(SingupPage);
  }

  signIn() {
    if (this.form.form.valid) {
      this.authService.singnIn(this.user)
        .then(() => {
          if (this.storage.get('nome')) {
            this.navCtrl.setRoot(HomePage);
          } else {
            this.navCtrl.setRoot(CadastrarperfilPage);
          }
        })
        .catch((error: any) => {
          let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
          if (error.code == 'auth/invalid-email') {
            toast.setMessage('O e-mail digitado não é valido.');
          } else if (error.code == 'auth/user-disabled') {
            toast.setMessage('O usuário está desativado.');
          } else if (error.code == 'auth/user-not-found') {
            toast.setMessage('O usuário não foi encontrado.');
          } else if (error.code == 'auth/wrong-password') {
            toast.setMessage('A senha digitada não é valida.');
          }
          toast.present();
        });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SiginPage');
  }

}
