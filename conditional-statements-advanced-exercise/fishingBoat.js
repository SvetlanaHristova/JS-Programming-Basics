function fishingBoat(params) {
    let budget = Number(params[0]);
    let season = params[1];
    let fisherman = Number(params[2]);
    let rent = 0;
    switch (season) {      //"Spring", "Summer", "Autumn", "Winter
        case "Spring": rent = 3000
            break;
        case "Summer":
        case "Autumn": rent = 4200
            break;
        case "Winter": rent = 2600
            break;
    }
    if (fisherman <= 6) {
        rent = rent * 0.9;
    } else if (fisherman > 6 && fisherman <= 11) {
        rent = rent * 0.85;
    } else {
        rent = rent * 0.75;
    }
    if (fisherman % 2 === 0 && season != "Autumn") {
        rent = rent * 0.95;
    }
    let diff = Math.abs(rent - budget).toFixed(2);
    if (rent <= budget) {
        console.log(`Yes! You have ${diff} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff} leva.`);
    }
}
fishingBoat(["2000",
    "Winter",
    "13"])


