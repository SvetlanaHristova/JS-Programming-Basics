function fowerShop (input){
    let magnolias=Number(input[0])
    let hyacinths=Number(input[1])
    let roses=Number(input[2])
    let cacti=Number(input[3])
    let gift =Number(input[4])
    let sum=magnolias*3.25+hyacinths*4+roses*3.5+cacti*8
    let finalSum=sum*0.95
    let diff=Math.abs(finalSum-gift)
    if (finalSum>=gift){
        console.log(`She is left with ${Math.floor(diff)} leva.`)
    }else console.log(`She will have to borrow ${Math.ceil(diff)} leva.`)
}

fowerShop([15,
 7,
    5,
    10,
   100
    ])