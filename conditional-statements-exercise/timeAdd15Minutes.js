function add15Minutes (input){
    let h=Number(input[0])
    let m=Number(input[1])
    let time=h*60+m+15
    let hours=Math.floor(time/60)
    let minutes=time%60
    if (hours>23){
        hours=0
    }
    if (minutes<10){
        console.log(`${hours}:0${minutes}`)
    }else
        console.log(`${hours}:${minutes}`)
}


add15Minutes(["0", "01"])