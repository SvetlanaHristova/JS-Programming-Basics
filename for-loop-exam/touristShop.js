function touristShop(params) {
    let index=0
    let budget=Number(params[index]);
        index++ ;
    let countProduct=0 ;
    let price=0;
    for (i=1;i<(params.length+1)/2;i++){
        let name=params[index];
            index++;
        let priceForProduct=Number(params[index])
            index++;
        if(name==="Stop"){
            console.log(`You bought ${countProduct} products for ${price.toFixed(2)} leva.`)
            break;
        }
        countProduct++;
        if(countProduct%3===0){
            priceForProduct=0.5*priceForProduct; 
        }
        price+=priceForProduct;
        budget-=priceForProduct;
        if(budget<0){
            console.log(`You don't have enough money!`);
            console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);
            break;
        }
    }
}

touristShop(["153.20",
"Backpack",
"25.20",
"Shoes",
"54",
"Sunglasses",
"30",
"Stop"])

touristShop(["54",
"Thermal underwear",
"24",
"Sunscreen",
"45"])
