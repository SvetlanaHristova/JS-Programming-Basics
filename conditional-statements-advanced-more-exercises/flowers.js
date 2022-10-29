function flowers(input) {
    let chrysanthemums = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let type = input[4];
    switch (season) {
        case "Spring":
        case "Summer": price = chrysanthemums * 2 + roses * 4.1 + tulips * 2.5; break;
        case "Autumn":
        case "Winter": price = chrysanthemums * 3.75 + roses * 4.5 + tulips * 4.15; break;
    }
    if (type === "Y") {
        price = price * 1.15;
    }
    if (tulips > 7 && season === "Spring") {
        price = price * 0.95;
    }
    if (roses >= 10 && season === "Winter") {
        price = price * 0.9;
    }
    if ((chrysanthemums + roses + tulips) > 20) {
        price = price * 0.8;
    }
    price = price + 2;
    console.log(price.toFixed(2));
}
flowers([2, 4, 8, "Spring", "Y"]);
flowers([3, 10, 9, "Winter", "N"]);
flowers([10, 10, 10, "Autumn", "N"])