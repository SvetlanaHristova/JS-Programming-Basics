function sumOfNumbers(params) {
    let index = 0;
    let num = params[index];
    index++;
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    };
    
    console.log(`The sum of the digits is:${sum}`);
};
sumOfNumbers(["564891"]);