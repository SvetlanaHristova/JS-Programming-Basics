function numbersDivisibleBy9(params) {
    let index = 0;
    let num1 = Number(params[index]);
    index++;
    let num2 = Number(params[index]);
    index++;
    sum = 0;
    let res = "";
    for (let i = num1; i < num2; i++) {
        if (i % 9 === 0) {
            sum += i;
            res += `${i}\n`;
        };
    };
    console.log(`The sum: ${sum}`);
    console.log(res);

};
numbersDivisibleBy9(["100", "200"]);