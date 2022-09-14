function godzillaVSKong(params) {
let budget=Number(params[0])
let extrasCount=Number(params[1])   
let clothingPrice=Number(params[2])
let clothing=clothingPrice*extrasCount
let decor=budget*0.1
 if (extrasCount>150) {
     clothing=clothing*0.9
 }
 let totalSum=clothing+decor
 let diff=Math.abs(totalSum-budget).toFixed(2)
 if (totalSum>budget){
     console.log("Not enough money!")
     console.log(`Wingard needs ${diff} leva more.`)
 }else{
    console.log("Action!")
    console.log(`Wingard starts filming with ${diff} leva left.`)}
    
}

godzillaVSKong(["19587.88",
"1222",
"55.68"])

