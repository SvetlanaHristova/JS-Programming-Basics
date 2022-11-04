function easterDecoration(params) {
    let index = 0;
    let countCustomers = Number(params[index++]);
    let totalSum = 0;

    for (let i = 1; i <= countCustomers; i++) {
        let goods = params[index++];
        let counterGoods = 0;
        let price = 0;

        while (goods !== "Finish") {
            switch (goods) {
                case "basket": price += 1.5, counterGoods++; break;
                case "wreath": price += 3.80, counterGoods++; break;
                case "chocolate bunny": price += 7, counterGoods++; break;
            }
            goods = params[index++];
        }

        if (counterGoods % 2 === 0) {
            price *= 0.8;
        }

        console.log(`You purchased ${counterGoods} items for ${price.toFixed(2)} leva.`);
        totalSum += price;
    }

    let averigePrice = totalSum / countCustomers;
    console.log(`Average bill per client is: ${averigePrice.toFixed(2)} leva.`);
}
easterDecoration(["2",
    "basket",
    "wreath",
    "chocolate bunny",
    "Finish",
    "wreath",
    "chocolate bunny",
    "Finish"])

