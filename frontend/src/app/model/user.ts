export class User {
    _id: number = 0;
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    phone: string = '';         
    zip: number = 0;    
    city: string = '';
    address: string = '';
    password?: string;
    role: number = 2;
    token?: string;
}
