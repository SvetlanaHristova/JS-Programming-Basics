function sumSeconds (input) {
    let first= Number(input[0])
    let second=Number(input[1])
    let third= Number(input[2])
    let totalTime=first+second+third
    let min=Math.floor(totalTime/60)
    let sec=totalTime%60
    if(sec<10){
        console.log(`${min}:0${sec}`)
    } else 
        console.log(`${min}:${sec}`)
}

sumSeconds(["15",
"15",
"14"])
 