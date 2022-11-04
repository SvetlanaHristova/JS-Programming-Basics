function equalSumsEvenOddPosition(params) {
    let startNum = Number(params[0]);
    let endNum = Number(params[1]);
    let printLine = "";

    for (i = startNum; i <= endNum; i++) {
        let curentNum = "" + i;
        let sumEven = 0;
        let sumOdd = 0;
        let position = 0;
        for (j = 0; j < curentNum.length; j++) {
            position++;
            let curentDigit = Number(curentNum.charAt(j));
            if (position % 2 === 0) {
                sumEven += curentDigit;
            } else {
                sumOdd += curentDigit;
            }
        }
        if (sumEven === sumOdd) {
            printLine = printLine + curentNum + " ";
        }
    }
    console.log(printLine);
}


equalSumsEvenOddPosition(["100000", "100050"]);
equalSumsEvenOddPosition(["123456", "124000"]);
equalSumsEvenOddPosition(["299900", "300000"]);
equalSumsEvenOddPosition(["100115", "100120"])

