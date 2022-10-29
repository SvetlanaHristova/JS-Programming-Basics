function paintingEggs(input) {
    let size = input[0];
    let color = input[1];
    let count = Number(input[2]);
    let price = 0;;
    switch (size) {
        case "Large":
            switch (color) {
                case "Red": price = count * 16; break;
                case "Green": price = count * 12; break;
                case "Yellow": price = count * 9; break;
            }; break;
        case "Medium":
            switch (color) {
                case "Red": price = count * 13; break;
                case "Green": price = count * 9; break;
                case "Yellow": price = count * 7; break;
            }; break;
        case "Small":
            switch (color) {
                case "Red": price = count * 9; break;
                case "Green": price = count * 8; break;
                case "Yellow": price = count * 5; break;
            }; break;
    }

    let totalPrice = price * 0.65;
    console.log(`${totalPrice.toFixed(2)} leva.`);
}

paintingEggs(["Large", "Red", "7"]);
paintingEggs(["Medium", "Green", "5"]);
paintingEggs(["Small", "Yellow", "3"])
