function favoriteMovie(params) {
    let index = 0;
    let movie = params[index++];
    let counter = 0;
    let bestPoint = 0;
    nameMovie = "";

    while (movie !== "STOP") {
        counter++;
        let points = 0;
        for (i = 0; i < movie.length; i++) {
            let sum = movie.charCodeAt(i);
            if (sum >= 97 && sum <= 122) {
                sum -= 2 * movie.length;
            } else if (sum >= 65 && sum <= 90) {
                sum -= movie.length;
            }
            points += sum;
        }
        if (points > bestPoint) {
            bestPoint = points;
            nameMovie = movie;
        }
        if (counter === 7) {
            console.log(`The limit is reached.`);
            break;
        }
        movie = params[index++];
    }
    console.log(`The best movie for you is ${nameMovie} with ${bestPoint} ASCII sum.`);
}
favoriteMovie(["Wrong turn",
    "The maze",
    "Area 51",
    "Night Club",
    "Ice age",
    "Harry Potter",
    "Wizards"])

