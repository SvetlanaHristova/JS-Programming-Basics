function godzillaVSKong (input){
let budget=Number(input[0])
let countExtras=Number(input[1])
let priceOneClothing= Number(input[2])
let decor=0.1*budget
let priceClothing=priceOneClothing*countExtras
if (countExtras>150){
    priceClothing=0.9*priceClothing
}
let totalePrice=priceClothing+decor
diff=Math.abs(budget-totalePrice).toFixed(2)
if (budget<totalePrice){
    console.log("Not enough money!")
    console.log(`Wingard needs ${diff} leva more.`)
}else{
    console.log("Action!")
    console.log(`Wingard starts filming with ${diff} leva left.`)
}
}

godzillaVSKong ([20000, 
    120,
    55.5])