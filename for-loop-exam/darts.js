function darts(params) {
    let index=0;
    let name=params[index];
        index++;
    let totalPoints=301;   
    let shots=0;
    let badshots=0;
    for(let i=1;i=params.length;i++){
        let field=params[index];
            index++;
        let points=Number(params[index]);
            index++;
        if(field==="Retire"){
            console.log(`${name} retired after ${badshots} unsuccessful shots.`);
        break;
        }
        switch(field){
            case "Single": points=points;break;
            case "Double": points=2*points;break;
            case "Triple": points=3*points;break;
        }
        if (totalPoints<points){
            badshots++;
        }else if(totalPoints>points){
            shots++;
            totalPoints-=points;
        }else{
            shots++;
            console.log(`${name} won the leg with ${shots} shots.`);
        break;
        }
    }

}