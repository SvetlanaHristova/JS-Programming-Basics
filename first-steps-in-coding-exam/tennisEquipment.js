function tennisEquipment(input) {
    let priceRocket = Number(input[0]);
    let numberRockets = Number(input[1]);
    let numberSneakers = Number(input[2]);
    let priseSneakers = priceRocket / 6;
    let priceNJ = Math.floor((priceRocket * numberRockets + priseSneakers * numberSneakers) * 1.2 / 8);
    let priceSponsors = Math.ceil((priceRocket * numberRockets + priseSneakers * numberSneakers) * 1.2 * 7 / 8);

    console.log(`Price to be paid by Djokovic ${priceNJ}`);
    console.log(`Price to be paid by sponsors ${priceSponsors}`);
}

tennisEquipment(["850", "4", "2",])
