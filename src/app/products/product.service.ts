import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../misc/system.service';
import { Product } from './product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseurl: string = `${this.syssvc.urlWinhost}/api/products`

  constructor(
    private httpsvc: HttpClient,
    private syssvc: SystemService
  ) { }

  list(): Observable<Product[]> {
    return this.httpsvc.get(`${this.baseurl}`) as Observable<Product[]>;
  }

  getById(id: number): Observable<Product> {
    return this.httpsvc.get(`${this.baseurl}/${id}`) as Observable<Product>;
  }

  create(product: Product): Observable<Product> {
    return this.httpsvc.post(`${this.baseurl}`, product) as Observable<Product>;
  }

  change(product: Product, id: number): Observable<Product> {
    return this.httpsvc.post(`${this.baseurl}/update/${id}`, product) as Observable<Product>;
  }

  remove(id: number): Observable<Product> {
    return this.httpsvc.post(`${this.baseurl}/delete/${id}`) as Observable<Product>;
  }
 
}
