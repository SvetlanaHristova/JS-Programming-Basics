function sumPrimeNonPrime(params) {
    let index = 0;
    let sumPrimeNumber = 0;
    let sumNonPrimeNumber = 0;
    let command = params[index++];
    while (command !== "stop") {
        let currentNumber = Number(command);
        if (currentNumber < 0) {
            console.log("Number is negative.");
            command = params[index++];
            continue;
        }
        if (currentNumber === 1) {
            sumPrimeNumber = 1;
        }
        let isPrime = true;
        for (let i = 2; i < currentNumber; i++) {
            if (currentNumber % i === 0) {
                sumNonPrimeNumber += currentNumber;
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            sumPrimeNumber += currentNumber;
        }
        command = params[index++];
    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNumber}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumber}`);
}
sumPrimeNonPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"]);

sumPrimeNonPrime(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"]);

sumPrimeNonPrime(["0",
    "-9",
    "0",
    "stop"])
