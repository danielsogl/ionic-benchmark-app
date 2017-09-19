import { BenchmarkProvider } from '../../providers/benchmark/benchmark';
import { StorageProvider } from '../../providers/storage/storage';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-storage-benchmark',
  templateUrl: 'storage-benchmark.html',
})
export class StorageBenchmarkPage {

  constructor(private storage: StorageProvider, private benchmark: BenchmarkProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorageBenchmarkPage');
  }

  storeAllItems() {
    let items: any = [];

    for (let i = 0; i < 1000; i++) {
      items.push({
        id: i,
        name: 'mustermann',
        vorname: 'Max',
        datum: new Date()
      });
    }

    let d1 = new Date().getTime();

    this.storage.storeItems(items).then(() => {
      let d2: number = new Date().getTime();
      console.log('Items gespeichert nach ' + (d2 - d1) + 'ms');
    });
  }

  storeSIngleItems() {
    let counter: number = 0;
    let items: any = [];

    for (let i = 0; i < 1000; i++) {
      items.push({
        id: i,
        name: 'mustermann',
        vorname: 'Max',
        datum: new Date()
      });
    }

    let d1 = new Date().getTime();

    for (let i = 0; i < items.length; i++) {
      this.storage.storeSinglItem(items[i], i).then(value => {
        if (value.id === 999) {
          let d2 = new Date().getTime();
          console.log('Items gespeichert nach ' + (d2 - d1) + 'ms');
        }
      });
    }
  }

  getAllItems() {
    let d1 = new Date().getTime();

    this.storage.getItems().then(() => {
      let d2 = new Date().getTime();
      console.log('Items geladen nach ' + (d2 - d1) + 'ms');
    });
  }

  getSinglItems() {
    let d1: number = new Date().getTime();

    for (let i = 0; i < 1000; i++) {
      this.storage.getSingleItem(i).then(value => {
        if (value.id === 999) {
          let d2 = new Date().getTime();
          console.log('Items gespeichert nach ' + (d2 - d1) + 'ms');
        }
      });
    }
  }

}
