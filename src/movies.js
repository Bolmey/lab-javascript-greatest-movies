// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movie) {
    return movie.map((e) => e.director)
}
let newArry = getAllDirectors(movies)

console.log(newArry)



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?







// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    return array.filter(e => {
        if (e.director == "Steven Spielberg" && e.genre.includes("Drama")) {
            return e
        }
    });

}

let steveMovie = howManyMovies(movies)

function howManyMovies(array) {
    return array.filter((e) => e.genre.includes("Drama") && e.director == "Steven Spielberg").length;
}



// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(array) {
    if (array.length === 0) {
        return 0
    }

    let rating = array.reduce((acc, movies) => {
        if (movies.rate) {
            return acc + movies.rate;
        }
        else return acc
    }, 0);

    return Math.round(rating / array.length * 100) / 100;

}

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (array) => {

    let dramaMovie = array.filter((e) => {
        if (e.genre.includes('Drama')) {
            return e
        }
    })
    console.log(dramaMovie)
    return ratesAverage(dramaMovie)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {

    let sortArry = [...array]

    sortArry = sortArry.sort((a, b) => {
        if (a.year > b.year) {
            return 1
        }
        if (a.year < b.year) {
            return -1
        }
        if (a.year == b.year) {
            return a.title.localeCompare(b.title)
        }

    })
    return sortArry
}





// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles



function orderAlphabetically(array) {
    let alphaArray = [...array];

    alphaArray = alphaArray.sort((a, b) => {
        if (a.title < b.title) {
            return -1
        }
        if (a.title > b.title) {
            return 1
        }
        return 0
    })
    let newArr = [];
    alphaArray.slice(0, 20).forEach((a) => {
        newArr.push(a.title)
    })
    return newArr
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
