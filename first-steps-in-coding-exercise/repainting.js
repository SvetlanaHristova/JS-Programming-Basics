function repainting(input){
    let nylon= Number(input[0]);
    let paint= Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);
    let priseForNylon=(nylon+2)*1.5;
    let priseForPaint=(paint*1.1)*14.5;
    let priseForThinner=thinner*5;
    let totelPriceStaf=priseForNylon+priseForPaint+priseForThinner+0.4;
    let priceForWork=totelPriceStaf*(30/100)*hours;
    let totlePrice=priceForWork+totelPriceStaf;
    
    console.log(totlePrice);


}



repainting(["10 ","11 ","4 ","8 "])
