function examPreparation(params) {
    let index = 0;
    let negativeCount = Number(params[index++]);
    let taskName = params[index++];
    let count = 0;
    let score = 0;
    let fail = 0;
    let lastName = "";
    let isNeedBreak = false;
    while (taskName !== "Enough") {
        let assess = Number(params[index++]);
        lastName = taskName;
        taskName = (params[index++]);
        if (fail >= negativeCount) {
            console.log(`You need a break, ${fail} poor grades.`);
            isNeedBreak = true;
            break;
        }
        count++;
        score += assess;
        if (assess <= 4) {
            fail++;
            continue;
        }
    }
    if (!isNeedBreak) {
        let average = score / count;
        console.log(`Average score: ${average.toFixed(2)}`);
        console.log(`Number of problems: ${count}`);
        console.log(`Last problem: ${lastName}`);
    }
}

examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"])

examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"])


