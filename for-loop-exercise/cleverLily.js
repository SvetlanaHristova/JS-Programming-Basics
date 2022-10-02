function cleverLily(params) {
    let index = 0;
    let age = Number(params[index]);
    index++;
    let priceWash = Number(params[index]);
    index++;
    let priceToy = Number(params[index]);
    index++;
    money = 0;
    corMoney = 10;
    toy = 0;

    for (i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            money += corMoney;
            corMoney += 10;
            money--;
        } else {
            toy++;
        }
    }
    money += toy * priceToy;
    diff = Math.abs(money - priceWash).toFixed(2);
    if (money >= priceWash) {
        console.log(`Yes! ${diff}`);
    } else
        console.log(`No! ${diff}`);
};

cleverLily(["21",
    "1570.98",
    "3"]);
