import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {
  contactArray = [{ name: 'Sehun', telephone: '0955761654', imgeUrl: 'assets/imgs/sehun.jpg' },
  { name: 'Bakehyun', telephone: '0955761654', imgeUrl: 'assets/imgs/baekhyun.jpg' },
  { name: 'Kai', telephone: '0955761654', imgeUrl: 'assets/imgs/kai.jpg' },
  { name: 'Chanyeol', telephone: '0955761654', imgeUrl: 'assets/imgs/chan.jpg' }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }


  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage",item);
  
  }

}//end class
