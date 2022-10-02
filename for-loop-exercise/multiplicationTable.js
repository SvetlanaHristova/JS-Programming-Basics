function multiplicationTable(params) {
    let index = 0;
    let num = Number(params[index]);
    index++;

    for (let i = 1; i <= 10; i++) {
        let x = i * num;
        console.log(`${i} * ${num} = ${x}`);
    };
    
};
multiplicationTable(["9"]);