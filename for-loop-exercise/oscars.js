function oscars(params) {
    let index = 0;
    let actor = params[index];
    index++;
    let totalPoint = Number(params[index]); //205
    index++;
    let n = Number(params[index]); //4
    index++;
    win = false;
    for (i = 0; i < n; i++) {
        let tempName = params[index];    //jd
        index++;
        let pointsName = Number(params[index]);  //45
        index++;

        let res = (tempName.length) * pointsName / 2;
        totalPoint += res;
        if (totalPoint >= 1250.5) {
            win = true;
            break;
        };
    };
    diff = Math.abs(totalPoint - 1250.5);
    if (!win) {
        console.log(`Sorry, ${actor} you need ${diff.toFixed(1)} more!`);
    } else {
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${totalPoint.toFixed(1)}!`);
    };
};
oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"]);
