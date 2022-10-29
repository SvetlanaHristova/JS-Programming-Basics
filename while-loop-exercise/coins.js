function coins(params) {
    let sumInLv = Number(params[0]);
    let sum = Math.floor(sumInLv * 100);
    let count = 0;

    while (sum > 0) {
        count++;
        if (sum >= 200) {
            sum -= 200;
        } else if (sum >= 100) {
            sum -= 100;
        } else if (sum >= 50) {
            sum -= 50;
        } else if (sum >= 20) {
            sum -= 20;
        } else if (sum >= 10) {
            sum -= 10;
        } else if (sum >= 5) {
            sum -= 5;
        } else if (sum >= 2) {
            sum -= 2;
        } else if (sum >= 1) {
            sum -= 1;
        }
    }
    console.log(count);
}
coins(["0.23"])