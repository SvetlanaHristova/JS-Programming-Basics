function footballResults (input) {
   let won=0;
   let lost=0;
   let drawn=0;

    for(i=0;i<3;i++){
        let nie=(input[i]).charAt(0) ;     
        let others=(input[i]).charAt(2);
        if (nie>others){
         won++
        }else if(nie<others){
            lost++
        }else{ 
            drawn++
        }    
    }   
    console.log(`Team won ${won} games.`)
    console.log(`Team lost ${lost} games.`)
    console.log(`Drawn games: ${drawn}`)
}

footballResults (["0:2",
"0:1",
"3:3"])

