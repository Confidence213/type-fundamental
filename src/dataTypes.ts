//! Data Types

// string
let nama: string = "Darmawan";
nama = "Darma";

// number
let umur: number;
umur = 21;

// boolean
let isMarried: boolean;
isMarried = false;

// any
// if we define data type with 'any', we can assign any type of data we want in some variable.
let multi: any;
multi = [];
multi = true;
multi = 21;
multi = {};

// Union type
// in this case this variable can be a string, or a number.
let phone: string | number;
phone = "08214828xx";
phone = 08214828;
