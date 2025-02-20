# to run the ts file 
npx tsc
or 
npx tsc --watch (for auto compilation)
use F5 

# basic typescript types
boolean, number, string, array
enum - NA

# type annotations and type inference
# additional built-in types
null
void
undefined
never
any

# type inference- union types
string  | number
# program flow

# creating and calling functions
- adding type annotations to functions
- using optional, default & rest params
- creating arrow functions
- overloading functions
- declaring function types

# --noImplicityAny compiler options

# default and optional params in a function
function createCustom(name:string, age?:number){}
name: string => required params
age?: number=> optional params (must appear after required params)
age?: number=0 => optional params

function getBookbytitle(title:string='The c lang'){}

# rest pararams
collects a group of params into a single array
denoted with ...(elipsis) prefix on last parameter
eg:- function getBooksForCust(name:string, ...bookIDs:number[]){}
its calling- let books = getBooksForCust('avenger', 2, 5);

# arrow function
const logmsg= (message:string)=>console.log(message);

# function types
- combination of return type and param types
let releasefun:(someyear:number):string;

- variables may be declared with func types
releasefun = releaseMessage;

- funcs assigned must have the same signature as the variable type
let msg: string = releaseMessage(2024);

# arrow functions
- idgen = (name:string, id:number) => name + id;



