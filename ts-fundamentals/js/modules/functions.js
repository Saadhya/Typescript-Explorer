"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getallMovies = getallMovies;
exports.getTitles = getTitles;
exports.getReview = getReview;
exports.logSearchResults = logSearchResults;
exports.purge = purge;
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
// handling through promises
function getMoviesByDirector(director) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let foundMovies = getTitles(director);
            if (foundMovies.length > 0) {
                resolve(foundMovies);
            }
            else {
                reject("no movies found for that director!");
            }
        }, 2000);
    });
    return p;
}
//using async/await
function logSearchResults(director) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let foundMovies = yield getMoviesByDirector(director);
            console.log(foundMovies);
        }
        catch (error) {
            console.log(error);
        }
    });
}
function purge(inventory) {
    //implement fancy business logic
    //return the purged items
    return inventory.splice(2, inventory.length);
}
//# sourceMappingURL=functions.js.map