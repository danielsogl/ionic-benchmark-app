import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class HttpProvider {

  private endpoint: string = 'https://jsonplaceholder.typicode.com';

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }

  getComments(): Observable<any> {
    return this.http.get(this.endpoint + '/comments')
      .map(res => res.json());
  }

  getSingleComments(id: number): Observable<any> {
    return this.http.get(this.endpoint + '/comments/' + id)
      .map(res => res.json());
  }

}
