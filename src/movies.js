// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr) {
  let directorsArr = arr.map((movie) => {return movie.director})
  return directorsArr;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

let newDirectors = getAllDirectors(movies);

function removeDuplicates(arr) {
  let filteredArray = arr.filter((director,i) => (arr.indexOf(director) == i))
  return filteredArray;
};

removeDuplicates(newDirectors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
  if (arr.length === 0 ) return 0;
  let stevenSpielbergMovies = arr.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
  return stevenSpielbergMovies.length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  if(!arr.length) return 0;

  let sumAvg = arr.reduce((acc, movie) => {
    if (movie.rate) {
      return acc + movie.rate;
    } else {
      return acc;
    }
  },0);
    
  return parseFloat((sumAvg / arr.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  let dramaRates = arr.filter((movie) => movie.genre.includes("Drama"));
  return ratesAverage(dramaRates);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  let sortedMovies = arr.map((movie) => movie);
  sortedMovies.sort((a,b) => {
    if(a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    if (a.year = b.year) {
      return a.title.localeCompare(b.title)
    }
  })
  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {

  let top20Movies = arr.map(movie => movie.title).sort();
  return top20Movies.splice(0,20);

}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
