function shopping(input){
    let budget=Number(input[0])
    let n=Number(input[1])  //видеокарти
    let m=Number(input[2])  //процесори
    let p=Number(input[3])  //рампамет
    let priceN=250*n
    let priceM=priceN*0.35*m
    let priceP=priceN*0.1*p
    let totalPrice=priceM+priceN+priceP
    if (n>m){
       totalPrice=totalPrice*0.85
    }
    let diff=Math.abs(totalPrice-budget).toFixed(2)
    if (budget>=totalPrice){
        console.log(`You have ${diff} leva left!`)
    }else
        console.log(`Not enough money! You need ${diff} leva more!`)

    
}

shopping (["920.45",
"3",
"1",
"1"])

