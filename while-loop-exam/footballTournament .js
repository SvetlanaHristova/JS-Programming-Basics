function footballTournament(params) {
    let index = 0;
    let nameTeam = params[index++];
    let countGames = Number | (params[index++]);
    let w = 0;
    let d = 0;
    let l = 0;
    let points = 0;
    if (countGames === 0) {
        console.log(`${nameTeam} hasn't played any games during this season.`);
    } else {
        for (let i = 1; i <= countGames; i++) {
            let result = params[index++];
            switch (result) {
                case "W": w++; points += 3; break;
                case "D": d++; points++; break;
                case "L": l++; break;
            }
        }
        percentage = w * 100 / countGames;
        console.log(`${nameTeam} has won ${points} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${w}`);
        console.log(`## D: ${d}`);
        console.log(`## L: ${l}`);
        console.log(`Win rate: ${percentage.toFixed(2)}%`);
    }
}
footballTournament(["Liverpool",
    "10",
    "W",
    "D",
    "D",
    "W",
    "L",
    "W",
    "D",
    "D",
    "W",
    "W"])

footballTournament(["Chelsea",
    "0"])
