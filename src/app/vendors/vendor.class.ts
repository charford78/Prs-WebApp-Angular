import { Product } from "../products/product.class";

export class Vendor {
    id: number = 0;
    code: string = "";
    name: string = "";
    address: string = "";
    city: string = "";
    state: string = "";
    zip: string = "";
    phone: string = "";
    email: string = "";
    products: Product[] = [];

    constructor() {
    }
}
