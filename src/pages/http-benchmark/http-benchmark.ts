import { HttpProvider } from '../../providers/http/http';
import { BenchmarkProvider } from '../../providers/benchmark/benchmark';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-http-benchmark',
  templateUrl: 'http-benchmark.html',
})
export class HttpBenchmarkPage {

  constructor(public navCtrl: NavController, private benchmark: BenchmarkProvider, private http: HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HttpBenchmarkPage');
  }

}
