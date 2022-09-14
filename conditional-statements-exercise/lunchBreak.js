function lunchBreak(input){
let nameSerial=input[0]
let timeOneSeries=Number(input[1])
let timeForBreak=Number(input[2])
let timeForLunc=timeForBreak/8
let timeForRest=timeForBreak/4
let timeForTV=timeForBreak-timeForRest-timeForLunc
let diff=Math.ceil(Math.abs(timeOneSeries-timeForTV))
if (timeForTV>=timeOneSeries){
    console.log(`You have enough time to watch ${nameSerial} and left with ${diff} minutes free time.`)
}else
    console.log(`You don't have enough time to watch ${nameSerial}, you need ${diff} more minutes.`)
   
}

lunchBreak(["Teen Wolf",
"48",
"60"])

