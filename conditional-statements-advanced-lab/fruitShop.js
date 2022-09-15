function fruitShop(input) {
    let fruit = input[0];
    let dayOfTheWeek = input[1];
    let quantity = Number(input[2]);
    let price = 0;

    if (dayOfTheWeek === "Monday" || dayOfTheWeek === "Tuesday"
        || dayOfTheWeek === "Wednesday" || dayOfTheWeek === "Thursday "
        || dayOfTheWeek === "Friday") {

        switch (fruit) {
            case "banana": price = quantity * 2.5; break;
            case "apple": price = quantity * 1.2; break;
            case "orange": price = quantity * 0.85; break;
            case "grapefruit": price = quantity * 1.45; break;
            case "kiwi": price = quantity * 2.7; break;
            case "pineapple": price = quantity * 5.5; break;
            case "grapes": price = quantity * 3.85; break;
            default: price = "error"; break;
        }
    } else if (dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday") {

        switch (fruit) {
            case "banana": price = quantity * 2.7; break;
            case "apple": price = quantity * 1.25; break;
            case "orange": price = quantity * 0.9; break;
            case "grapefruit": price = quantity * 1.6; break;
            case "kiwi": price = quantity * 3; break;
            case "pineapple": price = quantity * 5.6; break;
            case "grapes": price = quantity * 4.2; break;
            default: price = "error"; break;
        }

    } else {
        price = "error";
    }

    if (price === "error") {
        console.log("error");
    } else {
        console.log(price.toFixed(2));
    }
}
fruitShop(["apple",
    "Monday",
    "0.5"])













