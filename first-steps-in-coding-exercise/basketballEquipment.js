function basketballEquipment(input) {
    let tax = Number(input[0]);
    let sneakers = tax - 0.4 * tax;
    let kit = sneakers - sneakers * 0.2;
    let boll = kit / 4;
    let accessories = boll / 5;
    let equipment = tax + sneakers + kit + boll + accessories;
    console.log(equipment);
}



basketballEquipment(["365 "])
