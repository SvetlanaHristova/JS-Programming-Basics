function specialNumbers(params) {
    let n = Number(params[0]);
    let buff = "";
    let curentNum = "";

    for (a = 1; a <= 9; a++) {
        for (b = 1; b <= 9; b++) {
            for (c = 1; c <= 9; c++) {
                for (d = 1; d <= 9; d++) {
                    if (n % a === 0 && n % b === 0 && n % c === 0 && n % d === 0) {
                        curentNum = "" + a + b + c + d;
                        buff += curentNum + " ";
                    }
                }
            }
        }
    }

    console.log(buff);
}
specialNumbers(["3"]);
specialNumbers(["11"]);
specialNumbers(["16"])