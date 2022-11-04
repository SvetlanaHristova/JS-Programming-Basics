function happyCatParking(params) {
    let day = Number(params[0]);
    let hours = Number(params[1]);
    totalSum = 0;
    for (let i = 1; i <= day; i++) {
        let sum = 0;
        for (let j = 1; j <= hours; j++) {
            if (i % 2 === 0 && j % 2 === 1) {
                sum += 2.5;
            } else if (i % 2 === 1 && j % 2 === 0) {
                sum += 1.25;
            } else {
                sum += 1;
            }
        }
        console.log(`Day: ${i} - ${sum.toFixed(2)} leva`);
        totalSum += sum;
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}
happyCatParking(["2", "5"])
