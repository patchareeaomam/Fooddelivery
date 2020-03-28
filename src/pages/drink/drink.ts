import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DrinkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drink',
  templateUrl: 'drink.html',
})
export class DrinkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  alldrink = [
    {
      id:1,
      name:"กระเจี๊ยบ",
      price:"ราคา 10 บาท",
      image:"assets/imgs/10.jpg",
    },
    {
      id:2,
      name:"เก๊กฮวย",
      price:"ราคา 10 บาท",
      image:"assets/imgs/20.jpg",
    },
    {
      id:3,
      name:"ลำใย",
      price:"ราคา 10 บาท",
      image:"assets/imgs/30.jpg",
    },
    {
      id:4,
      name:"อัญชัน",
      price:"ราคา 10 บาท",
      image:"assets/imgs/40.jpg",
    },
  ];
  ionViewDidLoad() {
    console.log('ionViewDidLoad DrinkPage');
  }

}
