export class User {
    Id: number = 0;
    Username: string = "";
    Password: string = "";
    Firstname: string = "";
    Lastname: string = "";
    Phone: string = "";
    Email: string = "";
    IsReviewer: boolean = false;
    IsAdmin: boolean = false;

    constructor(id: number, username: string, password: string, firstname: string, lastname: string, phone: string, email: string, isReviewer: boolean, isAdmin: boolean) {
        this.Id = id;
        this.Username = username;
        this.Password = password;
        this.Firstname = firstname;
        this.Lastname = lastname;
        this.Phone = phone;
        this.Email = email;
        this.IsReviewer = isReviewer;
        this.IsAdmin = isAdmin;
    }
}
