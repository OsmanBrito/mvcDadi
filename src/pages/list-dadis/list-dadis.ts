import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { DadisDadoProvider } from '../../providers/dadis-dado/dadis-dado';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';

/**
 * Generated class for the ListDadisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-dadis',
  templateUrl: 'list-dadis.html',
})
export class ListDadisPage {
  items: Observable<any[]>;

  constructor(public navCtrl: NavController, private callNumber: CallNumber, private sms: SMS,public navParams: NavParams, private database: AngularFireDatabase, private dadis: DadisDadoProvider) {
    this.items = this.database.list('/Dadis/Osman').valueChanges();
  }

  chamarOsman(){
    this.dadis.ligarOsman(this.callNumber, this.sms)
  }

  chamarLeoni(){
    this.dadis.ligarLeoni(this.callNumber)    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListDadisPage');
  }

}
