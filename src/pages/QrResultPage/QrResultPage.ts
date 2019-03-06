import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomeService } from '../../app/services/home.service';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'qrp',
  templateUrl: 'QrResultPage.html'
})
export class QrResultPage {
  contents: any;
  item: any;
  name: any;
  id: any;
  key: any;
  token: any;
  photo: any;
  ass: any;
  loading: any;
  storage: any;

  constructor(public loadingCtrl: LoadingController, public plt: Platform, public navCtrl: NavController, 
    public sanitizer: DomSanitizer, public navParams: NavParams, private homeService: HomeService,
    private alertCtrl: AlertController) {

    this.contents = navParams.get('contents');
    let obj = JSON.parse(this.contents);
    this.id = obj.id;
    this.name = obj.name;
    //this.getPosts();
    
  }

  /*getPosts(){
      this.homeService.getData(this.key,this.token, this.id).subscribe(response => {
        this.item = response.data.information;
      });
  }*/
}

