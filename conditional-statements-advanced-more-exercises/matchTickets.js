function matchTickets(input) {
    let budget = Number(input[0]);
    let type = input[1];
    let countPeople = Number(input[2]);
    let transport = 0;
    if (countPeople >= 1 && countPeople <= 4) {
        transport = budget * 0.75;
    } else if (countPeople >= 5 && countPeople <= 9) {
        transport = budget * 0.60;
    } else if (countPeople >= 10 && countPeople <= 24) {
        transport = budget * 0.50;
    } else if (countPeople >= 25 && countPeople <= 49) {
        transport = budget * 0.40;
    } else
        transport = budget * 0.25;
    priceForTiket = 0;
    switch (type) {
        case "VIP": priceForTiket = countPeople * 499.99; break;
        case "Normal": priceForTiket = countPeople * 249.99; break;
    }
    diff = Math.abs(budget - transport - priceForTiket);
    if (budget >= (transport + priceForTiket)) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
}


matchTickets([1000, "Normal", 1]);
matchTickets([30000, "VIP", 49])
