import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { VendorListComponent } from 'src/app/vendors/vendor-list/vendor-list.component';
import { Vendor } from 'src/app/vendors/vendor.class';
import { VendorService } from 'src/app/vendors/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();

  vendors: Vendor[] = [];

  constructor(
    private prdsvc: ProductService,
    private router: Router,
    private syssvc: SystemService,
    private vensvc: VendorService
  ) { }

  save(): void {
    this.product.vendorId = +this.product.vendorId;
      this.prdsvc.create(this.product).subscribe({
        next: res => {
          console.debug("New Product created:", res);
          this.router.navigateByUrl("/products/list");
        },
        error: err => {
          console.error(err);
        }
      });    
  }

  ngOnInit(): void {
    this.syssvc.checkLogin();
    this.syssvc.checkIsAdmin();

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
