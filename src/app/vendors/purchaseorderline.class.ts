import { Product } from "../products/product.class";

export class Purchaseorderline {

    product: Product = new Product();
    quantity: number = 0;
    lineTotal: number = 0;

    constructor(){
    }
}
