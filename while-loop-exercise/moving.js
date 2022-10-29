function moving(params) {
    let index = 0;
    let w = Number(params[index++]);
    let l = Number(params[index++]);
    let h = Number(params[index++]);
    let commond = params[index++];
    let area = w * l * h;
    let isHaveArea = true;
    while (commond !== "Done") {
        let boxes = Number(commond);
        area -= boxes;
        if (area < 0) {
            isHaveArea = false;
            console.log(`No more free space! You need ${Math.abs(area)} Cubic meters more.`);
            break;
        } else if (area === 0) {
            isHaveArea = false;
            console.log(`${area} Cubic meters left.`);
            break;
        }
        commond = params[index++];
    }
    if (isHaveArea) {
        console.log(`${area} Cubic meters left.`);
    }
}

moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"])

