function basketballEquipment(input) {
    let tax = Number(input);

    let priceSneakers = tax * 0.6;
    let priceOutfit = priceSneakers * 0.8;
    let priceBoll = priceOutfit / 4;
    let priseAccessories = priceBoll / 5;
    let totalPrice = (tax + priceSneakers + priceOutfit + priceBoll + priseAccessories).toFixed(2);

    console.log(totalPrice);

}

basketballEquipment("320")
