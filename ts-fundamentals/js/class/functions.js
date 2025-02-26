"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
