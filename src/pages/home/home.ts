import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FastfoodPage } from '../fastfood/fastfood';
import { SidedishPage } from '../sidedish/sidedish';
import { DrinkPage } from '../drink/drink';
import { DessertPage } from '../dessert/dessert';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
goToFastfood(){
  this.navCtrl.push(FastfoodPage);
}
goToSidedish(){
  this.navCtrl.push(SidedishPage);
}
goToDrink(){
  this.navCtrl.push(DrinkPage);
}
goToDessert(){
  this.navCtrl.push(DessertPage);
}

}
