//! Class
// In Javascript, we dont have a class, otherwise in javascript we using the prototypes
// in Typescript, we can use class. 
export class User {
    public name: string;
    public age: number;
    // The constructor is a method that functions to initialize the instance variables that the object will have. 
    // This constructor is called during the process of instantiating a class into an object.
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

//! More simples class code.
export class anotherUser {
    constructor(public name: string, public age: number) {
    };

    setName(value: string): void {
        this.name = value;
    };

    getName = (): string => {
        return this.name;
    };

    setAge(value: number): void {
        this.age = value;
    };

    getAge = (): number => {
        return this.age;
    };
};

//! Inheritance
// public = can access in all class.
// protected = can be access for that class, and its heritance.
// private = can be access from its own class.
class Admin extends anotherUser {
    // define some variables.
    read: boolean = true;
    write: boolean = true;

    // creating the private variable
    private _email: string = "";

    // we cant define new varuable without value, except we build the constructor
    phone: string;

    constructor(phone: string, name: string, age: number) {
        // calling all attributes from the parent class.
        super(name, age);
        // phone variable come from admin.
        this.phone = phone;
    }
    // If return value more than one, we can use object as a type.
    getRole(): { read: boolean, write: boolean } {
        return {
            read: this.read,
            write: this.write
        }
    };

    // in set, we cannot define what to return, it is because the set not return anything.
    set email(value: string) {
        if (value.length < 5) {
            this._email = "Wrong email address!"
        } else {
            this._email = value
        }
    }

    // returning the _email variable from the get email.
    get email(): string {
        return this._email;
    }
};