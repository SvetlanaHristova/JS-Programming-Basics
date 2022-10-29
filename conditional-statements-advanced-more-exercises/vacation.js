function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let location;
    let type;
    let price
    switch (season) {
        case "Summer": location = "Alaska";
            if (budget <= 1000) {
                type = "Camp";
                price = budget * 0.65;
            } else if (budget > 1000 && budget <= 3000) {
                type = "Hut";
                price = budget * 0.80;
            } else {
                type = "Hotel";
                price = budget * 0.90;
            }; break;
        case "Winter": location = "Morocco";
            if (budget <= 1000) {
                type = "Camp";
                price = budget * 0.45;
            } else if (budget > 1000 && budget <= 3000) {
                type = "Hut";
                price = budget * 0.60;
            } else {
                type = "Hotel"
                price = budget * 0.90;
            }; break;
    }
    console.log(`${location} - ${type} - ${price.toFixed(2)}`);
}

vacation([800, "Summer"]);
vacation([799.5, "Winter"]);
vacation([3460, "Summer"]);
vacation([1100, "Summer"]);
vacation([5000, "Winter"]);
vacation([2543.99, "Winter"])