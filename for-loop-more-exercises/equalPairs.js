function equalPairs(params) {
    let index = 0;
    let count = Number(params[index++]);
    let a = Number(params[index++]);
    let b = Number(params[index++]);
    let sum = a + b;
    let p = 0;
    let max = sum;
    let min = sum;
    for (let i = 1; i <= count - 1; i++) {
        let m = Number(params[index++]);
        let n = Number(params[index++]);
        p = m + n;
        if (p > max) {
            max = p;
        } else if (p < max) {
            min = p;
        }
    }
    if (p = sum) {
        console.log(`Yes, value=${sum}`);
    } else {
        let diff = Math.abs(min - max)
        console.log(`No, maxdiff=${diff}`);
    }
}
equalPairs([3, 1, 2, 0, 3, 4, -1])
equalPairs([4, 1, 1, 3, 1, 2, 2, 0, 0])
equalPairs([2, -1, 0, 0, -1])
equalPairs([2, 1, 2, 2, 2])
equalPairs([1, 5, 5])
equalPairs([2, -1, 2, 0, -1])
