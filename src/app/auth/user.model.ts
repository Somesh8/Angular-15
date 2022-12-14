export class User {
    public fullname: string;
    public email: string;
    public password : string;
    public age: number;
    
    constructor(fullname:string, email:string, password:string, age:number){
        this.fullname = fullname;
        this.email = email;
        this.password = password;
        this.age = age;
    }
}