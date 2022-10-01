function numbers1_NWithStep3(params) {
    let index = 0;
    let num = Number(params[index]);
    index++;
    for (let i = 1; i <= num; i += 3) {
        console.log(i);
    };
};
numbers1_NWithStep3(["100"]);