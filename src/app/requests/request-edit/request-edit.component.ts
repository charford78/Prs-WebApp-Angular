import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  request!: Request;

  requestId: number = 0;

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService
  ) { }

  save(): void {
    this.reqsvc.change(this.request, this.requestId).subscribe({
      next: res => {
        console.debug("Request edited:", this.request)
        this.router.navigateByUrl("/requests/list");
      },
      error: err => {
        console.error(err);
      }
    });
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
