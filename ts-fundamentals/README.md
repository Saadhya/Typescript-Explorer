# Typescript 5 fundamentals
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
- string | number
- type Action=raction|absaction
- eg: interface raction{type: 'INCREMENT'|'DECREMENT'}
- interface absaction{type:'RESET'}

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
- import \* as HR from './person'
- so we can use it like:- HR.abc()

# Relative

- import {Laptop} from '/hardware' or './hardware' or '../hr/hardware'

# Non-relative imports

- like library
- import \* as $ from 'jquery'

# module resolution:- strategy

- tsc --moduleResolution Classic | Node
- # classic
- default when emitting AMD|UMD, SYSTEM, ETC.
- less configurable
- simple

- # node
- commonJs modules
- complex- closely mirrors node module resolution
- more configurable

# write asynchronous code:- promise

- the promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
- // function doAsyncWork(resolve, reject){
- // //perform async calls
- // if(success) resolve(data)
- // else reject(error)
- // }
- // let p :Promise<string>= new Promise(doAsyncWork)
- // let p2 :Promise<string>= new Promise((resolve, reject)=>{
- // })

# //handling promise result

- // p.then((stringdata)=>console.log(stringdata))
- // catch((error)=>console.log(error))

# async/await

- allows code to be written more clearly
- similar to async/await in c#
- works with promises
- //await will wait the execution until the promise is resovled
function with async keyword tells compiler to perform some async task and will not block the execution of other functions

# generics
- code that work with multiple types
- accept type params for each instance or invocation
- apply to functions, interfaces & classes

# type params
- added using <> angle brackets and conventionally by <T>
- // examples of using <type> generic in arrays- type parameter
interface Book{}
- //specifies type that array can contain
let poetryBooks:Book[];
- // are part of the type
let fictionBooks:Array<Book>
- // are listed separate from the function params
let historyBooks=new Array<Book>(5);

# generic functions
# generic classes & interfaces

# quote :- I'm a real believer in that creativity comes from limit not freedom (Jon stewart)
# generic constraints
- describe types that may be passed as generic params
- "extends' keyword applies constraint
- only types satisfying the constraint may be used

# declaration files
- write code faster
- find error faster
- provide value faster

# ts wrapper for js libraries
- ts for vars, functions etc.
- define valid property names
- define function params
- and much more!
- development-time tool
- filenames end with .d.ts
- available for thousands of libr

# definitely typed
- github repo containing thousands of type dec files
- dec files often maintained independent of related js lib
- source for installation utilities

# decorators = like annotations in java
- functions that is applied to other code
- form of metaprogramming
- similar to attributes in C# and annotations in Java

- applied to :- class, properties, fields, methods, getter/setters
- can be modified
- applied to all kinds of code on all kinds of apps

# debugging with source maps
- map source ts code to js output by compiler
- execute js but set breakpoints, watches etc. in source ts
- enabled with the --sourcemap compiler option
- enable sourcemap option in tsconfig.json file like this:- "sourceMap": true,  

# debugger using vscode
- open js-debug-terminal in vscode below section
- add breakpoints in your app.ts file and run the debugger either using F5 or "npm app.js" in debugger terminal.
- you can verify the particualr fields/properties in watch on debug mode on left panel.

# to add new config in launch.json file
- put your cursor inside the array, and press ctrl+space to see the list of menus
- here use node:launch program

# debugging ts with chrome devtools
- client_app file for debugging through browser
- adding html file, connect with js file from js folder- make sure to generate source-map file (.map.ts)
- then add breakpoints on the ts file whill be found on browser source tab.
- and easily the debug your typescript code.