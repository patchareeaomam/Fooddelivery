import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FastfoodPage } from '../pages/fastfood/fastfood';
import { SidedishPage } from '../pages/sidedish/sidedish';
import { DrinkPage } from '../pages/drink/drink';
import { DessertPage } from '../pages/dessert/dessert';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FoodsProvider } from '../providers/foods/foods';
import { HttpClientModule } from '@angular/common/http';
import { PlacedetailPage } from '../pages/placedetail/placedetail';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FastfoodPage,
    SidedishPage,
    DrinkPage,
    DessertPage,
    PlacedetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FastfoodPage,
    SidedishPage,
    DrinkPage,
    DessertPage,
    PlacedetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FoodsProvider
  ]
})
export class AppModule {}
