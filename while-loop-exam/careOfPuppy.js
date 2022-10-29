function careOfPuppy(params) {
    let index = 0;
    let foodKg = Number(params[index++]);
    let commond = params[index++];
    let food = foodKg * 1000;
    while (commond !== `Adopted`) {
        let foodEat = Number(commond);
        food -= foodEat;
        commond = params[index++];
    }
    if (food >= 0) {
        console.log(`Food is enough! Leftovers: ${food} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(food)} grams more.`);
    }
}
careOfPuppy(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"])