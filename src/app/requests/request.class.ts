import { Requestlines } from "../requestlines/requestlines.class";
import { User } from "../users/user.class";

export class Request {
    id: number = 0;
    description: string = "";
    justification: string = "";
    rejectionReason: string = "";
    deliveryMode: string = "";
    status: string = "";
    total: number = 0;
    userId: number = 0;
    user: User = new User();
    requestLines: Requestlines[] = [];

    constructor () {}
}
