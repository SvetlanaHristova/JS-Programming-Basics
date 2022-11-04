function profit(params) {
    let oneLv = Number(params[0]);
    let twoLv = Number(params[1]);
    let fiveLv = Number(params[2]);
    let needSum = Number(params[3]);
    for (let i = 0; i <= oneLv; i++) {
        for (let j = 0; j <= twoLv; j++) {
            for (let k = 0; k <= fiveLv; k++) {
                let sum = i * 1 + j * 2 + k * 5;
                if (sum === needSum) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}
profit(["5", "3", "1", "7"])