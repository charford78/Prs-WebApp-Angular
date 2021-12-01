import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Vendor } from 'src/app/vendors/vendor.class';
import { VendorService } from 'src/app/vendors/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product!: Product;

  productId: number = 0;

  vendors: Vendor[] = [];

  constructor(
    private prdsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService,
    private vensvc: VendorService
  ) { }

  save(): Product {
    this.product.vendorId = +this.product.vendorId;
    this.prdsvc.change(this.product, this.productId).subscribe({
      next: res => {
        console.debug("Product edited:", this.product);
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

    this.vensvc.list().subscribe({
      next: res => {
        this.vendors = res;
      },
      error: err => {
        console.error(err);
      }
    });
  }

}
