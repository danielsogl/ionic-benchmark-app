import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class StorageProvider {

  constructor(private storage: Storage) {
    this.storage.clear();
  }

  storeItems(items: any): Promise<any> {
    return this.storage.set('items', items);
  }

  storeSinglItem(item: any, index: number): Promise<any> {
    return this.storage.set(`item_${index}`, item);
  }

  getItems(): Promise<any> {
    return this.storage.get('items');
  }

  getSingleItem(index: number): Promise<any> {
    return this.storage.get(`item_${index}`);
  }

}
