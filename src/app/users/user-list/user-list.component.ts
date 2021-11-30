import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/misc/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  displayBoolean (aBoolean: boolean): string {
    return aBoolean ? "Yes" : "No";
  }
  
  constructor(
    private usrsvc: UserService,
    private syssvc: SystemService
  ) { }

  ngOnInit(): void {
    this.syssvc.checkLogin();
    
    this.usrsvc.list().subscribe({
      next: res => {
        console.debug("Users:", res);
        this.users = res;
      },
      error: err => {
        console.error(err);
      }
    });
  }

}
