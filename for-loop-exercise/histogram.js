function histogram(params) {
    let index = 0;
    let n = Number(params[index]);
    index++;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 0; i < n; i++) {
        let num = Number(params[index]);
        index++;

        if (num < 200) {
            p1++;
        } else if (num >= 200 && num < 400) {
            p2++;
        } else if (num >= 400 && num < 600) {
            p3++;
        } else if (num >= 600 && num < 800) {
            p4++;
        } else {
            p5++;
        };

    };

    p1 = p1 * 100 / n;
    p2 = p2 * 100 / n;
    p3 = p3 * 100 / n;
    p4 = p4 * 100 / n;
    p5 = p5 * 100 / n;
    console.log(`${p1.toFixed(2)}% \n${p2.toFixed(2)}% \n${p3.toFixed(2)}% \n${p4.toFixed(2)}% \n${p5.toFixed(2)}%`);
};
histogram(["14",
    "53",
    "7",
    "56",
    "180",
    "450",
    "920",
    "12",
    "7",
    "150",
    "250",
    "680",
    "2",
    "600",
    "200"])

