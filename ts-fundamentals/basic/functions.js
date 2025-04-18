// import movies from './js/movies.json'
// incorrect one
// function dullFunc(val1, val2){
//     return "I'm boring & difficultdon't be like me";
// }
//correct one
function funFunc(score: number, message: string) {
  return `I'm fun & easy, you can do it! Your score is ${score} and your message is ${message}`;
}
// console.log(funFunc(100, "You're awesome!"));

// annotating functions and using params
function getReview(title: string): string | number {
  if (title === "Avenger") {
    return "an instant classic";
  } else {
    return Math.floor(Math.random() * 10);
  }
}
//required, optional, default params, rest params(which always have to be last param)
function movieInfo(
  title: string,
  yearReleased: number = 2024,
  ...cast: string[]
): void {
  console.log(`Title: ${title}`);
  //this check was for optional param
  //   if (yearReleased) {
  //     console.log(`Year Released: ${yearReleased}`);
  //   }
  console.log(`Year Released: ${yearReleased}`);
  // console.log(`Cast: ${cast.join(", ")}`);
  console.log(`Cast:`);
  for (const actor of cast) {
    console.log(` ${actor}`);
  }
}

movieInfo("Avenger", 1996, "Carrie", "Mark", "Jerry");
//arrow functions
const logmsg = (message: string) => console.log(message);
// logmsg("Hello World");

//interface for objects
interface Movie{
  title: string;
  director: string;
  yearReleased: number;
  streaming: boolean;
}
//function overloads
function getallMovies(): Movie[] {
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
console.log("function overloads");
// function getTitles(author: string): string[];
function getTitles(director: string): string[];
function getTitles(director: string, streaming: boolean): string[];
function getTitles(director: string, streaming?: boolean): string[] {
  let foundTitles: string[] = [];
  const movies= getallMovies();
  // if (typeof bookProperty == "string") {
  //   return foundTitles;
  // }
  if (streaming !== undefined) {
    for (let movie of movies) {
      if (movie.director === director && movie.streaming === streaming) {
        foundTitles.push(movie.title);
      }
    }
  } else {
    for (let movie of movies) {
      if (movie.director === director) {
        foundTitles.push(movie.title);
      }
    }
  }
  return foundTitles;
}
const movieTitles: string[] = getTitles("Christopher Nolan", true);
movieTitles.forEach((element) => {
  console.log(element);
});
// function types and arrow functions
function createMovieId(name: string, id: number): string {
  return name + id;
}
// console.log(createMovieId("Avenger", 100));
// console.log(createMovieId(100, "Avenger"));
// console.log(createMovieId("Avenger", "100"));
// console.log(createMovieId(100, 100));

let xy: number;
xy = 5;
let idgen: (chars: string, nums: number) => string;
idgen = (name: string, id: number) => name + id;
// or
// idgen = createMovieId;

let newId: string = idgen("Avenger", 100);
console.log(newId);
