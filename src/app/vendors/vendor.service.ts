import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.class';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  baseurl: string = "http://localhost:54800/api/vendors"

  constructor(
    private httpsvc: HttpClient
  ) { }

  list(): Observable<Vendor[]> {
    return this.httpsvc.get(`${this.baseurl}`) as Observable<Vendor[]>;
  }

  getById(id: number): Observable<Vendor> {
    return this.httpsvc.get(`${this.baseurl}/${id}`) as Observable<Vendor>;
  }

  create(vendor: Vendor): Observable<Vendor> {
    return this.httpsvc.post(`${this.baseurl}`, vendor) as Observable<Vendor>;
  }

  change(vendor: Vendor, id: number): Observable<Vendor> {
    return this.httpsvc.put(`${this.baseurl}/${id}`, vendor) as Observable<Vendor>;
  }

  remove(id: number): Observable<Vendor> {
    return this.httpsvc.delete(`${this.baseurl}/${id}`) as Observable<Vendor>;
  }

}
