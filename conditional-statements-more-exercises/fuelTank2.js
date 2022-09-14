function fuelTank2(input){
    let fuel=(input[0]) 
    let litr= Number(input[1])
    let card= (input[2])
    let price=1
    let discount=0
    if (fuel === "Gasoline"){
        price=price*2.22
        if (card==="Yes"){
        discount=discount+0.18
    }}else if(fuel==="Diesel"){ 
        price=price*2.33
        if (card==="Yes"){
        discount=discount+0.12
    }}else if(fuel==="Gas"){
        price=price*0.93
        if (card==="Yes"){
        discount=discount+0.08
    }}
    let fullPrice=litr*(price-discount)
    let finalPrice=fullPrice
    if (litr>25){
        finalPrice=finalPrice*0.9
    }else if (litr>20){
        finalPrice=finalPrice*0.92
    }   console.log(`${finalPrice.toFixed(2)} lv.`)
}

fuelTank2  (["Gas",  30,"Yes"])
    