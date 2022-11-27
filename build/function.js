"use strict";
//! FUNCTIONS
//! returning String in the function.
function getName() {
    return "Darmawan";
}
;
//! returning Number in the function.
function getAge() {
    return 21;
}
;
//! not returning anything.
function printName() {
    console.log('Hi, My name is Darmawan');
}
;
//! Functions as Arguments.
// The argument needs to define the data types as well.
function multiply(value1, value2) {
    return value1 * value2;
}
;
// creating the add Function which have the Sum Type.
// in this add function we just add the value1 argument and value2 argument, 
// which is returning the number type.
const Add = (value1, value2) => {
    return value1 + value2;
};
//! Default Parameter
const fullname = (firstname, lastname = "Darmawan") => {
    return firstname + " " + lastname;
};
//! Optional Parmeter
// You can decide if some parameters are going to be used or not. by using the quotation mark before double dot.
// if some of it are not used then, then it will be undefined.
// example:
const addAge = (value1, value2) => {
    // prevent it from carshed, jjust using the conditional statement
    // where ever the value2 is empty(undefined).
    if (!value2) {
        return value1;
    }
    else {
        return value1 + value2;
    }
};
