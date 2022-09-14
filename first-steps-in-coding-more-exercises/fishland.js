function fishland(input) {
    let data = input.map(x => Number(x));
    let [priceMackerel, priceToy, amountBonito, amountHorseMackerel, amountMussels] = data;

    let priceBonito = priceMackerel * 1.6 * amountBonito;
    let priceHorseMackerel = priceToy * 1.8 * amountHorseMackerel;
    let prieceMussels = 7.5 * amountMussels;
    let totalPrice = (priceBonito + priceHorseMackerel + prieceMussels).toFixed(2);

    console.log(totalPrice);
}

fishland(["6.9", "4.2", "1.5", "2.5", "1"])

