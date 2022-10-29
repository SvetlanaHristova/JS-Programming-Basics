function movieStars(params) {
    let index=0;
    let budget=Number(params[index++]);
    let nameStar=params[index++];
    let fee=0;
    isHaveBudget=true;
    while (nameStar!=="ACTION"){
        if(nameStar.length>15) {
         fee=0.2*budget;

        }else {
         fee=Number(params[index++]);
        }

        budget-=fee;
       
        if(budget<0){
            isHaveBudget=false;
            diff=Math.abs(budget);
            console.log(`We need ${diff.toFixed(2)} leva for our actors.`);
            break;  
        }
        nameStar=params[index++];
    }
    if(isHaveBudget){
        console.log(`We are left with ${budget.toFixed(2)} leva.`)
    }
}
movieStars(["170000",
"Ben Affleck",
"40000.50",
"Zahari Baharov",
"80000",
"Tom Hanks",
"2000.99",
"ACTION"])

