function tennisRanklist(params) {
    let index = 0;
    let countTournaments = Number(params[index]);
    index++;
    let startPoints = Number(params[index]);
    index++;
    let sum = 0;
    let win = 0;

    for (i = 1; i <= countTournaments; i++) {
        let tournamentsPoints = params[index];
        index++;

        switch (tournamentsPoints) {
            case "W": sum += 2000;
                win++;
                break;
            case "F": sum += 1200;
                break;
            case "SF": sum += 720;
                break;
        }
    }
    let finalPoints = startPoints + sum;
    let averagePoints = sum / countTournaments;
    let prWin = win * 100 / countTournaments;
    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${prWin.toFixed(2)}%`);

}
tennisRanklist(["7",
    "1200",
    "SF",
    "F",
    "W",
    "F",
    "W",
    "SF",
    "W"])

