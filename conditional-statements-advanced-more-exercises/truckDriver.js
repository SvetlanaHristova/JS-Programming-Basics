function truckDriver(input) {
    let season = input[0];
    let km = Number(input[1]);
    let price = 0;
    if (km > 10000 && km <= 20000) {
        price = km * 4 * 1.45;
    } else if (km > 5000 && km <= 10000) {
        switch (season) {
            case "Spring":
            case "Autumn": price = km * 4 * 0.95; break;
            case "Summer": price = km * 4 * 1.1; break;
            case "Winter": price = km * 4 * 1.25; break;
        }
    } else {
        switch (season) {
            case "Spring":
            case "Autumn": price = km * 4 * 0.75; break;
            case "Summer": price = km * 4 * 0.9; break;
            case "Winter": price = km * 4 * 1.05; break;
        }
    }
    price = price * 0.9;
    console.log(price.toFixed(2));
}
truckDriver(["Summer", 3455]);
truckDriver(["Winter", 4350]);
truckDriver(["Spring", 1600]);
truckDriver(["Winter", 5678]);
truckDriver(["Autumn", 8600]);
truckDriver(["Winter", 16042]);
truckDriver(["Spring", 16942])
