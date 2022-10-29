function accountBalance(params) {
    let index = 0;
    let increase = params[index++];
    let total = 0;

    while (increase !== "NoMoreMoney") {
        increase = Number(increase);
        if (increase < 0) {
            console.log("Invalid operation!");
            break;
        }
        total += increase;
        console.log(`Increase: ${increase.toFixed(2)}`);
        increase = params[index++];
    }
    console.log(`Total: ${total.toFixed(2)}`);
}

accountBalance(["120", "45", "-150"])

