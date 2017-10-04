import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-view-stack',
  templateUrl: 'view-stack.html',
})
export class ViewStackPage {

  public index: number;

  constructor(public navCtrl: NavController) {
    this.index = this.navCtrl.getViews().length;
  }

  pushView() {
    this.navCtrl.push('ViewStackPage');
  }

}
