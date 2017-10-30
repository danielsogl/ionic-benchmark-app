import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: "page-http-benchmark",
  templateUrl: "http-benchmark.html"
})
export class HttpBenchmarkPage {

  private endpoint: string = "https://jsonplaceholder.typicode.com";

  constructor(public http: HttpClient) {}

  getComments() {
    const d1 = new Date().getTime();
    let counter = 0;

    for (let i = 1; i <= 100; i++) {
      this.http.get(`${this.endpoint}/comments/${i}`).subscribe(value => {
        counter++;
        if (counter === 100) {
          const d2: number = new Date().getTime();
          console.log(`GET comments finished in ${d2 - d1} ms`);
        }
      });
    }
  }

  postComments() {
    const d1 = new Date().getTime();
    let counter = 0;

    for (let i = 1; i <= 100; i++) {
      this.http
        .post(`${this.endpoint}/comments/`, {
          id: i,
          name: "Lorem Ipsum",
          email: "test@mail.com",
          body:
            "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        })
        .subscribe(value => {
          counter++;
          if (counter === 100) {
            const d2: number = new Date().getTime();
            console.log(`POST comments finished in ${d2 - d1} ms`);
          }
        });
    }
  }

  putComments() {
    const d1 = new Date().getTime();
    let counter = 0;

    for (let i = 1; i <= 100; i++) {
      this.http
        .put(`${this.endpoint}/comments/${i}`, {
          id: i,
          name: "Lorem Ipsum",
          email: "test@mail.com",
          body:
            "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        })
        .subscribe(value => {
          counter++;
          if (counter === 100) {
            const d2: number = new Date().getTime();
            console.log(`PUT comments finished in ${d2 - d1} ms`);
          }
        });
    }
  }

  deleteComments() {
    const d1 = new Date().getTime();
    let counter = 0;

    for (let i = 1; i <= 100; i++) {
      this.http.delete(`${this.endpoint}/comments/${i}`).subscribe(value => {
        counter++;
        if (counter === 100) {
          const d2: number = new Date().getTime();
          console.log(`DELETE comments finished in ${d2 - d1} ms`);
        }
      });
    }
  }
}
