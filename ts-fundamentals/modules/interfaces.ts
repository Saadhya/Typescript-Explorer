//interface for objects
console.log("interface declaration and usage");
interface Movie {
  title: string;
  director: string;
  yearReleased: number;
  streaming: boolean;
  length?: number; //making it optional to avoid missing length property error
  // logReview?: (review: string) => void; //function type
  logReview?: reviewLogger//instead of above type
}
interface reviewLogger{
  (review:string):void;
}

// movieInfo("Avenger", 1996, "Carrie", "Mark", "Jerry");
//arrow functions
const logmsg = (message: string) => console.log(message);
// logmsg("Hello World");

//object creation
let myMovies = {
  title: "Inception",
  director: "Christopher Nolan",
  yearReleased: 2012,
  streaming: true,
  genre: "Action",
  logReview: (review: string) => console.log(`Review: ${review}`),
};
//duck typing
// movieInfo(myMovies);
if(myMovies.logReview){
  myMovies.logReview("Masterstroke movie");
}

// let printReview:reviewLogger;
// printReview=(review:string)=>console.log(`Viewer Review: ${review}`);
// printReview("I wan to see this movie again!");

interface Person{
  name:string;
  email:string
}
interface Director extends Person{
  numMoviesDirected:number
}
interface CastMember extends Person{
  role:string;
  rehearse:(sceneNumber:number)=>void;
}
// let favouriteDirector:Director={
//   name:"Christopher Nolan",
//   email:"christopher@gmail.com",
//   numMoviesDirected:5
// }
class Performer implements CastMember{
  name:string="";
  email: string="";
  rehearse(sceneNumber: number): void{
    console.log(`${this.name} is rehearsing scene number ${sceneNumber}`);    
  }
  role: string="";
}
// since performer implementing castmember interface, so its object can be assigned to any of instance 
// or variable which is expecting castmember
let favCastMember:CastMember=new Performer();
favCastMember.name="Tom Cruise";
favCastMember.email="tom@gmail.com";
favCastMember.rehearse(25);

//using constraint with generics
interface FavoriteItem{
  title:string;
}

export {Movie, reviewLogger as Logger, Person, Director, CastMember, FavoriteItem}