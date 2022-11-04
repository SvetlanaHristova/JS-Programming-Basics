function easterCompetition(params) {
    let index = 0;
    let countEasterbread = Number(params[index++]);
    let winPoints = 0;

    for (let i = 1; i <= countEasterbread; i++) {
        let nameChef = params[index++];
        let command = params[index++];
        let totalPoints = 0;

        while (command !== "Stop") {
            let points = Number(command);
            totalPoints += points;

            if (totalPoints > winPoints) {
                winPoints = totalPoints;
                winChef = nameChef;
            }

            command = params[index++];
        }
        console.log(`${nameChef} has ${totalPoints} points.`);

        if (nameChef === winChef) {
            console.log(`${nameChef} is the new number 1!`);
        }

    }
    console.log(`${winChef} won competition with ${winPoints} points!`);
}
easterCompetition(["2",
    "Chef Angelov",
    "9",
    "9",
    "9",
    "Stop",
    "Chef Rowe",
    "10",
    "10",
    "10",
    "10",
    "Stop"])
