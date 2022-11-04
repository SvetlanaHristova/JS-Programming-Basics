function challengeTheWedding(params) {
    let countMen = Number(params[0]);
    let countWoman = Number(params[1]);
    let counTable = Number(params[2]);
    buffer = "";
    for (let i = 1; i <= countMen; i++) {
        for (let j = 1; j <= countWoman; j++) {
            if (counTable > 0) {
                let datting = "" + "(" + i + " <-> " + j + ") ";
                counTable--;
                buffer += datting;
            }
        }
    }
    console.log(buffer);
}
challengeTheWedding(["2", "2", "3"])