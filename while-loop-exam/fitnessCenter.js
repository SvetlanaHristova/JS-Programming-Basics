function fitnessSenter(params) {
    let index = 0;
    let countGuests = Number(params[index++]);
    let backTraining = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;

    for (i = 1; i <= countGuests; i++) {
        let type = params[index++];
        switch (type) {
            case "Back": backTraining++; break;
            case "Chest": chest++; break;
            case "Legs": legs++; break;
            case "Abs": abs++; break;
            case "Protein shake": proteinShake++; break;
            case "Protein bar": proteinBar++; break;
        }
    }
    let percentageTraining = (backTraining + chest + legs + abs) * 100 / countGuests;
    let percentageProtein = (proteinShake + proteinBar) * 100 / countGuests;

    console.log(`${backTraining} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${percentageTraining.toFixed(2)}% - work out`);
    console.log(`${percentageProtein.toFixed(2)}% - protein`);

}
fitnessSenter(["7",
    "Chest",
    "Back",
    "Legs",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar"])

