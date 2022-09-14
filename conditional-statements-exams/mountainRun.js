function mountainRun(input){
    let record=Number(input[0])
    let distance =Number(input[1])
    let speed= Number(input[2])
    let slowdown= Math.floor(distance/50)*30
    let time=distance*speed+slowdown
    let diff= time-record
    if (record>time){
        console.log(`Yes! The new record is ${time.toFixed(2)} seconds.`)
    }else 
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`)

}


mountainRun ([5554.36,1340,3.23])
