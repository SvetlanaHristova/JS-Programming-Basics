function divisionWithoutRemainder(params) {
    let index = 0;
    let n = Number(params[index++]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    for (i = 1; i <= n; i++) {
        let num = Number(params[index++]);
        if (num % 2 === 0) {
            p1++;
        }
        if (num % 3 === 0) {
            p2++;
        }
        if (num % 4 === 0) {
            p3++;
        }
    }
    p1 = p1 * 100 / n;
    p2 = p2 * 100 / n;
    p3 = p3 * 100 / n;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
}
divisionWithoutRemainder
    (["3",
        "3",
        "6",
        "9"])

