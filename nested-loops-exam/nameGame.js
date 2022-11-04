function nameGame(params) {
    let index = 0;
    let name = params[index++];
    let isOne = true;
    let win = "";
    let pointWin = 0;
    while (name !== "Stop") {
        let points = 0;
        for (let i = 0; i < name.length; i++) {
            let num = Number(params[index++]);

            if (num === name.charCodeAt(i)) {
                points += 10;
            } else {
                points += 2;
            }
        }
        if (isOne) {
            win = name;
            pointWin = points;

        } else if (pointWin <= points) {
            win = name;
            pointWin = points;

        }
        isOne = false;
        name = params[index++];
    }
    console.log(`The winner is ${win} with ${pointWin} points!`);
}

nameGame(["Pesho",
    "124",
    "34",
    "111",
    "97",
    "99",
    "Gosho",
    "98",
    "124",
    "88",
    "76",
    "18",
    "Stop"])


