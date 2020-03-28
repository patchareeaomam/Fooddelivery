import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FoodsProvider } from '../../providers/foods/foods';

/**
 * Generated class for the FastfoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fastfood',
  templateUrl: 'fastfood.html',
})
export class FastfoodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  allfastfood = [
    {
      id:1,
      name:"ผัดกะเพราหมูสับ",
      price:"ราคา 40 บาท",
      image:"assets/imgs/01.jpg",
    },
    {
      id:2,
      name:"ข้าวผัดกุ้ง",
      price:"ราคา 50 บาท",
      image:"assets/imgs/02.jpg",
    },
    {
      id:3,
      name:"หมูทอดกระเทียม",
      price:"ราคา 40 บาท",
      image:"assets/imgs/03.jpg",
    },
    {
      id:4,
      name:"ข้าวหมูกรอบ",
      price:"ราคา 45 บาท",
      image:"assets/imgs/04.jpg",
    },
  ];
  ionViewDidLoad() {
    console.log('ionViewDidLoad FastfoodPage');
  }

}
