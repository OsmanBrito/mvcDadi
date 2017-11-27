import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListDadisPage } from './list-dadis';

@NgModule({
  declarations: [
    ListDadisPage,
  ],
  imports: [
    IonicPageModule.forChild(ListDadisPage),
  ],
})
export class ListDadisPageModule {}
