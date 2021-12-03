import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Requestlines } from 'src/app/requestlines/requestlines.class';
import { RequestlinesService } from 'src/app/requestlines/requestlines.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  request: Request = new Request();
  requestId: number = 0;
  requestlines: Requestlines[] = [];
  requestlineId: number = 0;

  constructor(
    private reqsvc: RequestService,
    private syssvc: SystemService,
    private route: ActivatedRoute,
    private rqlsvc: RequestlinesService
  ) { }

  review(req: Request): void {
    this.reqsvc.review(req).subscribe({
      next: res => {
        console.debug("Request status changed:", res);
        this.request = res;
        this.refresh();
      },
      error: err => {
        console.error(err);
      }
    });
  }

  delete(rlid: number): void {
    this.requestlineId = rlid;

    this.rqlsvc.remove(this.requestlineId).subscribe({
      next: res => {
        console.debug("Requestline removed:", res);
        this.refresh();
      },
      error: err => {
        console.error(err);
      }
    });
  }

  refresh(): void {
    this.requestId = this.route.snapshot.params["id"];

    this.reqsvc.getById(this.requestId).subscribe({
      next: res => {
        console.debug("Request:", res);
        this.request = res;
        this.requestlines = this.request.requestLines;
      },
      error: err => {
        console.error(err);
      }
    });

  }

  ngOnInit(): void {
    this.syssvc.checkLogin();

    this.refresh();


  }

}
