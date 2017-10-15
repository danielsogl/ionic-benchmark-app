import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-storage-benchmark',
  templateUrl: 'storage-benchmark.html',
})
export class StorageBenchmarkPage {

  constructor(public storage: Storage) { }

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

    const d1 = new Date().getTime();

    this.storage.set('items', items).then(() => {
      const d2: number = new Date().getTime();
      console.log('Items gespeichert nach ' + (d2 - d1) + 'ms');
    });
  }

  storeSIngleItems() {
    let items: any = [];

    for (let i = 0; i < 1000; i++) {
      items.push({
        id: i,
        name: 'mustermann',
        vorname: 'Max',
        datum: new Date()
      });
    }

    const d1 = new Date().getTime();

    for (let i = 0; i < items.length; i++) {
      this.storage.set(`item_${i}`, items[i]).then(value => {
        if (value.id === 999) {
          const d2 = new Date().getTime();
          console.log('Items gespeichert nach ' + (d2 - d1) + 'ms');
        }
      });
    }
  }

  getAllItems() {
    const d1 = new Date().getTime();

    this.storage.get('items').then(() => {
      const d2 = new Date().getTime();
      console.log('Items geladen nach ' + (d2 - d1) + 'ms');
    });
  }

  getSinglItems() {
    const d1: number = new Date().getTime();

    for (let i = 0; i < 1000; i++) {
      this.storage.get(`item_${i}`).then(value => {
        if (value.id === 999) {
          const d2 = new Date().getTime();
          console.log('Items gespeichert nach ' + (d2 - d1) + 'ms');
        }
      });
    }
  }

}
