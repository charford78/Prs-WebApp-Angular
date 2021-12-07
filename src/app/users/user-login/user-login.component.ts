import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username: string= "asandler";
  password: string= "flamingpoo!";
  warning: string= "";
  
  constructor(
    private usrsvc: UserService,
    private router: Router,
    private syssvc: SystemService
  ) { }

  logon(): void {
    this.usrsvc.login(this.username, this.password).subscribe({
      next: res => {
        console.debug("Logged in User:", res);
        this.syssvc.loggedInUser = res;
        this.warning = "";
        this.router.navigateByUrl("/requests/list");
      },
      error: err => {
        console.error(err);
        this.warning = "Invalid Username/Password"
        this.syssvc.loggedInUser = null;
      }
    });
  }

  ngOnInit(): void {
  }

}
