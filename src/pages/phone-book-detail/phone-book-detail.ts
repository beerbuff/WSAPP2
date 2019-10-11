import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';

@IonicPage()
@Component({
  selector: 'page-phone-book-detail',
  templateUrl: 'phone-book-detail.html',
})
export class PhoneBookDetailPage {

contact = {name: '', telephone: '', imgeUrl: ''};


  constructor(public navCtrl: NavController, public navParams: NavParams, private sms: SMS) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookDetailPage');

    this.contact = this.navParams.data;
  }

  sentSMS(){

    this.sms.send(this.contact.telephone, 'Hello world!');

  }

  call(){
    window.open('tel:'+this.contact.telephone);

  }

}//end class
