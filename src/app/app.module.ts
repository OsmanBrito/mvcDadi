import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireDatabase } from 'angularfire2/database'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ApresentacaoPage } from '../pages/apresentacao/apresentacao'
import { SiginPage } from '../pages/sigin/sigin'
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword'
import { SingupPage } from '../pages/singup/singup'
import { ListDadisPage } from '../pages/list-dadis/list-dadis'
import { DetailsUserPage } from '../pages/details-user/details-user'
import { CadastrarperfilPage } from '../pages/cadastrarperfil/cadastrarperfil'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import { IonicStorageModule } from '@ionic/storage';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { PerfilServiceProvider } from '../providers/perfil-service/perfil-service';
import { DadisDadoProvider } from '../providers/dadis-dado/dadis-dado';

const firebaseConfig = {
  apiKey: "AIzaSyAlk1zi6o3vNAQtAkixlE5nC64ZxUPH8sk",
  authDomain: "mvcdadi-1e682.firebaseapp.com",
  databaseURL: "https://mvcdadi-1e682.firebaseio.com",
  projectId: "mvcdadi-1e682",
  storageBucket: "mvcdadi-1e682.appspot.com",
  messagingSenderId: "923751459824"
}
@NgModule({
  declarations: [
    MyApp,
    SiginPage,
    ApresentacaoPage,
    SingupPage,
    ListDadisPage,
    DetailsUserPage,
    ResetpasswordPage,
    CadastrarperfilPage,
    HomePage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SingupPage,
    ApresentacaoPage,
    SiginPage,
    ListDadisPage,
    DetailsUserPage,
    ResetpasswordPage,
    CadastrarperfilPage,
    HomePage
  ],
  providers: [
    AngularFireDatabase,
    CallNumber,
    SMS,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    PerfilServiceProvider,
    DadisDadoProvider
  ]
})
export class AppModule {}
