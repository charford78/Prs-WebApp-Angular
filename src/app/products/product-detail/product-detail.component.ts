import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { VendorListComponent } from 'src/app/vendors/vendor-list/vendor-list.component';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  productId: number = 0;

  constructor(
    private prdsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService
  ) { }

  delete(pid: number): Product {
    this.productId = pid;

    this.prdsvc.remove(this.productId).subscribe({
      next: res => {
        console.debug("Product removed:", res);
        this.product = res;
        this.router.navigateByUrl("/products/list");
      },
      error: err => {
        console.error(err);
      }
    });
    return this.product;
  }


  ngOnInit(): void {
    this.syssvc.checkLogin();

    this.productId = this.route.snapshot.params["id"];

    this.prdsvc.getById(this.productId).subscribe({
      next: res => {
        console.debug("Product:", res);
        this.product = res;
      },
      error: err => {
        console.error(err);
      }
    });
  }

}
