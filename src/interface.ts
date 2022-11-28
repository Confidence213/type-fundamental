// An Interface is a structure which acts as a contract in our application. 
// It defines the syntax for classes to follow, 
// means a class which implements an interface is bound to implement all its members.
interface Laptop {
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop {
    name: string;
    isGaming: boolean;
    constructor(name: string, isGaming: boolean) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on(): void {
        throw new Error("It Turn On!");
    }
    off(): void {
        throw new Error("Good Bye, it is Shut down!");
    }

}

class Macbook implements Laptop {
    name: string;
    ledKeyboard: boolean;
    constructor(name: string, ledkeyboard: boolean) {
        this.name = name;
        this.ledKeyboard = ledkeyboard;
    }
    on(): void {
        throw new Error("It Turn On!");
    }
    off(): void {
        throw new Error("Good Bye, it is Shut down!");
    }
}