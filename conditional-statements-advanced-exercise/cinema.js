function cinema(input) {
    let type = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    let income = 0;
    switch (type) {
        case "Premiere": income = c * r * 12
            break;
        case "Normal": income = c * r * 7.5
            break;
        case "Discount": income = c * r * 5
            break;
    }
    console.log(`${income.toFixed(2)} leva`);
}

cinema(["Premiere", "10", "12"])
