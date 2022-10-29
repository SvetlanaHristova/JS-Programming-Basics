function gameOfIntervals(params) {
    let moves = Number(params[0]);
    let points = 0;
    let from0To9 = 0;
    let from10To19 = 0;
    let from20To29 = 0;
    let from30To39 = 0;
    let from40To49 = 0;
    let invalid = 0;

    for (let i = 1; i <= moves; i++) {
        element = Number(params[i]);

        if (element >= 0 && element < 10) {
            from0To9++;
            points += 0.2 * element;
        } else if (element >= 10 && element < 20) {
            from10To19++;
            points += 0.3 * element;
        } else if (element >= 20 && element < 30) {
            from20To29++;
            points += 0.4 * element;
        } else if (element >= 30 && element < 40) {
            from30To39++;
            points += 50;
        } else if (element >= 40 && element <= 50) {
            from40To49++;
            points += 100;
        } else {
            invalid++;
            points = points / 2;
        }
    }
    from0To9 = from0To9 * 100 / moves;
    from10To19 = from10To19 * 100 / moves;
    from20To29 = from20To29 * 100 / moves;
    from30To39 = from30To39 * 100 / moves;
    from40To49 = from40To49 * 100 / moves;
    invalid = invalid * 100 / moves;

    console.log(points.toFixed(2));
    console.log(`From 0 to 9: ${from0To9.toFixed(2)}%`);
    console.log(`From 10 to 19: ${from10To19.toFixed(2)}%`);
    console.log(`From 20 to 29: ${from20To29.toFixed(2)}%`);
    console.log(`From 30 to 39: ${from30To39.toFixed(2)}%`);
    console.log(`From 40 to 50: ${from40To49.toFixed(2)}%`);
    console.log(`Invalid numbers: ${invalid.toFixed(2)}%`);


}
gameOfIntervals([10,
    43,
    57,
    -12,
    23,
    12,
    0,
    50,
    40,
    30,
    20,
])
