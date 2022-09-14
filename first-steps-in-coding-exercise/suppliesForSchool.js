function suppliesForSchool(input){
    let pens= Number(input[0]);
    let markers= Number(input[1]);
    let detergent = Number(input[2]);
    let discount = Number(input[3]);
    let priceForPens=pens*5.8;
    let priceForMarkers=markers*7.20;
    let priceForDetergent=detergent*1.2;
    let totalPrice = priceForPens+priceForMarkers+priceForDetergent;
    let price= totalPrice-(discount/100)*totalPrice;

    console.log(price);
}

suppliesForSchool([1,15,14,18])