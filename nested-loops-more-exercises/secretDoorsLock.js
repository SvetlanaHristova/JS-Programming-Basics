function secretDoorsLock(params) {
    let limitA = Number(params[0]);
    let limitB = Number(params[1]);
    let limitC = Number(params[2]);

    for (let a = 2; a <= limitA; a += 2) {
        for (let b = 2; b <= limitB; b++) {
            if (b === 4 || b === 6 || b > 7) {
                continue;
            }
            for (let c = 2; c <= limitC; c += 2) {
                console.log(`${a} ${b} ${c}`);
            }
        }
    }
}
secretDoorsLock(["9", "9", "9"])

