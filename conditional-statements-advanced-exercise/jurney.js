function jurney(params) {
    let budjet = Number(params[0]);
    let season = params[1];
    let type;
    let destination;
    let cost = 0;
    //"Bulgaria", "Balkans" и "Europe"
    //"summer" или "winter"
    //"Camp" и "Hotel"
    if (budjet <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            type = "Camp";
            cost = budjet * 0.3;
        } else {
            type = "Hotel"
            cost = budjet * 0.7;
        }
    } else if (budjet <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            type = "Camp";
            cost = budjet * 0.4;
        } else {
            type = "Hotel";
            cost = budjet * 0.8;
        }
    } else {
        destination = "Europe";
        type = "Hotel";
        cost = budjet * 0.9;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${cost.toFixed(2)}`);
}
jurney(["1500", "summer"])