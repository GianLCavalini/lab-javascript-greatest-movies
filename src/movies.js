const movies = require("./data");

// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  
  const mappedArrays = movies.map((currentElement) => currentElement.director);// tudo o que estiver depois da seta vai ser o return
  return mappedArrays;
 // console.log(mappedArrays);
  
}
 getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {


 // const stevenMovies = movies.filter((currentElement) => currentElement.director === 'Steven Spielberg' && currentElement.genre.indexOf('Drama') === 'Drama'); 
  const stevenMovies = movies.filter((currentElement) => {
    return(currentElement.director === 'Steven Spielberg' && currentElement.genre.includes('Drama') )
  })  

  return stevenMovies.length;

}

howManyMovies(movies);






// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies.length === 0){
    return 0;
  }

  const newScore = movies.map((currentElement) => currentElement.score);
  console.log(newScore);

  const filteredScore = newScore.filter((currentElement) => { if(typeof currentElement === 'number')
  return currentElement})

  const filterReduc = filteredScore.reduce((a,b) => a+b)
  //return filterReduc;

  const scoreMedia = filterReduc / newScore.length;
  return Number (scoreMedia.toFixed(2));

   //console.log(filteredScore)
  

}

//scoresAverage(movies);










// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
