import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
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
    private router: Router,
    private syssvc: SystemService
  ) { }

  delete(uid: number): void {
    this.syssvc.checkIsAdmin();

    if(this.syssvc.loggedInUser.isAdmin === true){
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
    }
  }

  ngOnInit(): void {
    this.syssvc.checkLogin();
    
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
