function catWalking(input) {
    let min=Number(input[0])
    let count=Number(input[1])
    let cal=Number(input[2])
    let burnedCal=min*count*5
    if (burnedCal>=cal/2){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCal}.`)
    }else
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCal}.`)

}

catWalking([30,3,600])
catWalking([15,2,500])
