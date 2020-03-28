import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SidedishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sidedish',
  templateUrl: 'sidedish.html',
})
export class SidedishPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  allsidedish = [
    {
      id:1,
      name:"ปลากระพงทอดน้ำปลา",
      price:"ราคา 300 บาท",
      image:"assets/imgs/001.jpg",
    },
    {
      id:2,
      name:"ต้มยำรวมมิตร",
      price:"ราคา 150 บาท",
      image:"assets/imgs/002.jpg",
    },
    {
      id:3,
      name:"ไก่ผัดเม็ดมะม่วง",
      price:"ราคา 120 บาท",
      image:"assets/imgs/003.jpg",
    },
    {
      id:4,
      name:"ปลาสามรส",
      price:"ราคา 250 บาท",
      image:"assets/imgs/004.jpg",
    },
  ];
  ionViewDidLoad() {
    console.log('ionViewDidLoad SidedishPage');
  }

}
