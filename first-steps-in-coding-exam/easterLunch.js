function easterLunch(input) {
    let bread = Number(input[0]);
    let eggs = Number(input[1]);
    let cookies = Number(input[2]);
    let priceBreat = 3.2 * bread;
    let priceEggs = 4.35 * eggs;
    let priceCookies = 5.4 * cookies;
    let priceEggsPaint = eggs * 12 * 0.15;
    let totalPrice = (priceBreat + priceCookies + priceEggs + priceEggsPaint).toFixed(2);

    console.log(totalPrice)

}

easterLunch(["3", "2", "3"])
