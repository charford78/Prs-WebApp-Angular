import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/misc/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class'

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[] = [];

  constructor(
    private reqsvc: RequestService,
    private syssvc: SystemService
  ) { }

  ngOnInit(): void {
    this.syssvc.checkLogin();

    this.reqsvc.list().subscribe({
      next: res => {
        console.debug("Requests:", res);
        this.requests = res;
      },
      error: err => {
        console.error(err);
      }
    });
  }

}
