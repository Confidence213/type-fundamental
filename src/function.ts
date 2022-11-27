//! FUNCTIONS

//! returning String in the function.
function getName(): string {
    return "Darmawan";
};

//! returning Number in the function.
function getAge(): number {
    return 21;
};

//! not returning anything.
function printName(): void {
    console.log('Hi, My name is Darmawan');
};

//! Functions as Arguments.
// The argument needs to define the data types as well.
function multiply(value1: number, value2: number): number {
    return value1 * value2;
};

//! Functions AS TYPE
// define the Sum type is. in the Sum type, we need 2 parameters that have a type number.
// also dont forget what it going to return, in this case we are going to return a number.
type Sum = (value1: number, value2: number) => number;

// creating the add Function which have the Sum Type.
// in this add function we just add the value1 argument and value2 argument, 
// which is returning the number type.
const Add: Sum = (value1: number, value2: number): number => {
    return value1 + value2;
}

//! Default Parameter
const fullname = (firstname: string, lastname = "Darmawan"): string => {
    return firstname + " " + lastname;
}

//! Optional Parmeter
// You can decide if some parameters are going to be used or not. by using the quotation mark before double dot.
// if some of it are not used then, then it will be undefined.
// example:
const addAge = (value1: number, value2?: number): number => {
    // prevent it from carshed, jjust using the conditional statement
    // where ever the value2 is empty(undefined).
    if (!value2) {
        return value1
    }
    else {
        return value1 + value2;
    }
}
