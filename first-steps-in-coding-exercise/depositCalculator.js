function depositCalculator(input) {

    let data = input.map(x => Number(x));
    let [sum, month, interestrate] = data;
    
    let interest = sum * (interestrate / 100);
    let interestForMonth = interest / 12;
    let totalSum = sum + month * interestForMonth;

    console.log(totalSum);
}

depositCalculator(["200 ", "3 ", "5.7 "])
