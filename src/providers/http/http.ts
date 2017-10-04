import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class HttpProvider {

  private endpoint: string = 'https://jsonplaceholder.typicode.com';

  constructor(public http: HttpClient) { }

  getComments(): Observable<any> {
    return this.http.get(this.endpoint + '/comments');
  }

  getSingleComments(id: number): Observable<any> {
    return this.http.get(this.endpoint + '/comments/' + id);
  }

}
