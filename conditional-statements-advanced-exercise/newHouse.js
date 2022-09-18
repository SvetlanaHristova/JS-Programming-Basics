function newHouse(params) {
    let type = params[0];
    let count = Number(params[1]);
    let budget = Number(params[2]);
    let price = 0;
    //"Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
    //   5   	3.80	  2.80	         3	      2.50
    switch (type) {
        case "Roses":
            price = 5 * count;
            if (count > 80) {
                price = price * 0.9;
            }; break;
        case "Dahlias":
            price = 3.8 * count;
            if (count > 90) {
                price = price * 0.85;
            }; break;
        case "Tulips":
            price = 2.8 * count;
            if (count > 80) {
                price = price * 0.85;
            }; break;
        case "Narcissus":
            price = 3 * count;
            if (count < 120) {
                price = price * 1.15;
            }; break;
        case "Gladiolus":
            price = 2.5 * count;
            if (count < 80) {
                price = price * 1.2;
            }; break;
    }
    let diff = Math.abs(price - budget).toFixed(2);
    if (price > budget) {
        console.log(`Not enough money, you need ${diff} leva more.`);
    } else {
        console.log(`Hey, you have a great garden with ${count} ${type} and ${diff} leva left.`);
    }
}


newHouse(["Narcissus",
    "0",
    "410.55"])



