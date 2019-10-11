import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GamePage } from '../pages/game/game';
import { TodoListPage } from '../pages/todo-list/todo-list';
import { PostJsonPage } from '../pages/post-json/post-json';
import { PhoneBookPage } from '../pages/phone-book/phone-book';
import { SMS } from '@ionic-native/sms';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,             
    GamePage,
    TodoListPage,
    PostJsonPage,
    PhoneBookPage //เพิ่มเพจ
  ],
  imports: [
    BrowserModule, HttpClientModule, //ติดต่อเเว็บ้างนอก
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,        
    GamePage,
    TodoListPage,
    PostJsonPage,
    PhoneBookPage //เพิ่มเพจ
  ],
  providers: [
    StatusBar,
    SplashScreen,SMS,
    {provide: ErrorHandler, useClass: IonicErrorHandler}  //native
  ]
})
export class AppModule {}
