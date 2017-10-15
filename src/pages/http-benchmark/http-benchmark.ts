import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-http-benchmark',
  templateUrl: 'http-benchmark.html',
})
export class HttpBenchmarkPage {

  private endpoint: string = 'https://jsonplaceholder.typicode.com';

  constructor(public http: HttpClient) { }

  runGetComments() {
    const d1 = new Date().getTime();

    this.http.get(this.endpoint + '/comments').subscribe(data => {
      const d2: number = new Date().getTime();
      console.log('Item gelade nach ' + (d2 - d1) + 'ms');
    });
  }

  runGetSingleComments() {
    const d1 = new Date().getTime();
    let counter = 0;

    for (let i = 1; i < 501; i++) {
      this.http.get(this.endpoint + '/comments/' + i).subscribe(value => {
        counter++;
        if (counter === 499) {
          const d2: number = new Date().getTime();
          console.log('Einzelne comments gelade nach ' + (d2 - d1) + 'ms');
        }
      });
    }
  }

}
