import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor: Vendor = new Vendor();
  
  constructor(
    private vensvc: VendorService,
    private router: Router,
    private syssvc: SystemService
  ) { }

  save(): void {
      this.vensvc.create(this.vendor).subscribe({
        next: res => {
          console.debug("New Vendor created:", res);
          this.router.navigateByUrl("/vendors/list");
        },
        error: err => {
          console.error(err);
        }
      });    
  }

  ngOnInit(): void {
    this.syssvc.checkLogin();
    this.syssvc.checkIsAdmin();
  }
}
