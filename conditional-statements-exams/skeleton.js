function skeleton (input) {
    let controlMin=Number(input[0])
    let controlSec=Number(input[1])
    let length =Number(input[2])
    let speed=Number(input[3])
    let control=controlMin*60+controlSec
    let timeMarin=length*speed/100-(length/120)*2.5
    let diff=Math.abs(timeMarin-control)
    if (timeMarin<=control){
        console.log(`Marin Bangiev won an Olympic quota!`)
        console.log(`His time is ${timeMarin.toFixed(3)}.`)
    }else 
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`)
      
}


skeleton ([1,
    20,
    1546,
  12
     ])