function easterBakery(matrix) {
    let index = 0;
    let priceFlour = Number(matrix[index++]);
    let flours = Number(matrix[index++]);
    let sugar = Number(matrix[index++]);
    let eggs = Number(matrix[index++]);
    let may = Number(matrix[index++]);
    let priceSugar = priceFlour * 0.75;
    let priceEggs = priceFlour * 1.1;
    let priceMay = 0.2 * priceSugar;
    let totalPrice = (priceFlour * flours + sugar * priceSugar + eggs * priceEggs + may * priceMay).toFixed(2);

    console.log(totalPrice);

}

easterBakery(["50", "10", "3.5", "6", "1"])
