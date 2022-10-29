function minNumber(params) {
    let index = 0;
    let commond = params[index++];
    let min = Number.MAX_SAFE_INTEGER;

    while (commond !== "Stop") {
        let num = Number(commond);
        if (num < min) {
            min = num;
        }
        commond = params[index++];
    }
    console.log(min);
}
minNumber(["-1", "-2", "Stop"])
