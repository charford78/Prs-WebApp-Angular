import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
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

  constructor(
    private reqsvc: RequestService,
    private syssvc: SystemService,
    private route: ActivatedRoute
  ) { }

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
