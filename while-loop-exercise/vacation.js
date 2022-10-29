function vacation(params) {
    let index = 0;
    let needMoney = Number(params[index++]);
    let money = Number(params[index++]);
    let day = 0;
    let spendDay = 0;
    let saveTheMoney = true;
    while (needMoney > money) {
        let tipe = params[index++];
        let tempMoney = Number(params[index++]);
        day++;
        switch (tipe) {
            case "spend": money -= tempMoney;
                spendDay++; break;
            case "save": money += tempMoney;
                spendDay = 0; break;
        }
        if (spendDay === 5) {
            console.log("You can't save the money.");
            console.log(day);
            saveTheMoney = false;
            break;
        }
        if (money < 0) {
            money = 0;
        }
    }
    if (saveTheMoney) {
        console.log(`You saved the money for ${day} days.`);
    }
}
vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"])




