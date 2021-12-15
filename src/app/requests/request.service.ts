import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../misc/system.service';
import { Request } from './request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseurl: string = `${this.syssvc.urlWinhost}/api/requests`;

  constructor(
    private httpsvc: HttpClient,
    private syssvc: SystemService
  ) { }

  list(): Observable<Request[]> {
    return this.httpsvc.get(`${this.baseurl}`) as Observable<Request[]>;
  }

  getById(id: number): Observable<Request> {
    return this.httpsvc.get(`${this.baseurl}/${id}`) as Observable<Request>;
  }

  create(request: Request): Observable<Request> {
    return this.httpsvc.post(`${this.baseurl}`, request) as Observable<Request>;
  }

  change(request: Request, id: number): Observable<Request> {
    return this.httpsvc.post(`${this.baseurl}/update/${id}`, request) as Observable<Request>;
  }

  remove(id: number): Observable<Request> {
    return this.httpsvc.post(`${this.baseurl}/delete/${id}`, null) as Observable<Request>;
  }

  getReqsinReview(id: number): Observable<Request[]> {
    return this.httpsvc.get(`${this.baseurl}/reviews/${id}`) as Observable<Request[]>;
  }

  review(request: Request): Observable<Request> {
    return this.httpsvc.post(`${this.baseurl}/review`, request) as Observable<Request>;
  }

  approve(request: Request): Observable<Request> {
    return this.httpsvc.post(`${this.baseurl}/approve`, request) as Observable<Request>;
  }

  reject(request: Request): Observable<Request> {
    return this.httpsvc.post(`${this.baseurl}/reject`, request) as Observable<Request>;
  }
}
