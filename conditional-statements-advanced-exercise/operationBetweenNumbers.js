function operationBetweenNumbers(params) {
    let n1 = Number(params[0]);
    let n2 = Number(params[1]);
    let oper = params[2];
    let result = 0;
    switch (oper) {
        case "+": result = n1 + n2; break;
        case "-": result = n1 - n2; break;
        case "*": result = n1 * n2; break;
        case "/": result = n1 / n2; break;
        case "%": result = n1 % n2; break;
    }
    if (oper === "+" || oper === "-" || oper === "*") {
        if (result % 2 == 0) {
            result = result + " - even";
        } else {
            result = result + " - odd";
        }
    } else if (oper == "/") {
        result = result.toFixed(2);
    }
    if (n2 === 0 && (oper === "/" || oper === "%")) {
        console.log(`Cannot divide ${n1} by zero`);
    } else {
        console.log(`${n1} ${oper} ${n2} = ${result}`);
    }
}
operationBetweenNumbers(["10",
    "0",
    "%"])









