import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User();
  password2: string = "";

  constructor(
    private usrsvc: UserService,
    private router: Router
  ) { }

  save(): User {
    
    this.usrsvc.create(this.user).subscribe({
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
