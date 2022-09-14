function profitOfYourAgency(input) {
    let agency = input[0];
    let adults = Number(input[1]);
    let children = Number(input[2]);
    let priceForAdult = Number(input[3]);
    let service = Number(input[4]);

    let priceForChildren = priceForAdult - 0.7 * priceForAdult;
    let totalPrice = adults * (priceForAdult + service) + children * (priceForChildren + service);
    let profit = (totalPrice * 0.2).toFixed(2);

    console.log(`The profit of your agency from ${agency} tickets is ${profit} lv.`);
}

profitOfYourAgency(["WizzAir", "15", "5", "120", "40"])