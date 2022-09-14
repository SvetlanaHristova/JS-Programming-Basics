function pipesInPool(input) {
    let v =Number(input[0])
    let p1 =Number(input[1])
    let p2 =Number(input[2])
    let n=Number(input[3])
    let v1=(p1+p2)*n
    let prFull=v1*100/v
    let prP1=p1*n*100/v1
    let prP2=p2*n*100/v1
    if (v>=v1){
        console.log(`The pool is ${prFull.toFixed(2)}% full. Pipe 1: ${prP1.toFixed(2)}%. Pipe 2: ${prP2.toFixed(2)}%.`)
    }else 
        console.log(`For ${n} hours the pool overflows with ${(v1-v)} liters.`)

}

pipesInPool([100,
    100,
    100,
    2.5
    ])