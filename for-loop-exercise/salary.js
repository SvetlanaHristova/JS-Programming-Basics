function salary(params) {
    let index = 0;
    let openBrowsers = Number(params[index]);
    index++;
    let money = Number(params[index]);
    index++;
    isHaveSalary = true;

    for (let i = 0; i < openBrowsers; i++) {
        let nameBrowsers = (params[index]);
        index++;

        switch (nameBrowsers) {
            case "Facebook": money -= 150; break;
            case "Instagram": money -= 100; break;
            case "Reddit": money -= 50; break;
            default: break;
        }

        if (money <= 0) {
            isHaveSalary = false;
            break;
        }
    }
    
    if (isHaveSalary) {
        console.log(money);
    } else {
        console.log("You have lost your salary.")
    };
};
salary(["3",
    "500",
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"]);





