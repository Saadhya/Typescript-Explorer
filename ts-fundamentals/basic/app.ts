let myname:string = 'John';
let age:number = 25;
console.log(myname, age); // John 25
let x:string = 'I will forever be a string';
//x=42; //will show the error

let y = 'I will forever be a string';
//y=42; still will show the error

let z:string;

// union types
let firstval: string|number;
firstval = 'Hello';
firstval = 42;
// firstval=true; //will show the error

// using --strictNullChecks compiler option
let basicString:string;
// basicString = null;

let nullableString: string|null;
nullableString = null;

let mysteryString: string|undefined|null;
mysteryString = null;
mysteryString=undefined;
mysteryString='Hello';

let strarr1:string[] = ['Hello', 'World'];
let strarr2:Array<string> = ['Hello', 'World'];

// for multiple type of values in array
let anyArr:any[]= ['Hello', 10, true];
console.log(anyArr); // [ 'Hello', 10, true ]
