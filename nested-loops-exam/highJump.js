function highJump(params) {
    let index = 0;
    let record = Number(params[index++]);
    let jumps = 0;
    let height = record - 30;
    let isFalse = false;
    let tryHeight = 0;
    let counterFalse = 0;
    let isSucceeded = false;
    let isFinish = false;
    while (!isFinish) {
        tryHeight = Number(params[index++]);
        jumps++;
        if (isSucceeded) {
            height += 5;
        }
        if (tryHeight > height) {
            isSucceeded = true;
            counterFalse = 0;
            if (height >= record) {
                isFinish = true;
            }
        } else {
            counterFalse++;
            isSucceeded = false;
        }
        if (counterFalse === 3) {
            isFalse = true;
            console.log(`Tihomir failed at ${height}cm after ${jumps} jumps.`);
            break;
        }
    }
    if (!isFalse) {
        console.log(`Tihomir succeeded, he jumped over ${height}cm after ${jumps} jumps.`);
    }
}
highJump(["231",
    "205",
    "212",
    "213",
    "228",
    "229",
    "230",
    "230",
    "230", "230", "230"])



