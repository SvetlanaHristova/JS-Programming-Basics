function walking(params) {
    let index = 0;
    let steps = params[index++];
    let diff = 0;
    let isTired = false;
    let totalStep = 0;
    while (steps !== "Going home") {
        let moreSteps = Number(steps);
        totalStep += moreSteps;

        if (totalStep >= 10000) {
            diff = Math.abs(totalStep - 10000);
            console.log("Goal reached! Good job!");
            console.log(`${diff} steps over the goal!`);
            isTired = true;
            break;
        }
        steps = params[index++];
    }
    if (!isTired) {
        let lastSteps = Number(params[index++]);
        totalStep += lastSteps;
        diff = Math.abs(10000 - totalStep);
        if (totalStep >= 10000) {
            console.log("Goal reached! Good job!");
            console.log(`${diff} steps over the goal!`);
        } else {
            console.log(`${diff} more steps to reach goal.`);
        }
    }
}

walking(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"])




