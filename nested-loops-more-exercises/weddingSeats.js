function weddingSeats(params) {
    let lastSaets = params[0];
    let countFirstRow = Number(params[1]);
    let countSpacesOdd = Number(params[2]);
    let counterSpaces = 0;

    for (let i = 65; i <= lastSaets.charCodeAt(0); i++) {

        for (let j = 1; j <= (countFirstRow); j++) {
            countSpacesOdd = Number(params[2]);
            if (j % 2 === 0) {
                countSpacesOdd += 2;
            }

            for (let k = 97; k <= (97 + countSpacesOdd - 1); k++) {
                let space = String.fromCharCode(k);
                let saets = String.fromCharCode(i);
                console.log(`${saets}${j}${space}`);
                counterSpaces++
            }
        }
        countFirstRow++;
    }
    console.log(counterSpaces);
}
weddingSeats(["B", "3", "2"])