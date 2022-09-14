function toyShop (input) {
   let priceForTrip=Number(input[0])
   let puzzlesCount=Number(input[1])
   let dollCount=Number(input[2])
   let bearCount=Number(input[3])
   let minionCount=Number(input[4])
   let truckCount=Number(input[5])
   let toyPrice=puzzlesCount*2.6+dollCount*3+bearCount*4.10+minionCount*8.2+truckCount*2
   let toyCount=puzzlesCount+dollCount+bearCount+minionCount+truckCount
   if (toyCount>=50){
       toyPrice=toyPrice*0.75
   }
   let totalPrice=toyPrice*0.9
   diff=Math.abs(totalPrice-priceForTrip).toFixed(2)
   if (totalPrice>=priceForTrip){
       console.log(`Yes! ${diff} lv left.`)
   }else
    console.log(`Not enough money! ${diff} lv needed.`)
}

toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])
