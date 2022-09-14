function fishTank(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let h = Number(input[2]);
    let percentage = Number(input[3]);
    let value = a * b * h / 1000;
    let occupied = value * percentage / 100;
    let water = value - occupied;
    
    console.log(water);

}

fishTank(["85 ", "75 ", "47 ", "17 "])