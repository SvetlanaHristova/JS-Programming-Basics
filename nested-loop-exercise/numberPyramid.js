function numberPyramid(params) {
    let num = Number(params[0]);
    let curentNumber = 0;
    let isOK = true;
    for (let i = 1; i <= num; i++) {
        let row = "";
        for (let j = 0; j < i; j++) {
            curentNumber++;
            row = row + " " + curentNumber;
            if (curentNumber === num) {
                isOK = false;
                console.log(row);
                break;
            }
        }
        if (isOK) {
            console.log(row);
        }
    }
}
numberPyramid(["7"]);
numberPyramid(["12"]);
numberPyramid(["15"])