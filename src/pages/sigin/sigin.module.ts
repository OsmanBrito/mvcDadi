import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SiginPage } from './sigin';

@NgModule({
  declarations: [
    SiginPage,
  ],
  imports: [
    IonicPageModule.forChild(SiginPage),
  ],
})
export class SiginPageModule {}
