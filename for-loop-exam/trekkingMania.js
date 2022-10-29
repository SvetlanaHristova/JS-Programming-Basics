function trekkingMania(params) {
    let index = 0;
    let countGrup = Number(params[index]);
    index++;
    let mountaintopMusala = 0;
    let mountaintopMonblan = 0;
    let mountaintopKilimandjaro = 0;
    let mountaintopK2 = 0;
    let mountaintopEverest = 0;
    sum = 0;
    for (i = 1; i <= countGrup; i++) {
        let n = Number(params[index]);
        index++;
        sum += n;
        if (n <= 5) {
            mountaintopMusala += n;
        } else if (n >= 6 && n < 13) {
            mountaintopMonblan += n;
        } else if (n >= 13 && n < 26) {
            mountaintopKilimandjaro += n;
        } else if (n >= 26 && n < 41) {
            mountaintopK2 += n;
        } else {
            mountaintopEverest += n;
        }
    }
    let percentageMusala = mountaintopMusala * 100 / sum;
    let percentageMonblan = mountaintopMonblan * 100 / sum;
    let percentageKilimandjaro = mountaintopKilimandjaro * 100 / sum;
    let percentageK2 = mountaintopK2 * 100 / sum;
    let percentageEverest = mountaintopEverest * 100 / sum;
    console.log(percentageMusala.toFixed(2) + "%");
    console.log(percentageMonblan.toFixed(2) + "%");
    console.log(percentageKilimandjaro.toFixed(2) + "%");
    console.log(percentageK2.toFixed(2) + "%");
    console.log(percentageEverest.toFixed(2) + "%");
}

trekkingMania(["5",
    "25",
    "41",
    "31",
    "250",
    "6"])

