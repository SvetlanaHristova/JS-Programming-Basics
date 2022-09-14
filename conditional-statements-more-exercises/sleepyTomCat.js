function sleepyTomCat (input){
    let holiday=Number(input[0])
    let workDays =365-holiday
    let playTime=holiday*127+workDays*63
    let H=Math.floor((Math.abs(playTime-30000))/60)
    let M=(Math.abs(playTime-30000))%60
    if(playTime>30000){
        console.log("Tom will run away")
        console.log(`${H} hours and ${M} minutes more for play`)
    }else{
        console.log("Tom sleeps well")
        console.log(`${H} hours and ${M} minutes less for play`)
}
}

sleepyTomCat ([113])