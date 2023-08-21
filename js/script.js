const numberOfFilms = prompt("скільки фільмів ви уже подивились?"," ");

const personalMovieDB ={
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};
for(let i = 0; i < 2; i++){
    const  a = prompt("Один з нещодвно переглянутих фільмів?" , " "),
           b = prompt("На скільки оціните його ?" , " ");

           personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);