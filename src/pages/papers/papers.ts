import { UrantiaProvider } from './../../providers/urantiaprovider/urantiaprovider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-papers',
  templateUrl: 'papers.html',
})
export class PapersPage {
  private libro: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public urantiaProv: UrantiaProvider) {
    this.urantiaProv.getLibro().then(data => {
      this.libro = data;
      let papers = this.libro.papers;
    }
  );
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PapersPage');
  }

}
