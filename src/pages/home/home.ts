import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ApodService } from '../../app/service/apod.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  image: string;
  explanation: string;
  copyright: string;
  date: any;
  media_type: any;
  url: any;
  title: string;
  constructor(public navCtrl: NavController, private apodService: ApodService, public loadingCtrl:LoadingController) {

  }

  ngOnInit() {
    this.presentLoadingText();
    this.getapod();
  }

  presentLoadingText() {
    let loading = this.loadingCtrl.create({
        content: 'Loading APOD! Please Wait...'
    });

    loading.present();

    setTimeout(() => {
        loading.dismiss();
    }, 4000);
}

  getapod()
  {
    this.apodService.getApod().subscribe(response => {
      this.media_type = response.media_type;
      this.date = response.date;
      this.copyright = response.copyright;
      this.explanation = response.explanation;
      this.image = response.url;
      this.url = response.url;
      this.title = response.title;
      //console.log(response);
    });
  };

}
