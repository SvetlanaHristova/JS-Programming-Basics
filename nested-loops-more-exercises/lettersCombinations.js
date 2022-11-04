function lettersCombinations(params) {
    let startLetter = params[0];
    let endLetter = params[1];
    let invalidtLetter = params[2];
    let start = startLetter.charCodeAt(0);
    let end = endLetter.charCodeAt(0);
    let invalid = invalidtLetter.charCodeAt(0);
    let combinationCounter = 0;
    let buffer = "";
    for (i = start; i <= end; i++) {
        if (i === invalid) {
            continue;
        }
        for (j = start; j <= end; j++) {
            if (j === invalid) {
                continue;
            }
            for (k = start; k <= end; k++) {
                if (k === invalid) {
                    continue;
                } else {
                    combinationCounter++;
                    let combination = "" + String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k);
                    buffer += combination + " ";
                }
            }
        }
    }
    console.log(`${buffer}${combinationCounter}`);
}
lettersCombinations(["f", "k", "h"])
