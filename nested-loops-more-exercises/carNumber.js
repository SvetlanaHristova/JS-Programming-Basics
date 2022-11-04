function carNumber(params) {
    let start = Number(params[0]);
    let end = Number(params[1]);
    let buffer = "";
    for (let a = start; a <= end; a++) {
        for (let b = start; b <= end; b++) {
            for (let c = start; c <= end; c++) {
                for (let d = start; d <= end; d++) {
                    let bc = b + c;
                    if (((a % 2 === 0 && d % 2 !== 0) ||
                        (a % 2 !== 0 && d % 2 === 0)) &&
                        (a > d) && (bc % 2 === 0)) {
                        let num = "" + a + b + c + d;
                        buffer += num + " ";
                    }
                }
            }
        }
    }
    console.log(buffer);
}
carNumber(["2", "3"])