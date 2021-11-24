import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl: string = "http://localhost:54800/api/users"

  constructor(
    private httpsvc: HttpClient
  ) { }

  list(): Observable<User[]> {
    return this.httpsvc.get(`${this.baseurl}`) as Observable<User[]>;
  }

  getById(id: number): Observable<User> {
    return this.httpsvc.get(`${this.baseurl}/${id}`) as Observable<User>;
  }

  create(user: User): Observable<User> {
    return this.httpsvc.post(`${this.baseurl}`, user) as Observable<User>;
  }

  change(user: User, id: number): Observable<User> {
    return this.httpsvc.put(`${this.baseurl}/${id}`, user) as Observable<User>;
  }

  remove(id: number): Observable<User> {
    return this.httpsvc.delete(`${this.baseurl}/${id}`) as Observable<User>;
  }

  login(username: string, password: string): Observable<User> {
    return this.httpsvc.get(`${this.baseurl}/${username}/${password}`) as Observable<User>;
  }

}
