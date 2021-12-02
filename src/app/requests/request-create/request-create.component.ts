import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { User } from 'src/app/users/user.class';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();

  user: User = new User();

  constructor(
    private reqsvc: RequestService,
    private router: Router,
    private syssvc: SystemService,
  ) { }

  save(): void {
      this.request.userId = this.user.id;

      this.reqsvc.create(this.request).subscribe({
        next: res => {
          console.debug("New Request created:", res);
          this.request = res;
          this.router.navigateByUrl("/requests/list");
        },
        error: err => {
          console.error(err);
        }
      });    
  }


  ngOnInit(): void {
    this.syssvc.checkLogin();

    this.user = this.syssvc.loggedInUser;
  }

}
