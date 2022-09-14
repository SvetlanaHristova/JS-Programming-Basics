function transportPrice (input){
    let n=Number(input[0])      //брой километри 
    let partDay =(input[1])     //през деня или през нощта
    let tariff=0
    if (partDay==="day"){
        tariff=tariff+0.79
    }else if(partDay==="night")
        tariff=tariff+0.9
    let priceTrain=(0.06*n)
    let priceBus=(0.09*n)
    let priceTaxi=(0.7+n*tariff)   
    if (n>=100) {
        console.log(Math.min(priceTaxi,priceBus,priceTrain).toFixed(2))
    }else if(n>=20) {
        console.log(Math.min(priceTaxi,priceBus).toFixed(2))
    }else if(n>0)
        console.log((priceTaxi).toFixed(2))
    
}
    transportPrice (["12", "day"])
        