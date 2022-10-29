function bikeRace(input) {
    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let trouteType = input[2];
    let price = 0;
    switch (trouteType) {
        case "trail": price = juniors * 5.5 + seniors * 7; break
        case "cross-country": price = juniors * 8 + seniors * 9.5
            if ((juniors + seniors) >= 50) {
                price = price * 0.75
            }; break
        case "downhill": price = juniors * 12.25 + seniors * 13.75; break
        case "road": price = juniors * 20 + seniors * 21.5; break
    }
    price = price * 0.95;
    console.log(price.toFixed(2));
}
bikeRace(["10", "20", "trail"]);
bikeRace(["21", "26", "cross-country"]);
bikeRace(["30", "25", "cross-country"]);
bikeRace(["10", "10", "downhill"]);
bikeRace(["3", "40", "road"])