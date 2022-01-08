import { Purchaseorderline } from "./purchaseorderline.class";
import { Vendor } from "./vendor.class";

export class Purchaseorder{

    vendor: Vendor = new Vendor();
    dateTime: Date = new Date();
    purchaseOrderLines!: Purchaseorderline[];
    orderTotal: number = 0;

    constructor() {        
    }

}
