function series(params) {
    let index=0;
    let budget=Number(params[index++]);
    let countSeries=Number(params[index++]);
    let totalPrice=0
   for(i=1;i<=countSeries;i++){
        let nameSeries=params[index++];
        let priceSeries=Number(params[index++]);
        switch (nameSeries) {
            case "Thrones":priceSeries*=0.5 ; break;
            case "Lucifer":priceSeries*=0.6 ; break;
            case "Protector":priceSeries*=0.7 ; break;
            case "TotalDrama":priceSeries*=0.8 ; break;
            case "Area":priceSeries*=0.9 ; break;
        }
        totalPrice+=priceSeries
    }
    let diff=Math.abs(budget-totalPrice).toFixed(2);
    if(budget>=totalPrice){
        console.log(`You bought all the series and left with ${diff} lv.`)
    } else{
        console.log(`You need ${diff} lv. more to buy the series!`)
    }
}
series(["25",
"6",
"Teen Wolf",
"8",
"Protector",
"5",
"TotalDrama",
"5",
"Area",
"4",
"Thrones",
"5",
"Lucifer",
"9"])

