import { PapersPage } from './../papers/papers';
import { UrantiaProvider } from './../../providers/urantiaprovider/urantiaprovider';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private libro: any = "";
  private loadLibro: boolean = false;
  private shownGroup: any = null;
  private paginaPapers = PapersPage;
  
  constructor(public navCtrl: NavController, public urantiaProv: UrantiaProvider) {
    this.urantiaProv.getLibro().then(data => {
        this.libro = data;
        console.log(this.libro);
        this.loadLibro = true;
        console.log(this.loadLibro);
        let partes = this.libro.parts;
        console.log(partes)
      }
    );
  }
  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };
  isGroupShown(group) {
    return this.shownGroup === group;
  };
}
