import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser: any = null;
  urlLocal: string = "http://localhost:54800";
  urlWinhost: string = "http://charford.w34.wh-2.com/prsdb"

  constructor(
    private router: Router
  ) { }

  checkLogin(): void {
    if(this.loggedInUser === null) {
      this.router.navigateByUrl("/users/login");
    }
  }
  checkIsAdmin(): void {
    if(this.loggedInUser.isAdmin === false) {
      alert("Admin-level authorization required to view this page. Returning to login.");
      this.router.navigateByUrl("/users/login");
    }
  }

  checkIsReviewer(): void {
    if(this.loggedInUser.isReviewer === false) {
      alert("Reviewer-level authorization required to view this page.  Returning to login.");
      this.router.navigateByUrl("users/login");
    }
  }

}
