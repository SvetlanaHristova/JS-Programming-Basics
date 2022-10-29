function gymnastics(input) {
    let contry = input[0];
    let device = input[1];
    rating = 0;
    switch (contry) {
        case "Russia":
            switch (device) {
                case "ribbon": rating = 9.1 + 9.4; break;
                case "hoop": rating = 9.3 + 9.8; break;
                case "rope": rating = 9.6 + 9.0; break;
            };
            break;
        case "Bulgaria":
            switch (device) {
                case "ribbon": rating = 9.6 + 9.4; break;
                case "hoop": rating = 9.55 + 9.75; break;
                case "rope": rating = 9.5 + 9.4; break;
            };
            break;
        case "Italy":
            switch (device) {
                case "ribbon": rating = 9.2 + 9.5; break;
                case "hoop": rating = 9.45 + 9.35; break;
                case "rope": rating = 9.7 + 9.15; break;
            };
            break;
    }
    let percentage = 100 - rating * 100 / 20;
    console.log(`The team of ${contry} get ${rating.toFixed(3)} on ${device}.`);
    console.log(`${percentage.toFixed(2)}%`);
}

gymnastics(["Bulgaria", "ribbon"]);
gymnastics(["Russia", "rope"]);
gymnastics(["Italy", "hoop"])
