import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Product } from 'src/app/products/product.class';
import { ProductService } from 'src/app/products/product.service';
import { Requestlines } from '../requestlines.class';
import { RequestlinesService } from '../requestlines.service';

@Component({
  selector: 'app-requestlines-edit',
  templateUrl: './requestlines-edit.component.html',
  styleUrls: ['./requestlines-edit.component.css']
})
export class RequestlinesEditComponent implements OnInit {

  reqline!: Requestlines;
  reqlineId: number = 0;
  products: Product[] = [];

  constructor(
    private rqlsvc: RequestlinesService,
    private prdsvc: ProductService,
    private syssvc: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.rqlsvc.change(this.reqline, this.reqlineId).subscribe({
      next: res => {
        console.debug("Requestline edited:", this.reqline);
        this.router.navigateByUrl(`/requests/lines/${this.reqline.requestId}`);
      },
      error: err => {
        console.error(err);
      }
    });    
}


  ngOnInit(): void {
    this.syssvc.checkLogin();

    this.reqlineId = this.route.snapshot.params["id"];

    this.prdsvc.list().subscribe({
      next: res => {
        this.products = res;
      },
      error: err => {
        console.error(err);
      }
    });

    this.rqlsvc.getById(this.reqlineId).subscribe({
      next: res => {
        console.debug("Requestline:", res);
        this.reqline = res;
      },
      error: err => {
        console.error(err);
      }
    });
  }

}
