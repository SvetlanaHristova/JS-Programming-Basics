function gameNumberWars(params) {
    let index = 0;
    let name1 = params[index++];
    let name2 = params[index++];
    let point1 = 0;
    let point2 = 0;
    let command = params[index++];
    let isNumberWars = false;
    while (command !== "End of game") {
        let card1 = Number(command);
        let card2 = Number(params[index++]);
        if (card1 > card2) {
            point1 += (card1 - card2);
        } else if (card2 > card1) {
            point2 += (card2 - card1);
        } else {
            let card1w = Number(params[index++]);
            let card2w = Number(params[index++]);
            console.log("Number wars!");
            if (card1w > card2w) {
                console.log(`${name1} is winner with ${point1} points`);
            } else {
                console.log(`${name2} is winner with ${point2} points`);
            }
            isNumberWars = true;
            break;
        }
        command = params[index++];
    }
    if (!isNumberWars) {
        console.log(`${name1} has ${point1} points`);
        console.log(`${name2} has ${point2} points`);
    }
}
gameNumberWars(["Desi",
    "Niki",
    "7",
    "5",
    "3",
    "4",
    "3",
    "3",
    "5",
    "3"]);
gameNumberWars(["Elena",
    "Simeon",
    "6",
    "3",
    "2",
    "5",
    "8",
    "9",
    "End of game"]);
gameNumberWars(["Aleks",
    "Georgi",
    "4",
    "5",
    "3",
    "2",
    "4",
    "3",
    "4",
    "4",
    "5",
    "2"])
