import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FoodsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FoodsProvider {
  data: any;
  constructor(public http: HttpClient) {
    this.data=[{
        id:1,
        type:"อาหารจานเดียว",
        name:"กะเพาหมูสับ",
        detail:"ส่วนผสมของกะเพราหมูสับ",
        image:"https://3.bp.blogspot.com/-VGamYb2dcis/WOSNFdfw1FI/AAAAAAAAAAc/UUOo9Qi-ZCIxmBUsmT5ysDTi9kW00VFgACPcB/s1600/1.jpg",
      },
      {
        id:2,
        type:"อาหารจานเดียว",
        name:"ข้าวผัดกุ้ง",
        detail:"ส่วนผสมของข้าวผัดกุ้ง",
        image:"https://3.bp.blogspot.com/-VGamYb2dcis/WOSNFdfw1FI/AAAAAAAAAAc/UUOo9Qi-ZCIxmBUsmT5ysDTi9kW00VFgACPcB/s1600/1.jpg",
      },
      {
        id:3,
        type:"อาหารจานเดียว",
        name:"หมูทอดกระเทียม",
        detail:"ส่วนผสมของหมูทอดกระเทียม",
        image:"https://3.bp.blogspot.com/-VGamYb2dcis/WOSNFdfw1FI/AAAAAAAAAAc/UUOo9Qi-ZCIxmBUsmT5ysDTi9kW00VFgACPcB/s1600/1.jpg",
      },
      {
        id:4,
        type:"อาหารจานเดียว",
        name:"ข้าวหมูกรอบ",
        detail:"ส่วนผสมของข้าวหมูกรอบ",
        image:"https://3.bp.blogspot.com/-VGamYb2dcis/WOSNFdfw1FI/AAAAAAAAAAc/UUOo9Qi-ZCIxmBUsmT5ysDTi9kW00VFgACPcB/s1600/1.jpg",
      },
    ];

    console.log('Hello FoodsProvider Provider');
  }
loadAll(){
  return Promise.resolve(this.data);
}
loadById(placeId:any){
  let place = this.data.find( ({id}) => id===placeId);
  return Promise.resolve(place);
}
}
