function sumNumbers(params) {
    let index = 0;
    let limit = Number(params[index++]);
    let sum = Number(params[index++]);

    while (sum < limit) {
        let num = Number(params[index++]);
        sum += num;
    }
    console.log(sum);
}

sumNumbers(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"])

