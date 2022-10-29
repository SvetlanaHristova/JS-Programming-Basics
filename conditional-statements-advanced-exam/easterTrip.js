function easterTrip(input) {
    let destination = input[0];
    let date = input[1];
    let countNight = Number(input[2]);
    let price = 0;
    switch (destination) {
        case "France":
            switch (date) {
                case "21-23": price = countNight * 30; break;
                case "24-27": price = countNight * 35; break;
                case "28-31": price = countNight * 40; break;
            }; break;
        case "Italy":
            switch (date) {
                case "21-23": price = countNight * 28; break;
                case "24-27": price = countNight * 32; break;
                case "28-31": price = countNight * 39; break;
            }; break;
        case "Germany":
            switch (date) {
                case "21-23": price = countNight * 32; break;
                case "24-27": price = countNight * 37; break;
                case "28-31": price = countNight * 43; break;
            }; break;
    }
    console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`);
}

easterTrip(["Germany", "24-27", "5"]);
easterTrip(["Italy", "21-23", "7"]);
easterTrip(["France", "28-31", "8"])
