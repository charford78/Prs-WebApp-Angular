import { Product } from "../products/product.class";
import { Request } from "../requests/request.class";

export class Requestlines{
    id: number = 0;
    requestId: number = 0;
    productId: number = 0;
    quantity: number = 0;
    product!: Product;
    request: Request = new Request();

    constructor () {}
}
