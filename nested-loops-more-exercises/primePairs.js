function primePairs(params) {
    let startFirstNum = Number(params[0]);
    let startSecondtNum = Number(params[1]);
    let firstNumRange = Number(params[2]);
    let secondNumRange = Number(params[3]);
    let endFirstNum = startFirstNum + firstNumRange;
    let endSecondNum = startSecondtNum + secondNumRange;

    for (let i = startFirstNum; i <= endFirstNum; i++) {
        for (let j = startSecondtNum; j <= endSecondNum; j++) {
            let firstNum = false;
            let secondNum = false;
            for (let a = 2; a < i; a++) {
                if (i % a === 0) {
                    firstNum = true;
                    break;
                }
                for (let b = 2; b < j; b++) {
                    if (j % b === 0) {
                        secondNum = true;
                        break;
                    }
                }
            }
            if (!firstNum && !secondNum) {
                console.log(`${i}${j}`);
                firstNum = false;
                secondNum = false;
            }
        }
    }
}

primePairs(["10", "30", "9", "6"])