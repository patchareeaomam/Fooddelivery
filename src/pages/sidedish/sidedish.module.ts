import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SidedishPage } from './sidedish';

@NgModule({
  declarations: [
    SidedishPage,
  ],
  imports: [
    IonicPageModule.forChild(SidedishPage),
  ],
})
export class SidedishPageModule {}
