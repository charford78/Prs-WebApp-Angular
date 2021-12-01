import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request!: Request;

  requestId: number = 0;

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService
  ) { }

  delete(rid: number): Request {
    this.requestId = rid;

    this.reqsvc.remove(this.requestId).subscribe({
      next: res => {
        console.debug("Request removed:", res);
        this.request = res;
        this.router.navigateByUrl("/requests/list");
      },
      error: err => {
        console.error(err);
      }
    });
    return this.request;
  }


  ngOnInit(): void {
    this.syssvc.checkLogin();

    this.requestId = this.route.snapshot.params["id"];

    this.reqsvc.getById(this.requestId).subscribe({
      next: res => {
        console.debug("Request:", res);
        this.request = res;
      },
      error: err => {
        console.error(err);
      }
    });
  }

}
