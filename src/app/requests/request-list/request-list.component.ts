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
  StyleStatus: string = "";  
  /*statusStyles: any = {
    NEW: "text-primary bold",
    REVIEW: "text-warning bold",
    APPROVED: "text-success bold",
    REJECTED: "text-warning bold",
  };*/
  
  constructor(
    private reqsvc: RequestService,
    private syssvc: SystemService
  ) { }

  setStatusColor(status: string): void {
    if(status === "NEW"){this.StyleStatus = "text-primary bold"};
    if(status === "REVIEW"){this.StyleStatus = "text-warning bold"};
    if(status === "APPROVED"){this.StyleStatus = "text-success bold"};
    if(status === "REJECTED"){this.StyleStatus = "text-danger bold"};
  }

  ngOnInit(): void {
    this.syssvc.checkLogin();

    this.reqsvc.list().subscribe({
      next: res => {
        console.debug("Requests:", res);
        this.requests = res;
        for(let r of this.requests){ 
          this.setStatusColor(r.status);
          r.statusStyle = this.StyleStatus;
        }
      },
      error: err => {
        console.error(err);
      }
    });

  }

}
