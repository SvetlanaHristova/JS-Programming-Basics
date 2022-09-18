function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let count = Number(input[2]);
    let price = 0;
    if (city === "Sofia") {
        //coffee	water	beer	sweets	peanuts
        //0.50	    0.80	1.20	1.45	1.60
        switch (product) {
            case "coffee": price = 0.5 * count; break;
            case "water": price = 0.8 * count; break;
            case "beer": price = 1.2 * count; break;
            case "sweets": price = 1.45 * count; break;
            case "peanuts": price = 1.6 * count; break;
        }
    } else if (city === "Plovdiv") {
        //coffee	water	beer	sweets	peanuts
        //0.40  	0.70	1.15	1.30	1.50
        switch (product) {
            case "coffee": price = 0.4 * count; break;
            case "water": price = 0.7 * count; break;
            case "beer": price = 1.15 * count; break;
            case "sweets": price = 1.30 * count; break;
            case "peanuts": price = 1.5 * count; break;
        }
    } else if (city === "Varna") {
        //coffee	water	beer	sweets	peanuts
        //0.45   	0.70	1.10	1.35	1.55
        switch (product) {
            case "coffee": price = 0.45 * count; break;
            case "water": price = 0.7 * count; break;
            case "beer": price = 1.10 * count; break;
            case "sweets": price = 1.35 * count; break;
            case "peanuts": price = 1.55 * count; break;
        }
    }
    console.log(price);
}

smallShop(["peanuts", "Plovdiv", "1"])

