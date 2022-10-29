function travelAgency(input) {
    let town = input[0];
    let type = input[1];
    let vip = input[2];
    let day = Number(input[3]);
    let price = 0;
    if (day > 7) {
        day = day - 1;
    }
    switch (town) {
        case "Bansko":
        case "Borovets":
            switch (type) {
                case "withEquipment": price = day * 100;
                    if (vip === "yes") {
                        price = price * 0.9;
                    };
                    break;
                case "noEquipment": price = day * 80;
                    if (vip === "yes") {
                        price = price * 0.95;
                    };
                    break;
            };
            break;
        case "Varna":
        case "Burgas":
            switch (type) {
                case "withBreakfast": price = day * 130;
                    if (vip === "yes") {
                        price = price * 0.88;
                    };
                    break;
                case "noBreakfast": price = day * 100
                    if (vip === "yes") {
                        price = price * 0.93;
                    };
                    break;
            };
            break;
    }
    if (day < 1) {
        console.log("Days must be positive number!")
    } else if (price !== 0) {
        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`)
    } else {
        console.log("Invalid input!");
    }
}
travelAgency(["Borovets", "noEquipment", "yes", "6"]);
travelAgency(["Bansko", "withEquipment", "no", "2"]);
travelAgency(["Varna", "withBreakfast", "yes", "5"]);
travelAgency(["Burgas", "noBreakfast", "no", "4"]);
travelAgency(["Varna", "withBreakfast", "no", "0"]);
travelAgency(["Gabrovo", "noBreakfast", "no", "3"])