import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Purchaseorder } from '../purchaseorder.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-purchase-orders',
  templateUrl: './vendor-purchase-orders.component.html',
  styleUrls: ['./vendor-purchase-orders.component.css']
})
export class VendorPurchaseOrdersComponent implements OnInit {

  pord!: Purchaseorder;

  vendorId: number = 0;

  constructor(
    private syssvc: SystemService,
    private vensvc: VendorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.syssvc.checkLogin();

    this.vendorId = this.route.snapshot.params["id"];

    this.vensvc.getPurchaseOrder(this.vendorId).subscribe({
      next: res => {
        console.debug("PurchaseOrder:", res);
        this.pord = res;
      },
      error: err => {
        console.error(err);
      }
    });
  }

}
