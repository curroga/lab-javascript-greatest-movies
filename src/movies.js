// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let peliculas = moviesArray.map((eachElement) => {
        return eachElement.director
    })
    return peliculas
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let filterDirector = moviesArray.filter((eachDirector) => {
        if (eachDirector.director === "Steven Spielberg" && eachDirector.genre.includes("Drama") === true){
            return true
        } else {
            return false
        }
    })
    return filterDirector.length
    
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length == 0){
        return 0
    }
    let puntuacion = moviesArray.reduce((acc, eachScore) => {
        
        if(eachScore.score !== undefined){
            return acc + eachScore.score
        } else{
            return acc
        }
    }, 0)
    let average = puntuacion / moviesArray.length
    return Number(average.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    // primero hacemos un filtro de las peliculas que son drama
    let averageDrama = moviesArray.filter((element) => {
        return element.genre.includes("Drama");
      });
    // segundo ejecutamos sobre cada elemento y retornamos un valor
      let sum = averageDrama.reduce((acc, eachScore) => {
        return (acc = acc + eachScore.score);
      }, 0);
    // tercero hacemos el promedio
      let average = sum / averageDrama.length;
    
      if (averageDrama.length === 0) {
        return 0;
      }
    // cuarto retonamos el resultado con dos decimales
      return Number(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    // primero clonamos el array
    let cloneArray = structuredClone(moviesArray)
    // segundo ordenamos por años
    let orderMovies = cloneArray.sort((elem2, elem1) =>{
        if(elem2.year>elem1.year){
            return 1
        } else if (elem1.year>elem2.year) {
            return -1
        } else { // tercero en el caso de que sean iguales ordenamos por titulo
        if(elem2.title>elem1.title){
            return 1
        } else if(elem1.title>elem2.title){
            return -1
        } else{
        return 0
    }
    }
    
    })
    // cuarto retormanos el array ordenado
    return orderMovies

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    // primero clono
    let cloneArray = structuredClone(moviesArray)
    // segundo ordeno por titulos
    let orderMovies = cloneArray.sort((elem2, elem1) =>{
        if(elem2.title>elem1.title){
        return 1
        } else if(elem1.title> elem2.title){
        return -1
        }
        else {
        return 0
        }
    })
    // solo coger titulos
    let orderMovies20 = orderMovies.map((eachTitle) =>{
    return eachTitle.title
    })

    if(orderMovies20.length > 20){
    return orderMovies20.slice(0, 20)
    } else {
    return orderMovies20
    }


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
