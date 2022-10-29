function easterBake(params) {
    let index = 0;
    let countBake = Number(params[index++]);
    let countSugar = 0;
    let countFlour = 0;
    let maxSugar = 0;
    let maxFlour = 0;

    for (i = 1; i <= countBake; i++) {
        let sugar = Number(params[index++]);
        let flour = Number(params[index++]);
        countSugar += sugar;
        countFlour += flour;
        if (maxSugar < sugar) {
            maxSugar = sugar;
        }
        if (maxFlour < flour) {
            maxFlour = flour;
        }
    }

    packSugar = Math.ceil(countSugar / 950);
    packFlour = Math.ceil(countFlour / 750);

    console.log(`Sugar: ${packSugar}`);
    console.log(`Flour: ${packFlour}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
}
easterBake(["4",
    "500",
    "350",
    "560",
    "430",
    "600",
    "345",
    "578",
    "543"])

