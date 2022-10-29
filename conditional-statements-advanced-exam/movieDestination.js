function movieDestination(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let day = Number(input[3]);
    let price = 0;
    switch (season) {
        case "Winter":
            switch (destination) {
                case "Dubai": price = day * 0.7 * 45000; break;
                case "Sofia": price = day * 1.25 * 17000; break;
                case "London": price = day * 24000; break;
            };
            break;
        case "Summer":
            switch (destination) {
                case "Dubai": price = day * 0.7 * 40000; break;
                case "Sofia": price = day * 1.25 * 12500; break;
                case "London": price = day * 20250; break;
            };
            break;
    }
    diff = Math.abs(price - budget);
    if (price <= budget) {
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${diff.toFixed(2)} leva more!`);
    }
}
movieDestination(["400000", "Sofia", "Winter", "20"]);
movieDestination(["1000000", "Dubai", "Summer", "5"]);
movieDestination(["200000", "London", "Summer", "7"])
