function reportSystem(params) {
    let index = 0;
    let needSum = Number(params[index++]);
    let commond = params[index++];
    let sumCC = 0;
    let sumCS = 0;
    let count = 0;
    let cs = 0;
    let cc = 0;
    let isEnough = false;
    while (commond !== "End") {
        let transaction = Number(commond);
        count++;
        if (count % 2 === 0 && transaction >= 10) {
            console.log("Product sold!");
            cc++;
            sumCC += transaction;
        } else if (count % 2 === 1 && transaction <= 100) {
            console.log("Product sold!");
            cs++;
            sumCS += transaction;
        } else {
            console.log("Error in transaction!");
        }
        let sum = sumCC + sumCS;
        if (sum >= needSum) {
            isEnough = true;
            console.log(`Average CS: ${(sumCS / cs).toFixed(2)}`);
            console.log(`Average CC: ${(sumCC / cc).toFixed(2)}`);
            break;
        }
        commond = params[index++];
    }
    if (!isEnough) {
        console.log("Failed to collect required money for charity.");
    }
}