import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requestlines } from './requestlines.class';

@Injectable({
  providedIn: 'root'
})
export class RequestlinesService {

  baseurl: string = "http://localhost:54800/api/requestlines";


  constructor(
    private httpsvc: HttpClient
  ) { }

  create(requestline: Requestlines): Observable<Requestlines> {
    return this.httpsvc.post(`${this.baseurl}`, requestline) as Observable<Requestlines>;
  }

  change(requestline: Requestlines, id: number): Observable<Requestlines> {
    return this.httpsvc.put(`${this.baseurl}/${id}`, requestline) as Observable<Requestlines>;
  }

  remove(id: number): Observable<Requestlines> {
    return this.httpsvc.delete(`${this.baseurl}/${id}`) as Observable<Requestlines>;
  }

}
