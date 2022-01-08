import { Vendor } from "./vendor.class";

export class Purchaseorder{

    vendor: Vendor = new Vendor();
    dateTime: Date = new Date();
    orderTotal: number = 0;

    constructor() {        
    }

}
