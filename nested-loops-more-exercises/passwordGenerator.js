function passwordGenerator(params) {
    let n = Number(params[0]);
    let l = Number(params[1]);
    let totalpass = "";
    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            for (let c = 97; c < (97 + l); c++) {
                for (let d = 97; d < (97 + l); d++) {
                    for (let e = 1; e <= n; e++) {
                        if (e > a && e > b) {
                            let pass = "" + a + b + String.fromCharCode(c) + String.fromCharCode(d) + e;
                            totalpass += pass + " ";
                        }
                    }
                }
            }
        }
    }
    console.log(totalpass)
}
passwordGenerator(["4", "2"])