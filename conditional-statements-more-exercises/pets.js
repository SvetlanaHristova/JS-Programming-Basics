function pets (input){
    let day=Number(input[0])
    let allFood=Number(input[1])        //kg
    let dogFood=Number(input[2])         //kg
    let catFood=Number(input[3])        //kg
    let turtleFood =Number(input[4])    // g
    let needFood=(dogFood+catFood+turtleFood/1000)*day
    let diff=Math.abs(allFood-needFood)
    if (allFood>=needFood){
        console.log(`${Math.floor(diff)} kilos of food left.`)
    }else console.log(`${Math.ceil(diff)} more kilos of food are needed.`)
}


pets([2,
10,
1,
1,
1200])
