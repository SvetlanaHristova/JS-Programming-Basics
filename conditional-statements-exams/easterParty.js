function easterParty (input){
    let countGuests=Number(input[0])
    let envelope=Number(input[1])
    let budget=Number(input[2])
    if (countGuests>20){
        envelope=envelope*0.75
    }else if(countGuests>15){
        envelope=envelope*0.8
    }else if(countGuests>=10){
        envelope=envelope*0.85
    }
    let cake=0.1*budget
    let totalSum=cake+envelope*countGuests
    let diff=Math.abs(budget-totalSum).toFixed(2)
    if (totalSum<=budget){
        console.log(`It is party time! ${diff} leva left.`)
    }else 
        console.log(`No party! ${diff} leva needed.`)
}

easterParty(["8",
"25",
"340"])

