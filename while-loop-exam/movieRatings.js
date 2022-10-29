function movieRatings(params) {
    let index=0;
    let countMovie=Number(params[index++]);
    let maxRating=0;
    let bestMouvie="";
    let minRating=10;
    let lowestMovie="";
    let sumRating=0;
    for (let i = 1; i <=countMovie; i++) {
       let nameMovie = params[index++];
       let rating=Number(params[index++]);
        if(minRating>rating){
        minRating=rating;
        lowestMovie=nameMovie;
        }
        if(maxRating<=rating){
            maxRating=rating;
            bestMouvie=nameMovie;
        }
        sumRating+=rating;
        
    }
    let avergeRating=sumRating/countMovie
    console.log(`${bestMouvie} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${lowestMovie} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${avergeRating.toFixed(1)}`);

}
movieRatings(["3",
"Interstellar",
"8.5",
"Dangal",
"8.3",
"Green Book",
"8.2"])
