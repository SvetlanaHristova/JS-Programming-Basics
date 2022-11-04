function basketballTournament(params) {
  let index = 0;
  let nameTournament = params[index++];
  let win = 0;
  let lost = 0;
  let game = 0;

  while (nameTournament !== "End of tournaments") {
    let n = Number(params[index++]);

    for (let i = 1; i <= n; i++) {
      game++;
      let desisTimPoint = Number(params[index++]);
      let otherTimPoint = Number(params[index++]);
      let diff = Math.abs(desisTimPoint - otherTimPoint);

      if (desisTimPoint > otherTimPoint) {
        console.log(`Game ${i} of tournament ${nameTournament}: win with ${diff} points.`);
        win++;
      } else if (desisTimPoint < otherTimPoint) {
        console.log(`Game ${i} of tournament ${nameTournament}: lost with ${diff} points.`);
        lost++;
      }
    }
    nameTournament = params[index++];
  }
  let percentageWin = win * 100 / game;
  let percentageLost = lost * 100 / game;
  console.log(`${percentageWin.toFixed(2)}% matches win`);
  console.log(`${percentageLost.toFixed(2)}% matches lost`);
}
basketballTournament(["Ballers",
  "3",
  "87",
  "63",
  "56",
  "65",
  "75",
  "64",
  "Sharks",
  "4",
  "64",
  "76",
  "65",
  "86",
  "68",
  "99",
  "45",
  "78",
  "End of tournaments"])
