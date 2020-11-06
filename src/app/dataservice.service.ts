import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { 

  }

  // tslint:disable-next-line: typedef
  getBlogPost(){
    return this.http.get(`${environment.url}posts`);
  }

  getCategories() {
    return this.http.get(`${environment.url}media`)
  }
}
