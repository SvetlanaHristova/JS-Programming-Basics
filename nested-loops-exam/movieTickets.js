function movieTickets(params) {
    let a1 = Number(params[0]);
    let a2 = Number(params[1]);
    let n = Number(params[2]);

    for (let i = a1; i <= a2 - 1; i++) {

        for (let j = 1; j <= n - 1; j++) {

            for (let k = 1; k <= (n / 2) - 1; k++) {
                let simvil1 = String.fromCharCode(i);
                let simbol2 = j;
                let simbol3 = k;
                let simbol4 = i;
                let sum = j + k + i;
                if (i % 2 !== 0 && sum % 2 !== 0) {
                    console.log(`${simvil1}-${simbol2}${simbol3}${simbol4}`);
                }
            }
        }
    }
}
movieTickets(["71",
    "74",
    "6"])


