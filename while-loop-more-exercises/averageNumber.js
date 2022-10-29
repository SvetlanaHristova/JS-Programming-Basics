function averageNumber(params) {
    let index = 0;
    let n = Number(params[index++]);
    let sum = 0;
    for (i = 1; i <= n; i++) {
        let a = Number(params[index++]);
        sum += a;
    }
    let average = sum / n;
    console.log(average.toFixed(2));
}