function familyTrip (output) {
    let budget=Number(output[0])
    let nights=Number(output[1])
    let priceForNigth=Number(output[2])
    let percentageCosts= Number(output[3])
    if (nights>7) {
     priceForNigth=priceForNigth*0.95
    }
    costs=priceForNigth*nights+budget*percentageCosts/100
    diff=Math.abs(costs-budget).toFixed(2)
    if (costs<=budget) {
        console.log(`Ivanovi will be left with ${diff} leva after vacation.`)
    }else
        console.log(`${diff} leva needed.`)
    
}

familyTrip ([500,
    7,
    66,
    15
    
    ])