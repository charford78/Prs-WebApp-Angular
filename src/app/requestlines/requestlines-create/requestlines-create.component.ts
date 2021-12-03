import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Product } from 'src/app/products/product.class';
import { ProductService } from 'src/app/products/product.service';
import { Requestlines } from '../requestlines.class';
import { RequestlinesService } from '../requestlines.service';

@Component({
  selector: 'app-requestlines-create',
  templateUrl: './requestlines-create.component.html',
  styleUrls: ['./requestlines-create.component.css']
})
export class RequestlinesCreateComponent implements OnInit {

  reqline: Requestlines = new Requestlines();
  products: Product[] = [];

  constructor(
    private rqlsvc: RequestlinesService,
    private router: Router,
    private syssvc: SystemService,
    private route: ActivatedRoute,
    private prdsvc: ProductService
  ) { }

  save(): void {
    this.rqlsvc.create(this.reqline).subscribe({
      next: res => {
        console.debug("New Requestline created:", res);
        this.router.navigateByUrl(`/requests/lines/${this.reqline.requestId}`);
      },
      error: err => {
        console.error(err);
      }
    });    
}


  ngOnInit(): void {
    this.syssvc.checkLogin();

    this.reqline.requestId = this.route.snapshot.params["id"];

    this.prdsvc.list().subscribe({
      next: res => {
        this.products = res;
      },
      error: err => {
        console.error(err);
      }
    });
  }

}
