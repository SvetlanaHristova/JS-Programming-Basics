function schoolCamp(input) {
    let season = input[0];
    let type = input[1];
    let count = Number(input[2]);
    let nigth = Number(input[3]);
    let price = 0;
    let sports;
    switch (season) {
        case "Winter":
            price = 9.60 * count * nigth;
            if (type === "mixed") {
                price = 10 * count * nigth
            }
            switch (type) {
                case "girls": sports = "Gymnastics"; break;
                case "boys": sports = "Judo"; break;
                case "mixed": sports = "Ski"; break;
            }
            break;
        case "Spring":
            price = 7.20 * count * nigth;
            if (type === "mixed") {
                price = 9.5 * count * nigth;
            }
            switch (type) {
                case "girls": sports = "Athletics"; break;
                case "boys": sports = "Tennis"; break;
                case "mixed": sports = "Cycling"; break;
            }
            break;
        case "Summer":
            price = 15 * count * nigth;
            if (type === "mixed") {
                price = 20 * count * nigth;
            }
            switch (type) {
                case "girls": sports = "Volleyball"; break;
                case "boys": sports = "Football"; break;
                case "mixed": sports = "Swimming"; break;
            }
            break;
    }
    if (count >= 50) {
        price = price * 0.5;
    } else if (count >= 20) {
        price = price * 0.85;
    } else if (count >= 10) {
        price = price * 0.95;
    }
    console.log(`${sports} ${price.toFixed(2)} lv.`);
}

schoolCamp(["Spring", "girls", 20, 7]);
schoolCamp(["Winter", "mixed", 9, 15]);
schoolCamp(["Summer", "boys", 60, 7]);
schoolCamp(["Spring", "mixed", 17, 14])