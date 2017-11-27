import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { SiginPage } from '../pages/sigin/sigin';
import { ApresentacaoPage } from '../pages/apresentacao/apresentacao';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, afAuth : AngularFireAuth, storage: Storage) {
    storage.get('slide').then((val) => {
      afAuth.authState.subscribe(user => {
        if (val){
          if (user) {
            this.rootPage = HomePage;
            console.log("Fmz meu! "+val)
          } else {
            this.rootPage = SiginPage;                    
          }
        } else {
          this.rootPage = ApresentacaoPage;          
        }
      });    
    });
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

