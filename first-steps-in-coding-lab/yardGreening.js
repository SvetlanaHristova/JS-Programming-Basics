function yardGreening(input) {
        let area = input[0];
        let price = area * 7.61;
        let discount = price * 0.18;
        let totolprice = price - discount;
        console.log(`The final price is: ${totolprice} lv.`);
        console.log(`The discount is: ${discount} lv.`);
}
yardGreening([550])
