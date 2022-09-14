function easterGuests(input){
    let countGuests=Number(input[0])
    let budget=Number(input[1])
    let eggs=countGuests*2
    let bread=Math.ceil(countGuests/3)
    let totalSum=bread*4+eggs*0.45
    let diff=Math.abs(totalSum-budget).toFixed(2)
    if (totalSum<=budget){
        console.log(`Lyubo bought ${bread} Easter bread and ${eggs} eggs.`)
        console.log(`He has ${diff} lv. left.`)
    }else{
        console.log(`Lyubo doesn't have enough money.`)
        console.log(`He needs ${diff} lv. more.`)
}
}

easterGuests(["9",
"12"])

