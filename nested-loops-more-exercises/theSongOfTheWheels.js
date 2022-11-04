function theSongOfTheWheels(params) {
    let m = Number(params[0]);
    let totalCombination = "";
    let validCombination = "";
    let counterCombination = 0;
    let pass = "";
    isHavePass = false;
    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    let controle = a * b + c * d;
                    if (controle === m && a < b && c > d) {
                        counterCombination++;
                        validCombination = "" + a + b + c + d;
                        if (counterCombination === 4) {
                            isHavePass = true;
                            pass = validCombination;
                        }
                        totalCombination += validCombination + " ";
                    }
                }
            }
        }
    }
    if (totalCombination !== "") {
        console.log(totalCombination);
    }
    if (isHavePass) {
        console.log(`Password: ${pass}`);
    } else {
        console.log("No!");
    }
}
theSongOfTheWheels(["11"])