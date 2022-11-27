"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anotherUser = exports.User = void 0;
//! Class
// In Javascript, we dont have a class, otherwise in javascript we using the prototypes
// in Typescript, we can use class. 
class User {
    // The constructor is a method that functions to initialize the instance variables that the object will have. 
    // This constructor is called during the process of instantiating a class into an object.
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
exports.User = User;
//! More simples class code.
class anotherUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.getAge = () => {
            return this.age;
        };
    }
    ;
    setName(value) {
        this.name = value;
    }
    ;
    setAge(value) {
        this.age = value;
    }
    ;
}
exports.anotherUser = anotherUser;
;
//! Inheritance
// public = can access in all class.
// protected = can be access for that class, and its heritance.
// private = can be access from its own class.
class Admin extends anotherUser {
    constructor(phone, name, age) {
        // calling all attributes from the parent class.
        super(name, age);
        // define some variables.
        this.read = true;
        this.write = true;
        // creating the private variable
        this._email = "";
        // phone variable come from admin.
        this.phone = phone;
    }
    // If return value more than one, we can use object as a type.
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
    ;
    // in set, we cannot define what to return, it is because the set not return anything.
    set email(value) {
        if (value.length < 5) {
            this._email = "Wrong email address!";
        }
        else {
            this._email = value;
        }
    }
    // returning the _email variable from the get email.
    get email() {
        return this._email;
    }
}
;
