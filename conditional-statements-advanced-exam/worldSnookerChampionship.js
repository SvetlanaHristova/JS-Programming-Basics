function worldSnookerChampionship(input) {
    let stage = input[0];
    let type = input[1];
    let countTicket = Number(input[2]);
    let photo = input[3];
    price = 0;
    switch (stage) {
        case "Quarter final":
            switch (type) {
                case "Standard": price = countTicket * 55.50; break;
                case "Premium": price = countTicket * 105.20; break;
                case "VIP": price = countTicket * 118.90; break;
            }; break;
        case "Semi final":
            switch (type) {
                case "Standard": price = countTicket * 75.88; break;
                case "Premium": price = countTicket * 125.22; break;
                case "VIP": price = countTicket * 300.40; break;
            }; break;
        case "Final":
            switch (type) {
                case "Standard": price = countTicket * 110.10; break;
                case "Premium": price = countTicket * 160.66; break;
                case "VIP": price = countTicket * 400; break;
            }; break;
    }
    let totalPrice = price
    if (price > 4000) {
        totalPrice = price * 0.75;
    } else if (price > 2500) {
        totalPrice = price * 0.9;
    }
    if (photo === "Y" && price <= 4000) {
        totalPrice = totalPrice + countTicket * 40;
    }

    console.log(totalPrice.toFixed(2));
}

worldSnookerChampionship(["Final", "Premium", "25", "Y"]);
worldSnookerChampionship(["Semi final", "VIP", "9", "Y"]);
worldSnookerChampionship(["Quarter final", "Standard", "11", "N"])


