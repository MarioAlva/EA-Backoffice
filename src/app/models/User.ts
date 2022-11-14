export class User {
    id?:String;
    name: String;
	username: String;
	password: String;
	birthdate: Date;
	email: String;
    constructor(name: String, username: String, passwors: String, birthdate: Date, email: String){
        this.name = name;
        this.username = username;
        this.password = passwors;
        this.birthdate = birthdate;
        this.email = email;
    }
}