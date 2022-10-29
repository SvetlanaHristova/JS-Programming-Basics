function renovation(params) {
    let h = Number(params[0]);
    let w = Number(params[1]);
    let percentage = Number(params[2]);
    let area = Math.ceil(4 * h * w * (1 - percentage / 100));

    for (let i = 3; i < params.length; i++) {
        let litr = params[i];
        if (litr === "Tired!") {
            break;
        }
        area -= litr
        if (area < 0) {
            console.log(`All walls are painted and you have ${Math.abs(area)} l paint left!`);
            break;
        }
        if (area === 0) {
            console.log("All walls are painted! Great job, Pesho!");
            break;
        }
    }
    if (area > 0) {
        console.log(`${Math.abs(area)} quadratic m left.`);
    }
}
renovation(["2",
    "3",
    "25",
    "9",
    "9",
    "Tired!",
]);
renovation(["2",
    "3",
    "25",
    "6",
    "7",
    "8"])
