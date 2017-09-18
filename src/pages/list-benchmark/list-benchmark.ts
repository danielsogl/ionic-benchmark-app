import { BenchmarkProvider } from '../../providers/benchmark/benchmark';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-list-benchmark',
  templateUrl: 'list-benchmark.html',
})
export class ListBenchmarkPage {

  constructor(public navCtrl: NavController, private benchmark: BenchmarkProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListBenchmarkPage');
  }

}
