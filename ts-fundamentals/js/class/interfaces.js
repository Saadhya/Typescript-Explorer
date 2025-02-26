"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//interface for objects
console.log("interface declaration and usage");
// annotating functions and using params
function getReview(title) {
    if (title === "Avenger") {
        return "an instant classic";
    }
    else {
        return Math.floor(Math.random() * 10);
    }
}
//required, optional, default params, rest params(which always have to be last param)
function movieInfo(
// title: string,
// yearReleased: number = 2024,
// ...cast: string[]
movie) {
    console.log(`Title: ${movie.title}`);
    console.log(`Year Released: ${movie.yearReleased}`);
    console.log(`director: ${movie.director}`);
}
// movieInfo("Avenger", 1996, "Carrie", "Mark", "Jerry");
//arrow functions
const logmsg = (message) => console.log(message);
// logmsg("Hello World");
//function overloads
function getallMovies() {
    return [
        {
            title: "Inception",
            director: "Christopher Nolan",
            yearReleased: 2010,
            streaming: true,
        },
        {
            title: "The Matrix",
            director: "The Wachowskis",
            yearReleased: 1999,
            streaming: false,
        },
        {
            title: "The Dark Knight",
            director: "Christopher Nolan",
            yearReleased: 2008,
            streaming: true,
        },
        {
            title: "Parasite",
            director: "Bong Joon-ho",
            yearReleased: 2019,
            streaming: true,
        },
        {
            title: "The Godfather",
            director: "Francis Ford Coppola",
            yearReleased: 1972,
            streaming: false,
        },
        {
            title: "Avengers: Endgame",
            director: "Anthony Russo, Joe Russo",
            yearReleased: 2019,
            streaming: true,
        },
        {
            title: "Forrest Gump",
            director: "Robert Zemeckis",
            yearReleased: 1994,
            streaming: true,
        },
        {
            title: "Titanic",
            director: "James Cameron",
            yearReleased: 1997,
            streaming: false,
        },
        {
            title: "The Shawshank Redemption",
            director: "Frank Darabont",
            yearReleased: 1994,
            streaming: true,
        },
        {
            title: "Interstellar",
            director: "Christopher Nolan",
            yearReleased: 2014,
            streaming: true,
        },
    ];
}
function getTitles(director, streaming) {
    let foundTitles = [];
    const movies = getallMovies();
    // if (typeof bookProperty == "string") {
    //   return foundTitles;
    // }
    if (streaming !== undefined) {
        for (let movie of movies) {
            if (movie.director === director && movie.streaming === streaming) {
                foundTitles.push(movie.title);
            }
        }
    }
    else {
        for (let movie of movies) {
            if (movie.director === director) {
                foundTitles.push(movie.title);
            }
        }
    }
    return foundTitles;
}
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
movieInfo(myMovies);
if (myMovies.logReview) {
    myMovies.logReview("Masterstroke movie");
}
let printReview;
printReview = (review) => console.log(`Viewer Review: ${review}`);
printReview("I wan to see this movie again!");
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
