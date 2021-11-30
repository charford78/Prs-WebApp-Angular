import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  username: any = null;

  menus: Menu[] = [
    new Menu("PRS", "/home"),
    new Menu("Users", "/users/list"),
    new Menu("Vendors", "/vendors/list"),
    new Menu("Products", "/products/list"),
    new Menu("Requests", "/requests/list"),
    new Menu("Reviews", "/requests/reviews"),
    new Menu("About", "/about"),
    new Menu("Login", "/users/login")
  ]

  constructor(
    private syssvc: SystemService
  ) { }

  ngOnInit(): void {
    if(this.syssvc.loggedInUser != null){
      this.username = this.syssvc.loggedInUser.username;
    }
  }

}
