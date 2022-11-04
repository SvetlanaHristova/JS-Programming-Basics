function sumOfTwoNumbers(params) {
    let startNum = Number(params[0]);
    let endNum = Number(params[1]);
    let magicNum = Number(params[2]);
    let combination = 0;
    let isHaveCombination = false;
    for (i = startNum; i <= endNum; i++) {
        for (j = startNum; j <= endNum; j++) {
            sum = i + j;
            combination++;
            if (sum === magicNum) {
                isHaveCombination = true;
                console.log(`Combination N:${combination} (${i} + ${j} = ${sum})`);
                break;
            }
        }
        if (isHaveCombination) {
            break;
        }
    }
    if (!isHaveCombination) {
        console.log(`${combination} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwoNumbers(["1", "10", "5"])