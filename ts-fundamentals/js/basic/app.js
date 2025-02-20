"use strict";
let myname = 'John';
let age = 25;
console.log(myname, age); // John 25
let x = 'I will forever be a string';
//x=42; //will show the error
let y = 'I will forever be a string';
//y=42; still will show the error
let z;
// union types
let firstval;
firstval = 'Hello';
firstval = 42;
// firstval=true; //will show the error
// using --strictNullChecks compiler option
let basicString;
// basicString = null;
let nullableString;
nullableString = null;
let mysteryString;
mysteryString = null;
mysteryString = undefined;
mysteryString = 'Hello';
let strarr1 = ['Hello', 'World'];
let strarr2 = ['Hello', 'World'];
// for multiple type of values in array
let anyArr = ['Hello', 10, true];
console.log(anyArr); // [ 'Hello', 10, true ]
