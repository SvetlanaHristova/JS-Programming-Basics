function triangleArea(input) {
    let a = Number(input[0]);
    let ha = Number(input[1]);

    let area = (a * ha / 2).toFixed(2);

    console.log(area)

}


triangleArea(["20 ", "30 "])
