import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-stack-benchmark',
  templateUrl: 'view-stack-benchmark.html',
})
export class ViewStackBenchmarkPage {

  constructor(public navCtrl: NavController) { }

  pushView() {
    this.navCtrl.push('ViewStackPage');
  }

}
