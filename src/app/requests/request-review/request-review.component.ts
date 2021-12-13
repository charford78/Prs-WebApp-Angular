import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Requestlines } from 'src/app/requestlines/requestlines.class';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {

  request: Request = new Request();
  requestlines: Requestlines[] = [];
  requestId: number = 0;
  rejected: boolean = false;
  warning: string = "";

  statusStyles: any = {
    REVIEW: "text-warning bold",
    APPROVED: "text-success bold",
    REJECTED: "text-danger bold",
  }

  constructor(
    private reqsvc: RequestService,
    private syssvc: SystemService,
    private route: ActivatedRoute
  ) { }

  refresh(): void {
    this.requestId = this.route.snapshot.params["id"];

    this.reqsvc.getById(this.requestId).subscribe({
      next: res => {
        console.debug("Request:", res);
        this.request = res;
        this.request.statusStyle = this.statusStyles[this.request.status];
        this.requestlines = this.request.requestLines;
      },
      error: err => {
        console.error(err);
      }
    });
  }

  approve(req: Request): void {
    this.reqsvc.approve(req).subscribe({
      next: res => {
        console.debug("Request approved:", res);
        this.request = res;
        this.rejected = false;
        if(this.warning != null){
          this.warning = "";
        }
        this.refresh();
      },
      error: err => {
        console.error(err);
      }
    });
  }

  reject(): void {
    this.rejected = true;
  }

  verifyReject(req: Request): void {
    if(this.request.rejectionReason != null){
      this.reqsvc.reject(req).subscribe({
        next: res => {
          console.debug("Request approved:", res);
          this.request = res;
          this.warning = "";
          this.refresh();
        },
        error: err => {
          console.error(err);
        }
      });
    }
    else {
      this.warning = "You must enter a rejection reason!";
    }
  }


  ngOnInit(): void {
    this.syssvc.checkLogin();

    this.refresh();
  }
}
