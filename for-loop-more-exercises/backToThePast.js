function backToThePast(params) {
    let money = Number(params[0]);
    let year = Number(params[1]);
    let age = 18;
    for (let i = 1800; i <= year; i++) {
        if (i % 2 === 0) {
            money -= 12000;
        } else {
            money -= (12000 + 50 * age);
        }
        age++;
    }
    if (money >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(money).toFixed(2)} dollars to survive.`);
    }
}