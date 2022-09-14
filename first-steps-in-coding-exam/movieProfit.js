function MovieProfit(input) {
    let nameMovie = (input[0]);
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let ticketsPrice = Number(input[3]);
    let percentage = Number(input[4]);
    let profit = (days * tickets * ticketsPrice * (1 - percentage / 100)).toFixed(2);
    console.log(`The profit from the movie ${nameMovie} is ${profit} lv.`);
}

MovieProfit(["Lucifer", "20", "500", "7.5", "7"])
