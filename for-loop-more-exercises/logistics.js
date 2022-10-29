function logistics(params) {
    let countCargoes = Number(params[0]);
    let totalCargoes = 0;
    let price = 0;
    let bus = 0;
    let truck = 0;
    let train = 0;

    for (i = 1; i <= countCargoes; i++) {

        let cargoes = Number(params[i]);
        totalCargoes += cargoes;

        if (cargoes <= 3) {
            price += cargoes * 200;
            bus += cargoes;
        } else if (cargoes >= 12) {
            price += cargoes * 120;
            train += cargoes;
        } else {
            price += cargoes * 175;
            truck += cargoes;
        }
    }
    let averagePraice = price / totalCargoes;

    percentageBus = bus * 100 / totalCargoes;
    percentagetruck = truck * 100 / totalCargoes;
    percentagetrain = train * 100 / totalCargoes;

    console.log(averagePraice.toFixed(2));
    console.log(percentageBus.toFixed(2) + "%");
    console.log(percentagetruck.toFixed(2) + "%");
    console.log(percentagetrain.toFixed(2) + "%");
}
logistics(["4", "1", "5", "16", "3"])

logistics(["5", "2", "10", "20", "1", "7"])



