import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  doGet(url: string) {
    return this.http.get(url);
  }
}
