function oddEvenPosition(params) {
    let index = 0;
    let n = Number(params[index++]);
    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;
    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i <= n; i++) {
        let num = Number(params[index++]);
        if (i % 2 === 0) {
            evenSum += num;
            if (evenMin > num) {
                evenMin = num.toFixed(2);
            }
            if (evenMax < num) {
                evenMax = num.toFixed(2);
            }
        } else {
            oddSum += num;
            if (oddMin > num) {
                oddMin = num.toFixed(2);
            }
            if (oddMax < num) {
                oddMax = num.toFixed(2);
            }
        }
    }
    if (oddMin === Number.MAX_SAFE_INTEGER) {
        oddMin = "No";
    }
    if (oddMax === Number.MIN_SAFE_INTEGER) {
        oddMax = "No";
    }
    if (evenMin === Number.MAX_SAFE_INTEGER) {
        evenMin = "No";
    }
    if (evenMax === Number.MIN_SAFE_INTEGER) {
        evenMax = "No";
    }
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    console.log(`OddMin=${oddMin},`);
    console.log(`OddMax=${oddMax},`);
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    console.log(`EvenMin=${evenMin},`);
    console.log(`EvenMax=${evenMax}`);


}
oddEvenPosition(["1", "1"])