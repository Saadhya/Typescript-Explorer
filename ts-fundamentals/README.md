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

# interfaces
what is an interface?
duck typing
declaring interfaces
interfaces for function types
extending interfaces

# duck typing
interface duck{
    walk: ()=>void;
    swim: ()=>void;
    quack: ()=>void;
}

# extending interfaces
- they don't have equivalent construct in javascript. interfaces donot contain implementation detail or create actual objects. its in ts for type checking
- so we learnt declare, use and extend interfaces and implement interfaces with classes
- interface libraryResource{
    catalogNumber:number;
}
- interface Book{
    title:string;
}
- interface Encyclopedia extends LibraryResource, Book{
    volume:number;
}
# implementation of the interface
- let refBook:Encyclopedia {
    catalogNumber:1232,
    title:'the book of everything',
    volume:5
}
- function declaration:- (sceneNumber:number)=>void
- function definition:- fnname(name:type,):fntype{}

# classes
- template for creating objects
- provide state storage and behaviour
- encapsulates reusable functionality

- contains properties and methods
- getters(a return type) & setters(no return type but input)
- parameter properties
- class Author{
    name:string;
    constructor(youname:string){
        name=youname;
    }
}
- other way:-
- class Author{
    //here is the shortcut to avoid explicit property declaration and assignment
    constructor(public name:string){}
}
# access modifiers 
- public(default),
- private, use # for private keyword 
- protected (shared with subclasses)

# inheritance
- constructor(), super to call parent constructor
- only single class inheritance is allowed

# abstract classes
- created with abstract keyword
- base classes that may not be instantiated
- may contain implementation details
- abstract methods are not implemented
# using class expression
- class expression can be used anywhere where class definition is expected
- ex:- class Course extends class {title:string=''}{}

# why use modules?- to organize the code, simple syntax, flexible usage,
- encapsulation
- reusability
- configurable resolution strategies
- create higher-level abstraction

# supoorting tech
- typescript compiler
- js modules: AMD, COMMONJS, UMD, SYSTEM, ES2015
- Loader/bundler

# import/export syntax
- like exporting a declaration
- Ex:- export interface video{}
- export function printCode():void{}
- export class Employee{}
- if using it like :- class Manager{} , its not accessible outside the module

# export statements
- //person.ts
- interface abc{}
- class Employee{}
- export {abc, Employee as StaffMember}

# import statements
- //player.ts
- import {abc, StaffMember} from './person';
- import Worker from './person'
- let engineer:Worker = new Worker('John', 'Smith');
- import { StaffMember as CoWorker } from './person'
- let emp:CoWorker= new CoWorker('Jane', 'Smith');

- //import entire module
- import * as HR from './person'
- so we can use it like:- HR.abc()

# Relative 
- import {Laptop} from '/hardware' or './hardware' or '../hr/hardware'

# Non-relative imports
- like library
- import * as $ from 'jquery'

# module resolution:- strategy
- tsc --moduleResolution Classic | Node
- # classic
- default when emitting AMD|UMD,  SYSTEM, ETC.
- less configurable
- simple

- # node
- commonJs modules
- complex- closely mirrors node module resolution
- more configurable



