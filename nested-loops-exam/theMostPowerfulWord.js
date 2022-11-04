function theMostPowerfulWord(params) {
    let index = 0;
    let words = params[index++];
    let pointsWin = 0;
    let win = "";
    while (words !== "End of words") {
        let points = 0;
        for (let i = 0; i < words.length; i++) {
            let char = words.charCodeAt(i);
            points += char;
        }
        if (words.charAt(0) === "a" || words.charAt(0) === "e" ||
            words.charAt(0) === "i" || words.charAt(0) === "o" ||
            words.charAt(0) === "u" || words.charAt(0) === "y" ||
            words.charAt(0) === "A" || words.charAt(0) === "E" ||
            words.charAt(0) === "I" || words.charAt(0) === "O" ||
            words.charAt(0) === "U" || words.charAt(0) === "Y") {
            points *= words.length;
        } else {
            points /= words.length;
        }
        if (pointsWin <= points) {
            win = words;
            pointsWin = points;
        }
        words = params[index++];
    }
    console.log(`The most powerful word is ${win} - ${pointsWin}`);
}
theMostPowerfulWord(["But",
    "Some",
    "People",
    "Say",
    "It's",
    "LOVE",
    "End of words"])

