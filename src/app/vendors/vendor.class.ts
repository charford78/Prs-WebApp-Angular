export class Vendor {
    Id: number = 0;
    Code: string = "";
    Name: string = "";
    Address: string = "";
    City: string = "";
    State: string = "";
    Zip: string = "";
    Phone: string = "";
    Email: string = "";
    Products: Product[] = [];

    constructor(id: number, code: string, name: string, address: string, city: string, state: string, zip: string, phone: string, email: string, products: Product[]) {
        this.Id = id;
        this.Code = code;
        this.Name = name;
        this.Address = address;
        this.City = city;
        this.State = state;
        this.Zip = zip;
        this.Phone = phone;
        this.Email = email;
        this.Products = products;
    }
}
