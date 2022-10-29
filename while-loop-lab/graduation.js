function graduation(params) {
    let index = 0;
    let name = params[index++];
    let grade = 0;
    let count = 0;
    let fail = 0;
    while (true) {
        let currentGrade = Number(params[index++]);
        if (fail === 1) {
            console.log(`${name} has been excluded at ${count} grade`);
            break;
        }

        if (currentGrade < 4) {
            fail++;
            count++;
            continue;
        }
        grade += currentGrade;
        count++;

        if (count >= 12) {
            let average = grade / count;
            console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
            break;
        }
    }
}

graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])

