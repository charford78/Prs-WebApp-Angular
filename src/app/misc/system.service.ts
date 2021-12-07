import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser: any = null;

  constructor(
    private router: Router
  ) { }

  checkLogin(): void {
    if(this.loggedInUser === null) {
      this.router.navigateByUrl("/users/login")
    }
  }
  checkIsAdmin(): void {
    if(this.loggedInUser.isAdmin === false) {
      this.router.navigateByUrl("/users/login")
    }
  }

}
