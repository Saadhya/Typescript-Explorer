import { Movie, CastMember as Actor } from "./modules/interfaces";
import * as Utility from "./modules/functions";
import { Documentary, Favorites } from "./modules/classes";
import * as _ from 'lodash'

// decorators- annotations
let sportsDoc:Documentary=new Documentary("Baseball", 2020, "history");
sportsDoc.printItem();

// console.log("Beginning search...");
// getMoviesByDirector("The Wachwskis")
//   .then(
//     (titles) => {
//       console.log(`Found titles: ${titles}`);
//     //   throw 'something bad happened';
//       return titles.length;
//     },
//     //handling rejection in the then() only, similar to catch()
//     (reason) => {
//       return 0;
//     }
//   )
//   //when you return a value from a function passed to then, that value become resolved value for promise
//   // automatically
//   .then((numTitles) => console.log(`Num of movies found: ${numTitles}`))
//   .catch((err) => console.log(err));

// functions with error handling using async/await
// Utility.logSearchResults("Christopher Nolan").catch(error=>console.log(error))

// generic functions call
let inventory:Array<Movie> = Utility.getallMovies();
// purge should be passed the array of movies and return the array of movie
let purgedMovies:Array<Movie>=Utility.purge(inventory);
// purgedMovies.forEach(movie=>console.log(movie.title))

// console.log(purgedMovies);
let purgedNums:Array<number>=Utility.purge([1,2,3,4,5]);
// console.log("nums: "+purgedNums);

// generic classes
let favMovies:Favorites<Movie>=new Favorites<Movie>();
inventory.forEach(movie=>favMovies.add(movie));
let firstfav:Movie=favMovies.getFirst();

//using fav class with diff type 
let docs:Array<Documentary>=[
    new Documentary("The last dance", 2020, "Music"),
    new Documentary("The first choice", 2018, "life"),
    new Documentary("love story", 2011, "love")
]

let favDoc:Favorites<Documentary>=new Favorites<Documentary>();
// docs.forEach(doc=>favDoc.add(doc));
let firstDoc:Documentary=favDoc.getFirst();
// favDoc.printTitles(); //working

let originalMovie:Movie=favMovies.find('Inception') //only first movie
console.log(`${originalMovie.title} - ${originalMovie.yearReleased}`);

// using num type for fav class
// let favNums:Favorites<number>=new Favorites<number>();
// [12,23,43,54,45].forEach(num=>favNums.add(num));

// type declaration file
// inventory.forEach(movie=>console.log(_.snakeCase(movie.title)))

