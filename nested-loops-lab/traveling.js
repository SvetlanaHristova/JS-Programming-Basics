function traveling(params) {
    let index = 0;
    let destination = params[index++];
    let needMoney = Number(params[index++]);

    while (destination !== "End") {

        while (needMoney > 0) {
            let saveMoney = Number(params[index++]);
            needMoney -= saveMoney;
        }
        console.log(`Going to ${destination}!`);
        destination = params[index++];
        needMoney = Number(params[index++]);
    }
}
traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]);
traveling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"])
