import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../misc/system.service';
import { Requestlines } from './requestlines.class';

@Injectable({
  providedIn: 'root'
})
export class RequestlinesService {

  baseurl: string = `${this.syssvc.urlLocal}/api/requestlines`;


  constructor(
    private httpsvc: HttpClient,
    private syssvc: SystemService
  ) { }

  getById(id: number): Observable<Requestlines> {
    return this.httpsvc.get(`${this.baseurl}/${id}`) as Observable<Requestlines>;
  }

  create(requestline: Requestlines): Observable<Requestlines> {
    return this.httpsvc.post(`${this.baseurl}`, requestline) as Observable<Requestlines>;
  }

  change(requestline: Requestlines, id: number): Observable<Requestlines> {
    return this.httpsvc.post(`${this.baseurl}/update/${id}`, requestline) as Observable<Requestlines>;
  }

  remove(id: number): Observable<Requestlines> {
    return this.httpsvc.post(`${this.baseurl}/delete/${id}`, null) as Observable<Requestlines>;
  }

}
