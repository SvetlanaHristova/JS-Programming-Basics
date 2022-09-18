function tradeCommissions(input) {
    let city = input[0];
    let sales = input[1];
    let comisone = 0;
    if (sales >= 0 && sales <= 500) {

        switch (city) {
            case "Sofia": comisone = sales * 0.05; break;
            case "Varna": comisone = sales * 0.045; break;
            case "Plovdiv": comisone = sales * 0.055; break;
            default: comisone = "error"; break;
        }

    } else if (sales > 500 && sales <= 1000) {

        switch (city) {
            case "Sofia": comisone = sales * 0.07; break
            case "Varna": comisone = sales * 0.075; break
            case "Plovdiv": comisone = sales * 0.08; break
            default: comisone = "error"
        }

    } else if (sales > 1000 && sales <= 10000) {

        switch (city) {
            case "Sofia": comisone = sales * 0.08; break;
            case "Varna": comisone = sales * 0.1; break;
            case "Plovdiv": comisone = sales * 0.12; break;
            default: comisone = "error"; break;
        }

    } else if (sales > 10000) {

        switch (city) {
            case "Sofia": comisone = sales * 0.12; break;
            case "Varna": comisone = sales * 0.13; break;
            case "Plovdiv": comisone = sales * 0.145; break;
            default: comisone = "error"; break;
        }

    } else {
        comisone = "error";

    }
    if (comisone === "error") {
        console.log("error");
    } else {
        console.log(comisone.toFixed(2));
    }
}


tradeCommissions(["Kaspichan", "-50"])

