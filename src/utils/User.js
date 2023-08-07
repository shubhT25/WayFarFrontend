export class User{
    //members
    id;
    email;
    password;
    name;
    gender;
    phone;
    //constructor
    constructor(id, eml, pwd, nm, gndr, ph){
        this.id = id;
        this.email = eml;
        this.password = pwd;
        this.name = nm
        this.gender = gndr;
        this.phone =ph;
    }
    //methods
    getUserEmail(){
      return this.email;
    }
}