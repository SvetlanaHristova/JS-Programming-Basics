function auminumJoinery(input) {
    let count = Number(input[0]);
    let type = input[1];
    let delivery = input[2];
    let price = 0;
    switch (type) {
        case "90X130":
            if (count <= 30) {
                price = count * 110;
            } else if (count > 60) {
                price = count * 110 * 0.92;
            } else if (count <= 60) {
                price = count * 110 * 0.95;
            }; break;
        case "100X150":
            if (count >= 10 && count <= 40) {
                price = count * 140;
            } else if (count > 80) {
                price = count * 140 * 0.90;
            } else if (count <= 80) {
                price = count * 140 * 0.94;
            }; break;
        case "130X180":
            if (count >= 10 && count <= 20) {
                price = count * 190;
            } else if (count > 50) {
                price = count * 190 * 0.88;
            } else if (count <= 50) {
                price = count * 190 * 0.93
            }; break;
        case "200X300":
            if (count >= 10 && count <= 25) {
                price = count * 250;
            } else if (count > 50) {
                price = count * 250 * 0.86;
            } else if (count <= 50) {
                price = count * 250 * 0.91;
            }; break;
    }
    if (delivery === "With delivery") {
        price = price + 60;
    }
    if (count > 99) {
        price = price * 0.96;
    }
    if (count <= 10) {
        console.log("Invalid order");
    } else {
        console.log(`${price.toFixed(2)} BGN`);
    }
}
auminumJoinery(["40", "90X130", "Without delivery"]);
auminumJoinery(["105", "100X150", "With delivery"]);
auminumJoinery(["2", "130X180", "With delivery"])
