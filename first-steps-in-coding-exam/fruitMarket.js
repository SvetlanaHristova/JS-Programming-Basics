function fruitMarket(input) {
    let priceStraw = Number(input[0]);
    let bananas = Number(input[1]);
    let oranges = Number(input[2]);
    let rasp = Number(input[3]);
    let strow = Number(input[4]);
    let priceRasp = (priceStraw / 2);
    let priceOringes = (priceRasp - (0.4 * priceRasp));
    let priceBananas = (priceRasp - (0.8 * priceRasp));
    let priceForStrow = priceStraw * strow;
    let priceForBananas = priceBananas * bananas;
    let priceForOringes = priceOringes * oranges;
    let priceForRasp = priceRasp * rasp;
    let budget = (priceForStrow + priceForBananas + priceForOringes + priceForRasp).toFixed(2);
    console.log(budget);
}

fruitMarket(["48", "10", "3.3", "6.5", "1.7"])
