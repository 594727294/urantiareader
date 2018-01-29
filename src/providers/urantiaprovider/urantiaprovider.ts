import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UrantiaProvider {

  constructor(public http: HttpClient,) {
    console.log('Hello UrantiaProvider');
  }

  getLibro(){
    return new Promise(resolve => {
      this.http.get('assets/source.json').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}



