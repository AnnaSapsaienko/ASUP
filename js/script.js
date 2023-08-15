const numberOfFilms = prompt("скільки фільмів ви уже подивились?"," ");

const personalMovieDB ={
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

const  a = prompt("Один з нещодвно переглянутих фільмів?" , " ");
const  b = prompt("На скільки оціните його ?" , " ");
const  c = prompt("Один з нещодвно переглянутих фільмів?" , " ");
const  d = prompt("На скільки оціните його ?" , " ");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] =d;

console.log(personalMovieDB);