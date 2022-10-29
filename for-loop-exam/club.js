function club(params) {
    let index = 0;
    let theDesiredProfit = Number(params[index]);
    index++;
    let income = 0;

    for (i = 0; i < theDesiredProfit; i++) {
        let cocktail = params[index];
        index++;
        let countCoctail = Number(params[index]);
        index++;

        if (cocktail === "Party!") {
            diff = Math.abs(income - theDesiredProfit);
            console.log(`We need ${diff.toFixed(2)} leva more.`);
            break;
        }
        if (income >= theDesiredProfit) {
            console.log(`Target acquired.`);
            break;
        }
        let price = cocktail.length * countCoctail;
        if (price % 2 === 0) {
            income += price;
        } else {
            income += 0.75 * price;
        }
    }
    console.log(`Club income - ${income.toFixed(2)} leva.`);

}
club(["500",
    "Bellini",
    "6",
    "Bamboo",
    "7",
    "Party!"])

