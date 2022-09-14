function movieDay (input) {
   let shootingTime=Number(input[0])
   let scenesCount=Number(input[1])
   let sceneDuration=Number(input[2])
   let preparation=0.15*shootingTime
   let time=scenesCount*sceneDuration+preparation
   let diff=(Math.abs(shootingTime-time)).toFixed(0)
   if (time<=shootingTime){
        console.log(`You managed to finish the movie on time! You have ${diff} minutes left!`)
   }else
        console.log(`Time is up! To complete the movie you need ${diff} minutes.`)
}


movieDay ([60,
    15,
    3
    ])