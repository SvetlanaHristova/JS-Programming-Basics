function numbersDividedBy3WithoutReminder(params) {
    let num = 1;
    while (num < 100) {
        if (num % 3 === 0) {
            console.log(num);
        }
        num++;
    }
}