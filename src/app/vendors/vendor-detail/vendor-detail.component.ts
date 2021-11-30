import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor!: Vendor;

  vendorId: number = 0;

  constructor(
    private vensvc: VendorService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService
  ) { }

  delete(vid: number): Vendor {
    this.vendorId = vid;

    this.vensvc.remove(this.vendorId).subscribe({
      next: res => {
        console.debug("Vendor removed:", res);
        this.vendor = res;
        this.router.navigateByUrl("/vendors/list");
      },
      error: err => {
        console.error(err);
      }
    });
    return this.vendor;
  }

  ngOnInit(): void {
    this.syssvc.checkLogin();

    this.vendorId = this.route.snapshot.params["id"];

    this.vensvc.getById(this.vendorId).subscribe({
      next: res => {
        console.debug("Vendor:", res);
        this.vendor = res;
      },
      error: err => {
        console.error(err);
      }
    });
  }

}
