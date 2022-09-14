function circleAreaAndPerimeter (input) {
    let radius=Number(input[0]);
    let area=(radius*radius*Math.PI).toFixed(2);
    let perimeter=(2*radius*Math.PI).toFixed(2);

    console.log(area);
    console.log(perimeter);
    
}

circleAreaAndPerimeter(["3"])
