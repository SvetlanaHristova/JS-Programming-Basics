function changeBureau(input) {
    let bitcoins = Number(input[0]);
    let chineseYuan = Number(input[1]);
    let commission = Number(input[2]);

    let dolar = chineseYuan * 0.15;
    let bgn = bitcoins * 1168 + dolar * 1.76;
    let euro = (bgn / 1.95 * (1 - commission / 100)).toFixed(2);

    console.log(euro);

}

changeBureau(["1", "5", "5"])
