// Abstract class: is a restricted class that cannot be used to create objects 
// to access it, it must be inherited from another class.
abstract class Vehicle {
    abstract wheels: number;

    start(): void {
        console.log('bruum!');
    }
}

// Inherited class.
class Car extends Vehicle {
    wheels: number = 4;
}

// Inherited class.
class Bike extends Vehicle {
    wheels: number = 2;
}

let car = new Car();
console.log(car.wheels);
car.start();

let bike = new Bike();
console.log(bike.wheels);
bike.start();