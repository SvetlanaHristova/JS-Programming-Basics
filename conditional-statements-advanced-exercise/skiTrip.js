function skiTrip(input) {
    let day = Number(input[0]);
    let type = input[1];
    let rating = input[2];
    let price = 0;
    switch (type) {
        case "room for one person": price = (day - 1) * 18
            break;
        case "apartment": price = (day - 1) * 25;
            if (day < 10) {
                price = price * 0.7;
            } else if (day > 15) {
                price = price * 0.5;
            } else {
                price = price * 0.65;
            }
            break;
        case "president apartment": price = (day - 1) * 35;
            if (day < 10) {
                price = price * 0.9;
            } else if (day > 15) {
                price = price * 0.80;
            } else {
                price = price * 0.85;
            }
            break;
    }
    switch (rating) {
        case "positive": price = price * 1.25
            break;
        case "negative": price = price * 0.9
            break;
    }
    console.log(price.toFixed(2));
}
skiTrip(["14", "apartment", "positive"])
skiTrip(["30", "president apartment", "negative"])
skiTrip(["12", "room for one person", "positive"])
skiTrip(["2", "apartment", "positive"])
