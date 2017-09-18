import { BenchmarkProvider } from '../../providers/benchmark/benchmark';
import { StorageProvider } from '../../providers/storage/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-storage-benchmark',
  templateUrl: 'storage-benchmark.html',
})
export class StorageBenchmarkPage {

  constructor(public navCtrl: NavController, private storage: StorageProvider, private benchmark: BenchmarkProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorageBenchmarkPage');
  }

  storeAllItems() {
    let items: any = [];
    for(let i = 0; i < 1000; i++) {
      items.push({
        id: i,
        name: 'mustermann',
        vorname: 'Max',
        datum: new Date()
      });
    }

    let d1 = new Date().getMilliseconds();
    this.storage.storeItems(items).then(() => {
      let d2 = new Date().getMilliseconds();
      console.log('Items gespeichert nach ' + (d2 - d1) + 'ms');
    });
  }

  async storeSIngleItems() {
    let d1 = new Date().getMilliseconds();
    for(let i = 0; i < 1000; i++) {
      let item = {
        id: i,
        name: 'mustermann',
        vorname: 'Max',
        datum: new Date()
      };

      await this.storage.storeSinglItem(item, i);
    }
    let d2 = new Date().getMilliseconds();
    console.log('Items gespeichert nach ' + (d2 - d1) + 'ms');
  }

  getAllItems() {
    let d1 = new Date().getMilliseconds();
    this.storage.getItems().then(() => {
      let d2 = new Date().getMilliseconds();
      console.log('Items geladen nach ' + (d2 - d1) + 'ms');
    });
  }

  async getSinglItems() {
    let d1 = new Date().getMilliseconds();
    for(let i = 0; i < 1000; i++) {
      await this.storage.getSingleItem(i);
    }
    let d2 = new Date().getMilliseconds();
    console.log('Items geladen nach ' + (d2 - d1) + 'ms');
  }

}
