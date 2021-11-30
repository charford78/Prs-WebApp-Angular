import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor!: Vendor;

  vendorId: number = 0;

  constructor(
    private vensvc: VendorService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService
  ) { }

  save(): Vendor {
      this.vensvc.change(this.vendor, this.vendorId).subscribe({
        next: res => {
          console.debug("Vendor edited:", res);
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
