import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user!: User;
  password2: string = "";
  
  userId: number = 0;

  constructor(
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): User {
    
    this.usrsvc.change(this.user, this.userId).subscribe({
      next: res => {
        console.debug("User:", res);
        this.router.navigateByUrl("/users/list");
      },
      error: err => {
        console.error(err);
      }
    });
    return this.user;
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params["id"];

    this.usrsvc.getById(this.userId).subscribe({
      next: res => {
        console.debug("User:", res);
        this.user = res;
      },
      error: err => {
        console.error(err);
      }
    });
  }

}
