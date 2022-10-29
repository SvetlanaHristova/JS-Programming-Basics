function coffeeMachine(input) {
    let type = input[0];
    let sugar = input[1];
    let count = Number(input[2]);
    switch (type) {
        case "Espresso":
            switch (sugar) {
                case "Without": price = count * 0.9 * 0.65; break;
                case "Normal": price = count * 1; break;
                case "Extra": price = count * 1.2; break;
            }; break;
        case "Cappuccino":
            switch (sugar) {
                case "Without": price = count * 1 * 0.65; break;
                case "Normal": price = count * 1.2; break;
                case "Extra": price = count * 1.6; break;
            }; break;
        case "Tea":
            switch (sugar) {
                case "Without": price = count * 0.5 * 0.65; break;
                case "Normal": price = count * 0.6; break;
                case "Extra": price = count * 0.7; break;
            }; break;
    }
    if (type === "Espresso" && count >= 5) {
        price = price * 0.75;
    }
    if (price > 15) {
        price = price * 0.8;
    }
    console.log(`You bought ${count} cups of ${type} for ${price.toFixed(2)} lv.`);
}
coffeeMachine(["Espresso", "Without", "10"]);
coffeeMachine(["Cappuccino", "Normal", "13"]);
coffeeMachine(["Tea", "Extra", "3"])
