
let numberOfFilms;

function start(){
    const numberOfFilms = +prompt("скільки фільмів ви уже подивились?"," ");

    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        const numberOfFilms = +prompt("скільки фільмів ви уже подивились?"," ");
    }
}

start();



const personalMovieDB ={
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};


function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const  a = prompt("Один з нещодвно переглянутих фільмів?" , " "),
               b = prompt("На скільки оціните його ?" , " ");
            if(a != null && b != null && a!='' && b!= ''&&  a.length <50 ){
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else{
                console.log('error');
                i--;
            }
        
       
    }
}

 rememberMyFilms();

 function detectPersonalLevel(){
    if(personalMovieDB.count <=10){
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >10 && personalMovieDB.count <30){
        console.log("Вы классический зритель");
    }else if (personalMovieDB.count>=30){
        console.log("Вы киноман");
    } else{
        console.log("Произошла ошибка");
    }
 }

 detectPersonalLevel();


function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres(){
    for ( let i = 1; i <=3; i++){
        const genre = prompt(`Ваш любимий жанр под номером ${i}`);
        personalMovieDB.genres[i -1] = genre;
    }

}

writeYourGenres();