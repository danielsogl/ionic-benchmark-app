import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { HttpProvider } from '../../providers/http/http';


@IonicPage()
@Component({
  selector: 'page-http-benchmark',
  templateUrl: 'http-benchmark.html',
})
export class HttpBenchmarkPage {

  constructor(private http: HttpProvider) { }

  runGetComments() {
    const d1 = new Date().getTime();

    this.http.getComments().subscribe(data => {
      const d2: number = new Date().getTime();
      console.log('Item gelade nach ' + (d2 - d1) + 'ms');
    });
  }

  runGetSingleComments() {
    const d1 = new Date().getTime();
    let counter = 0;

    for (let i = 1; i < 501; i++) {
      this.http.getSingleComments(i).subscribe(value => {
        counter++;
        if (counter === 499) {
          const d2: number = new Date().getTime();
          console.log('Einzelne comments gelade nach ' + (d2 - d1) + 'ms');
        }
      });
    }
  }

}
