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
      this.router.navigateByUrl("/users/login")
    }
  }

}
