import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DessertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dessert',
  templateUrl: 'dessert.html',
})
export class DessertPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  alldessert = [
    {
      id:1,
      name:"ขนมบัวลอย",
      price:"ราคา 15 บาท",
      image:"assets/imgs/1.jpg",
    },
    {
      id:2,
      name:"ขนมลอดช่อง",
      price:"ราคา 15 บาท",
      image:"assets/imgs/2.jpg",
    },
    {
      id:3,
      name:"ข้าวเหนียวถั่วดำ",
      price:"ราคา 15 บาท",
      image:"assets/imgs/3.jpg",
    },
    {
      id:4,
      name:"ขนมซาหริ่ม",
      price:"ราคา 15 บาท",
      image:"assets/imgs/4.jpg",
    },
  ];
  ionViewDidLoad() {
    console.log('ionViewDidLoad DessertPage');
  }

}
