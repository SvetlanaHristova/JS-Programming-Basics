function bestPlayer(params) {
    let index = 0;
    let namePlayer = params[index++];
    let maxGoal = 0;
    let theBestPlayer = "";
    while (namePlayer !== "END") {
        let goal = Number(params[index++]);
        if (goal > maxGoal) {
            maxGoal = goal;
            theBestPlayer = namePlayer;
        }
        if (maxGoal >= 10) {
            break;
        }
        namePlayer = params[index++];
    }
    console.log(`${theBestPlayer} is the best player!`);
    if (maxGoal >= 3) {
        console.log(`He has scored ${maxGoal} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxGoal} goals.`);
    }
}
bestPlayer(["Zidane",
    "1",
    "Felipe",
    "2",
    "Johnson",
    "4",
    "END"])



