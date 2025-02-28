"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const Utility = __importStar(require("./modules/functions"));
const classes_1 = require("./modules/classes");
// decorators- annotations
let sportsDoc = new classes_1.Documentary("Baseball", 2020, "history");
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
let inventory = Utility.getallMovies();
// purge should be passed the array of movies and return the array of movie
let purgedMovies = Utility.purge(inventory);
// purgedMovies.forEach(movie=>console.log(movie.title))
// console.log(purgedMovies);
let purgedNums = Utility.purge([1, 2, 3, 4, 5]);
// console.log("nums: "+purgedNums);
// generic classes
let favMovies = new classes_1.Favorites();
inventory.forEach(movie => favMovies.add(movie));
let firstfav = favMovies.getFirst();
//using fav class with diff type 
let docs = [
    new classes_1.Documentary("The last dance", 2020, "Music"),
    new classes_1.Documentary("The first choice", 2018, "life"),
    new classes_1.Documentary("love story", 2011, "love")
];
let favDoc = new classes_1.Favorites();
// docs.forEach(doc=>favDoc.add(doc));
let firstDoc = favDoc.getFirst();
// favDoc.printTitles(); //working
let originalMovie = favMovies.find('Inception'); //only first movie
console.log(`${originalMovie.title} - ${originalMovie.yearReleased}`);
// using num type for fav class
// let favNums:Favorites<number>=new Favorites<number>();
// [12,23,43,54,45].forEach(num=>favNums.add(num));
// type declaration file
// inventory.forEach(movie=>console.log(_.snakeCase(movie.title)))
//# sourceMappingURL=app.js.map