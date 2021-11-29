import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user!: User;

  userId: number = 0;

  constructor(
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  delete(uid: number): User {
    this.userId = uid;

    this.usrsvc.remove(this.userId).subscribe({
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
