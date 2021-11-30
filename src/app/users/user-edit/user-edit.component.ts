import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
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
  warning: string = "";
  
  userId: number = 0;

  constructor(
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService
  ) { }

  checkPswd(): void {    
    this.warning = (this.user.password != this.password2)? "Passwords do not match! Try again." : "";    
  }

  save(): User {
    if(this.warning === ""){
      this.usrsvc.change(this.user, this.userId).subscribe({
        next: res => {
          console.debug("User:", res);
          this.router.navigateByUrl("/users/list");
        },
        error: err => {
          console.error(err);
        }
      });
    }
    return this.user;
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
