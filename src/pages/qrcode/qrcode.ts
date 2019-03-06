import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams, AlertController } from 'ionic-angular';
import { HomeService } from '../../app/services/home.service';
import { QrPage } from '../qr/qr';
import { QrResultPage } from '../QrResultPage/QrResultPage';
import {Platform} from 'ionic-angular';
import { BarcodeScanner} from '@ionic-native/barcode-scanner';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'qrcode',
  templateUrl: 'qrcode.html'
})
export class QrCodePage {
  items: any;
  id: any;
  data: any;
  alljson: any;
  output18: any;
  output21: any;
  allinfo: any;
  scasa: any;
  ecooltra: any;
  key: any;
  token: any;
  decision: boolean;

  constructor(private camera: Camera, public platform: Platform, private alertCtrl: AlertController, 
    public navCtrl: NavController, private homeService: HomeService, private navParams: NavParams, 
    private barcodeScanner: BarcodeScanner) {
  }

  toggleAllInfo(){
    
    this.navParams.get('storage').get('history').then((val) => {
      var array = val;
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear();
      var todays = dd + '/' + mm + '/' + yyyy;
      val.unshift({hdr: "Toda a informação", cnt: "Mostrei toda a minha informação.", date: todays});
      this.navParams.get('storage').set('history', val);

      let data = JSON.stringify({
        id: this.id,
        name: "Toda a Informação"
      });

      this.navCtrl.push(QrPage, {
        qrData: data,
        name: 'Toda a Informação'
      });
    });
  }

  toggleIdade(){
    this.navParams.get('storage').get('history').then((val) => {
      var array = val;
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear();
      var todays = dd + '/' + mm + '/' + yyyy;
      
      val.unshift({hdr: "Idade", cnt: "Mostrei a minha idade.", date:todays});
      this.navParams.get('storage').set('history', val);

      let data = JSON.stringify({
        id: this.id,
        name: "Idade"
      });

      this.navCtrl.push(QrPage, {
        qrData: data,
        name: "Idade"
      });
    });
  }

  toggleInstituicao(){
    this.navParams.get('storage').get('history').then((val) => {
      var array = val;
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear();
      var todays = dd + '/' + mm + '/' + yyyy;
      var bool;

      val.unshift({hdr: "Instituição", cnt: "Mostrei a minha Instituição", date:todays});
      this.navParams.get('storage').set('history', val);

      let data = JSON.stringify({
        id: this.id,
        name: "Instituição"
      });

      this.navCtrl.push(QrPage, {
        qrData: data,
        name: "Instituição"
      });
    });
  }

  openItem(text: String) {
    this.navCtrl.push(QrResultPage, {
      contents: text
    });
  }

  toggleLer(){
    this.platform.ready().then(() => {
      this.barcodeScanner.scan().then((barcodeData) => {
        this.data = barcodeData.text;
        this.openItem(barcodeData.text);
      }, (err) => {
        let alert = this.alertCtrl.create({
          title: 'Erro',
          subTitle: err,
          buttons: ['Ok']
        });
        alert.present();
      })
    })
  }

  toggleCamera(){
    const options: CameraOptions = {
      quality: 100,
      encodingType: this.camera.EncodingType.JPEG,
      cameraDirection: 1
    }

    this.platform.ready().then(() => {
      this.camera.getPicture(options).then((imageData) => {
        let alert = this.alertCtrl.create({
          title: 'Prova de Vida',
          subTitle: "Foto registada e verificada",
          buttons: ['Ok']
        });
        alert.present();
      }, (err) => {
        let alert = this.alertCtrl.create({
          title: 'Erro',
          subTitle: err,
          buttons: ['Ok']
        });
        alert.present();
      })
    })
  }

  ngOnInit() {
    this.navParams.get('storage').get('key').then((val) => {
      this.key= val;
      this.navParams.get('storage').get('token').then((val2) => {
        this.token=val2;
        this.getPosts();
      });
    });
  }

  getPosts(){
    this.homeService.getID(this.key, this.token).subscribe(response => {
        this.id =response.data.user.id;
    });
  }
}
