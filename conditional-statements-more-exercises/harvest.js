function harvest (input) {
  let x=Number(input[0])  //площ
  let y=Number(input[1])  //производителност
  let z=Number(input[2])  //желано количество
  let n=Number(input[3])  //бр.работници
  let vino=0.4*x*y/2.5
  diff=Math.abs(vino-z)
  if (vino>=z){
    console.log(`Good harvest this year! Total wine: ${Math.floor(vino)} liters.`)
    console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(diff/n)} liters per person.`)
  }else
  console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`)
}

harvest ([650,
2,
175,
3])
