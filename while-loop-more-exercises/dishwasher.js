function dishwasher(params) {
    let index=0;
    let bottles=Number(params[index++]);
    let detergent=bottles*750;
    let command=params[index++];
    let count=0;
    let plates=0;
    let pots=0;
    let isHaveDeter=true;
    while (command!=="End") {
        let utensils=Number(command);
        count++;
        if(count%3===0){
            detergent-=utensils*15;
            pots+=utensils;
        }else {
            detergent-=utensils*5;
            plates+=utensils;
        }
        if(detergent<0){
            isHaveDeter=false;
            console.log(`Not enough detergent, ${Math.abs(detergent)} ml. more necessary!`);
            break;
        }
        command = params[index++];
    }
    if (isHaveDeter) {
        console.log ("Detergent was enough!");
        console.log(`${plates} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${detergent} ml.`); 
    }
}