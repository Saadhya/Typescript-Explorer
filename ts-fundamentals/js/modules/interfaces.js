"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//interface for objects
console.log("interface declaration and usage");
// movieInfo("Avenger", 1996, "Carrie", "Mark", "Jerry");
//arrow functions
const logmsg = (message) => console.log(message);
// logmsg("Hello World");
//object creation
let myMovies = {
    title: "Inception",
    director: "Christopher Nolan",
    yearReleased: 2012,
    streaming: true,
    genre: "Action",
    logReview: (review) => console.log(`Review: ${review}`),
};
//duck typing
// movieInfo(myMovies);
if (myMovies.logReview) {
    myMovies.logReview("Masterstroke movie");
}
// let favouriteDirector:Director={
//   name:"Christopher Nolan",
//   email:"christopher@gmail.com",
//   numMoviesDirected:5
// }
class Performer {
    constructor() {
        this.name = "";
        this.email = "";
        this.role = "";
    }
    rehearse(sceneNumber) {
        console.log(`${this.name} is rehearsing scene number ${sceneNumber}`);
    }
}
// since performer implementing castmember interface, so its object can be assigned to any of instance 
// or variable which is expecting castmember
let favCastMember = new Performer();
favCastMember.name = "Tom Cruise";
favCastMember.email = "tom@gmail.com";
favCastMember.rehearse(25);
//# sourceMappingURL=interfaces.js.map