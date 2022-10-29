function multiplyBy2(params) {
    let index = 0;
    while (true) {

        let num = Number(params[index++]);
        if (num < 0) {
            console.log("Negative number!");
            break;
        }
        let result = 2 * num;
        console.log(`Result: ${result.toFixed(2)}`);

    }


} multiplyBy2([12,
    43.2144,
    12.3,
    543.23,
    -20])