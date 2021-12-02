import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  requestline!: Requestlines;

  constructor(
    private reqsvc: RequestService,
    private syssvc: SystemService,
    private route: ActivatedRoute,
    private router: Router,
    private rqlsvc: RequestlinesService
  ) { }

  review(req: Request): void {
    this.request = req;
    
    this.reqsvc.review(this.request).subscribe({
      next: res => {
        console.debug("Request status changed:", res);
        this.request = res;
        this.router.navigateByUrl(`/requests/lines/${this.requestId}`);
      },
      error: err => {
        console.error(err);
      }
    });
  }

  delete(rlid: number): Requestlines {
    this.requestlineId = rlid;

    this.rqlsvc.remove(this.requestlineId).subscribe({
      next: res => {
        console.debug("Requestline removed:", res);
        this.requestline = res;
        this.router.navigateByUrl(`/requests/lines/${this.requestId}`);
      },
      error: err => {
        console.error(err);
      }
    });
    return this.requestline;
  }


  ngOnInit(): void {
    this.syssvc.checkLogin();

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

}
