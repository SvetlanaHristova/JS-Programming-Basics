function energyBooster(input) {
    let fruit = input[0];
    let set = input[1];
    let count = Number(input[2]);
    let price = 0;
    switch (set) {
        case "small":
            switch (fruit) {
                case "Watermelon": price = count * 2 * 56; break;
                case "Mango": price = count * 2 * 36.66; break;
                case "Pineapple": price = count * 2 * 42.10; break;
                case "Raspberry": price = count * 2 * 20; break;
            }; break;
        case "big":
            switch (fruit) {
                case "Watermelon": price = count * 5 * 28.7; break;
                case "Mango": price = count * 5 * 19.6; break;
                case "Pineapple": price = count * 5 * 24.8; break;
                case "Raspberry": price = count * 5 * 15.2; break
            }; break;
    }
    if (price >= 400 && price <= 1000) {
        price = price * 0.85;
    } else if (price > 1000) {
        price = price * 0.5;
    }
    console.log(`${price.toFixed(2)} lv.`);
}
energyBooster(["Watermelon", "big", "4"]);
energyBooster(["Pineapple", "small", "1"]);
energyBooster(["Raspberry", "small", "50"]);
energyBooster(["Mango", "big", "8"])
