function fuelTank(input){
    let fuel=(input[0]) 
    let litr= Number(input[1])
    if (fuel === "Diesel") {
        fuel="diesel"
        if (litr>=25){
            console.log(`You have enough ${fuel}.`)
        }else 
            console.log(`Fill your tank with ${fuel}!`)
    }else if(fuel==="Gasoline"){ 
        fuel="gasoline"
        if (litr>=25){
            console.log(`You have enough ${fuel}.`)
        }else 
            console.log(`Fill your tank with ${fuel}!`)
    }else if(fuel==="Gas"){
         fuel="gas"
         if (litr>=25){
            console.log(`You have enough ${fuel}.`)
        }else 
            console.log(`Fill your tank with ${fuel}!`)
    }else 
        console.log("Invalid fuel!")   
}

fuelTank  (["Diesel",  15])
    