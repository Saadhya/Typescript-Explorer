import { Movie } from "./interfaces";

//function overloads
export function getallMovies(): Movie[] {
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
// function getTitles(author: string): string[];
export function getTitles(director: string): string[];
export function getTitles(director: string, streaming: boolean): string[];
export function getTitles(director: string, streaming?: boolean): string[] {
  let foundTitles: string[] = [];
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
  } else {
    for (let movie of movies) {
      if (movie.director === director) {
        foundTitles.push(movie.title);
      }
    }
  }
  return foundTitles;
}

// annotating functions and using params
export function getReview(title: string): string | number {
  if (title === "Avenger") {
    return "an instant classic";
  } else {
    return Math.floor(Math.random() * 10);
  }
}
//required, optional, default params, rest params(which always have to be last param)
function movieInfo(
  // title: string,
  // yearReleased: number = 2024,
  // ...cast: string[]
  movie: Movie
): void {
  console.log(`Title: ${movie.title}`);
  console.log(`Year Released: ${movie.yearReleased}`);
  console.log(`director: ${movie.director}`);
}
