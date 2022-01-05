import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/misc/system.service';
import { User } from 'src/app/users/user.class';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-reviewslist',
  templateUrl: './request-reviewslist.component.html',
  styleUrls: ['./request-reviewslist.component.css']
})
export class RequestReviewslistComponent implements OnInit {

  requests: Request[] = [];
  user: User = new User(); 

  constructor(
    private syssvc: SystemService,
    private reqsvc: RequestService
  ) { }

  ngOnInit(): void {
    this.syssvc.checkLogin();
    this.syssvc.checkIsReviewer();

    this.user = this.syssvc.loggedInUser;

    this.reqsvc.getReqsinReview(this.user.id).subscribe({
      next: res => {
        console.debug("Requests in Review:", res);
        this.requests = res;
      },
      error: err => {
        console.error(err);
      }
    });
  }

}
