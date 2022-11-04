function luckyNumbers(params) {
    let num = Number(params[0]);
    let buffer = "";
    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    let first = a + b;
                    let second = c + d;
                    if (first === second && num % first === 0) {
                        let lucky = "" + a + b + c + d;
                        buffer += lucky + " ";
                    }
                }
            }
        }
    }
    console.log(buffer);
}
luckyNumbers([24])