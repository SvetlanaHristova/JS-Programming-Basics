function sumOfTwoNumbers(params) {
    let index = 0;
    let startNum = Number(params[index++]);
    let endNum = Number(params[index++]);
    let magicNum = Number(params[index++]);
    let combinationCounter = 0;
    let isNonCombination = true;
    for (let i = startNum; i <= endNum; i++) {
        for (let j = startNum; j <= endNum; j++) {
            let res = i + j;
            combinationCounter++;
            if (res === magicNum) {
                isNonCombination = false;
                console.log(`Combination N:${combinationCounter} (${i} + ${j} = ${res})`);
                break;
            }
        }
        if (!isNonCombination) {
            break;
        }
    }
    if (isNonCombination) {
        console.log(`${combinationCounter} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwoNumbers(["1",
    "10",
    "5"]);
sumOfTwoNumbers(["23",
    "24",
    "20"]);
sumOfTwoNumbers(["88",
    "888",
    "1000"]);
sumOfTwoNumbers(["88",
    "888",
    "2000"])
