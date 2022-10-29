function mobileOperator(input) {
    let period = input[0];
    let type = input[1];
    let internet = input[2];
    let countMonths = Number(input[3]);
    let priceForMonths = 0;
    switch (period) {
        case "one":
            switch (type) {
                case "Small": priceForMonths = 9.98; break;
                case "Middle": priceForMonths = 18.99; break;
                case "Large": priceForMonths = 25.98; break;
                case "ExtraLarge": priceForMonths = 35.99; break;
            };
            break;
        case "two":
            switch (type) {
                case "Small": priceForMonths = 8.58; break;
                case "Middle": priceForMonths = 17.09; break;
                case "Large": priceForMonths = 23.59; break;
                case "ExtraLarge": priceForMonths = 31.79; break;
            };
            break;
    }
    if (internet === "yes") {
        if (priceForMonths <= 10) {
            priceForMonths = priceForMonths + 5.5;
        } else if (priceForMonths <= 30) {
            priceForMonths = priceForMonths + 4.35;
        } else if (priceForMonths > 30) {
            priceForMonths = priceForMonths + 3.85;
        }
    }
    let price = priceForMonths * countMonths;
    if (period === "two") {
        price = price * 0.9625;
    }
    console.log(`${price.toFixed(2)} lv.`);
}
mobileOperator(["one", "Small", "yes", "10"]);
mobileOperator(["two", "Large", "no", "10"]);
mobileOperator(["two", "ExtraLarge", "yes", "20"]);
mobileOperator(["two", "Small", "yes", "20"])