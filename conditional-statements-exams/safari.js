function  safari (input) {
    let budget=Number(input[0])
    let fuel=Number(input[1])
    let dayWeek=(input[2])
    let price=fuel*2.1+100
    if (dayWeek==="Sunday"){
        price=price*0.8
    }else if(dayWeek==="Saturday"){
        price=price*0.9
    }
    diff=Math.abs(price-budget).toFixed(2)
    if (budget>=price){
        console.log(`Safari time! Money left: ${diff} lv. `)
    }else
        console.log(`Not enough money! Money needed: ${diff} lv.`)
}

safari([120,
    30,
    "Saturday"
        ]) 