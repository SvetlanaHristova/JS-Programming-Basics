function uniquePINCodes(params) {
    let index = 0;
    let limit1 = Number(params[index++]);
    let limit2 = Number(params[index++]);
    let limit3 = Number(params[index++]);
    for (let a = 2; a <= limit1; a += 2) {
        for (let b = 2; b <= limit2; b++) {
            if ((b === 4 || b === 6) || b > 7) {
                continue;
            }
            for (let c = 2; c <= limit3; c += 2) {
                let pin = `${a} ${b} ${c}`;
                console.log(pin);
            }
        }
    }
}
uniquePINCodes(["3", "9", "3"])
