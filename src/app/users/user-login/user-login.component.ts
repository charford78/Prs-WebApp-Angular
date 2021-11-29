import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user!: User;

  username: string= "";
  password: string= "";
  
  constructor(
    private usrsvc: UserService,
    private router: Router
  ) { }

  logon(userName: string, passWord: string): User {
    this.username = userName;
    this.password = passWord;

    this.usrsvc.login(this.username, this.password).subscribe({
      next: res => {
        console.debug("User:", res);
        this.user = res;
        this.router.navigateByUrl("/users/list");
      },
      error: err => {
        console.error(err);
      }
    });
    return this.user;
  }

  ngOnInit(): void {
  }

}
