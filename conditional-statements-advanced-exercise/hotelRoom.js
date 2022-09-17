function hotelRoom(params) {
    let month = params[0];
    let coovernight = Number(params[1]);
    let priceStudio = 1;
    let priceApartment = 1;
    switch (month) {
        case "May":
        case "October":
            priceStudio = priceStudio * coovernight * 50;
            priceApartment = priceApartment * coovernight * 65;
            if (coovernight > 14) {
                priceStudio = priceStudio * 0.7;
            } else if (coovernight > 7) {
                priceStudio = priceStudio * 0.95;
            }; break;
        case "June":
        case "September":
            priceStudio = priceStudio * coovernight * 75.20;
            priceApartment = priceApartment * coovernight * 68.70;
            if (coovernight > 14) {
                priceStudio = priceStudio * 0.8;
            }; break;
        case "July":
        case "August":
            priceStudio = priceStudio * coovernight * 76;
            priceApartment = priceApartment * coovernight * 77;
            break;
    }
    if (coovernight > 14) {
        priceApartment = priceApartment * 0.9;
    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}

hotelRoom(["August",
    "20"])


