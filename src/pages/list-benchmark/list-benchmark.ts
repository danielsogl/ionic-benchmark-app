import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-list-benchmark',
  templateUrl: 'list-benchmark.html',
})
export class ListBenchmarkPage {

  data: Array<Data> = [];
  id: number = 1;

  constructor() { }

  buildData(count: number = 1000): Array<Data> {
    var adjectives = ["pretty", "large", "big", "small", "tall", "short", "long", "handsome", "plain", "quaint", "clean", "elegant", "easy", "angry", "crazy", "helpful", "mushy", "odd", "unsightly", "adorable", "important", "inexpensive", "cheap", "expensive", "fancy"];
    var colours = ["red", "yellow", "blue", "green", "pink", "brown", "purple", "brown", "white", "black", "orange"];
    var nouns = ["table", "chair", "house", "bbq", "desk", "car", "pony", "cookie", "sandwich", "burger", "pizza", "mouse", "keyboard"];
    var data: Array<Data> = [];
    for (var i = 0; i < count; i++) {
      data.push({ id: this.id, label: adjectives[this._random(adjectives.length)] + " " + colours[this._random(colours.length)] + " " + nouns[this._random(nouns.length)] });
      this.id++;
    }
    return data;
  }

  _random(max: number) {
    return Math.round(Math.random() * 1000) % max;
  }

  run() {
    this.data = this.buildData();
  }

  add() {
    this.data = this.data.concat(this.buildData(1000));
  }

  update() {
    for (let i = 0; i < this.data.length; i += 10) {
      this.data[i].label += ' !!!';
    }
  }

  runLots() {
    this.data = this.buildData(10000);
  }
  clear() {
    this.data = [];
  }
  swapRows() {
    if (this.data.length > 10) {
      var a = this.data[4];
      this.data[4] = this.data[9];
      this.data[9] = a;
    }
  }

}

interface Data {
  id: number;
  label: string;
}
