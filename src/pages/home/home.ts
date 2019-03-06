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
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  item: any;
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

    this.storage = navParams.get('storage');
    this.loading = this.loadingCtrl.create({
      content: 'Por favor espere...'
    });

  }

  ngOnInit() {
    this.navParams.get('storage').get('key').then((val) => {
      this.key= val;
      this.navParams.get('storage').get('token').then((val2) => {
        this.token=val2;
      });
    });
  }

  ionViewDidLoad() {
    this.storage.get('first').then(bool => {
      if(bool) {
        console.log("First time")
        console.log(bool);
        this.faio();
      } else {
        console.log("NOT First time")
      }
    })
  }

  faio() {
    this.storage.set('first', false);
    let alert = this.alertCtrl.create({
      title: 'Touch ID',
      message: 'Deseja ativar o Touch ID?',
      buttons:[
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            console.log('Não clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Sim clicked');
            this.storage.set('faio', true);
          }
        }
      ]
    })
    alert.present()
  }

}

