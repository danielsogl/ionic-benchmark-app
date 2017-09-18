import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  openListBenchmark() {
    this.navCtrl.push('ListBenchmarkPage');
  }

  openHttpBenchmark() {
    this.navCtrl.push('HttpBenchmarkPage');
  }

  openStorageBenchmark() {
    this.navCtrl.push('StorageBenchmarkPage');
  }

  openViewSTackBenchmark() {
    this.navCtrl.push('ViewStackBenchmarkPage');
  }

}
