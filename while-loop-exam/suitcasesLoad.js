function suitcasesLoad(params) {
    let index=0;
    let capacity=Number(params[index++]);
    let command=params[index++];
    let countCuitcase=0;
    let isHaveSpace=true;
    while (command!=="End") {
        let cuitcase=Number(command);
        countCuitcase++;
        if(countCuitcase%3===0){
            cuitcase*=1.1;
        }
        if(cuitcase<=capacity){
            capacity-=cuitcase;
        }else{
            isHaveSpace=false;
            countCuitcase--;
            console.log("No more space!");
            break;
        }
        command=params[index++]; 
    }
    if(isHaveSpace){
        console.log("Congratulations! All suitcases are loaded!")
    }
    console.log(`Statistic: ${countCuitcase} suitcases loaded.`)
}
suitcasesLoad(["700.5",
"180",
"340.6",
"126",
"220"])

