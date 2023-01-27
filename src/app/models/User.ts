export class User {
    _id?:string;
    name: string;
	username: string;
	password: string;
	birthdate: Date;
	email: string;
    constructor(id: string, name: string, username: string, passwors: string, birthdate: Date, email: string){
        this._id=id;
        this.name = name;
        this.username = username;
        this.password = passwors;
        this.birthdate = birthdate;
        this.email = email;
    }
}