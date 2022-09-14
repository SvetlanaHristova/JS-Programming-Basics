function concatenateData(input) {
        let [firstNam, lastName, age, town] = input;
        console.log(`You are ${firstNam} ${lastName}, a ${Number(age)}-years old person from ${town}.`);
}
concatenateData([`Svetlana`, `Hristova`, 28, `Veliko Tarnovo`])
