function easterEggsBattle(params) {
    let index = 0;
    let egg1player = Number(params[index]);
    index++;
    let egg2player = Number(params[index]);
    index++;
    for (let i = 2; i < params.length; i++) {
        let winner = params[index];
        index++;
        if (winner === "End of battle") {
            console.log(`Player one has ${egg1player} eggs left.`);
            console.log(`Player two has ${egg2player} eggs left.`);
            break;
        }
        switch (winner) {
            case "one": egg2player--; break;
            case "two": egg1player--; break;
        }
        if (egg1player === 0) {
            console.log(`Player one is out of eggs. Player two has ${egg2player} eggs left.`);
            break;
        } else if (egg2player === 0) {
            console.log(`Player two is out of eggs. Player one has ${egg1player} eggs left.`);
            break;
        }
    }
}