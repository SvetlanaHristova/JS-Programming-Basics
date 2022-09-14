function foodDelivery (input){
    let index=0;
    let chicken= Number(input[index++]);
    let fish= Number(input[index++]);
    let vegetable = Number(input[index++]);
    
    let priceForChicken=chicken*10.35;
    let priceForFish=fish*12.4;
    let priceForVegetable=vegetable*8.15;
    let priceMenu=priceForChicken+priceForFish+priceForVegetable;
    let totlePrice=priceMenu+(priceMenu*0.2)+2.5;
   
    console.log(totlePrice);

}

foodDelivery (["2 ","4 ","3 "])
