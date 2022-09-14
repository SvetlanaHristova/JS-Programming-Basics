function worldSwimmingRecord(params) {
    let record=Number(params[0])
    let distance=Number(params[1])
    let speed =Number(params[2])
    let slowdown=Math.floor(distance/15)*12.5
    let time=(distance*speed+slowdown).toFixed(2)
    let diff=Math.abs(record-time).toFixed(2)
    if (time<record){
        console.log( `Yes, he succeeded! The new world record is ${time} seconds.`)
    }else
        console.log(`No, he failed! He was ${diff} seconds slower.`)
        
}


worldSwimmingRecord(["55555.67",
"3017",
"5.03"])

