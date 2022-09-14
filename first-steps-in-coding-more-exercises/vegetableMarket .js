function vegetableMarket (input) {
    let priceVegetable=Number(input[0])
    let priceFruit=Number(input[1])
    let vegetable=Number(input[2])
    let fruit=Number(input[3])
    let totalPrice = ((priceVegetable*vegetable+priceFruit*fruit)/1.94).toFixed(2)
    console.log(totalPrice)
}

vegetableMarket (["0.194","19.4","10","10"])