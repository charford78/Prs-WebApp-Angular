import { Purchaseorderline } from "./purchaseorderline.class";
import { Vendor } from "./vendor.class";

export class Purchaseorder{

    vendor: Vendor = new Vendor();
    date: Date = new Date();
    purchaseOrderLines!: Purchaseorderline[];
    orderTotal: number = 0;

    constructor() {        
    }

}
