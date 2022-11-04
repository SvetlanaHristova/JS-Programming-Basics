function safePasswordsGenerator(params) {
    let endA = Number(params[0]);
    let endB = Number(params[1]);
    let counterPass = Number(params[2]);
    let totalPass = "";
    let simbolA = 35;
    let simbolB = 64;

    for (let a = 1; a <= endA; a++) {

        for (let b = 1; b <= endB; b++) {
            if (counterPass === 0) {
                break;
            }
            if (simbolA === 56) {
                simbolA = 35;
            }
            if (simbolB === 97) {
                simbolB = 64;
            }

            let pass = "" + String.fromCharCode(simbolA) + String.fromCharCode(simbolB) + a + b + String.fromCharCode(simbolB) + String.fromCharCode(simbolA);
            totalPass += pass + "|";
            simbolA++;
            simbolB++;
            counterPass--;

        }
        if (a === endA) {
            break;
        }
    }
    console.log(totalPass);
}
safePasswordsGenerator(["2", "3", "10"])