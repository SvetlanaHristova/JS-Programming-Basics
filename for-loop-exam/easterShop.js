function easterShop(params) {
    let index = 0;
    let countEggs = Number(params[index]);
    index++;
    let soldEggs = 0;

    for (let i = 1; i <= params.length / 2; i++) {
        let turnover = params[index];
        index++;
        let eggs = Number(params[index]);
        index++;
        if (turnover === "Close") {
            console.log("Store is closed!");
            console.log(`${soldEggs} eggs sold.`);
            break;
        }
        if (eggs > countEggs && turnover === "Buy") {
            console.log("Not enough eggs in store!");
            console.log(`You can buy only ${countEggs}.`);
            break;
        }
        switch (turnover) {
            case "Buy": countEggs -= eggs;
                soldEggs += eggs; break;
            case "Fill": countEggs += eggs; break;
        }
    }
}