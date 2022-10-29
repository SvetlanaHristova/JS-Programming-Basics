function cake(params) {
    let index = 0;
    let w = Number(params[index++]);
    let l = Number(params[index++]);
    let area = w * l;
    let commond = params[index++];
    let haveCake = true;

    while (commond !== "STOP") {
        let pieses = Number(commond);
        area -= pieses;

        if (area < 0) {
            haveCake = false;
            console.log(`No more cake left! You need ${Math.abs(area)} pieces more.`);
            break;
        } else if (area === 0) {
            haveCake = false;
            console.log(`${area} pieces are left.`);
            break;
        }
        commond = params[index++];
    }

    if (haveCake) {
        console.log(`${area} pieces are left.`);
    }
}
cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"])


