function addBags (input) {
    let priceBags=Number(input[0])
    let kgBags=Number(input[1])
    let days=Number(input[2])
    let Bags=Number(input[3])
    
    if (kgBags<10) {
        price=0.2*priceBags
    }else if (kgBags<=20 ){ 
       price=0.5*priceBags
    }else if (kgBags>20)
       price=1*priceBags
    if (days>30){
        increase=price*1.1
    }else if (days<7){
        increase=1.4*price
    }else increase=1.15*price
    let totalPrice=(increase*Bags).toFixed(2)

    console.log(`The total price of bags is: ${totalPrice} lv.`)
}
    addBags ([63.80,23,3,1])
    
