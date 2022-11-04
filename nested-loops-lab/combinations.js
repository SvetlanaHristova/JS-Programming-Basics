function combinations(params) {
    let n = Number(params[0]);
    let count = 0;
    for (let a = 0; a <= n; a++) {
        for (let b = 0; b <= n; b++) {
            for (let c = 0; c <= n; c++) {
                let res = a + b + c;
                if (res === n) {
                    count++;
                }
            }
        }
    }
    console.log(count)
}
combinations(["25"]);
combinations(["20"]);
combinations(["5"])