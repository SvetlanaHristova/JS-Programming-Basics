function bills(params) {
    let countMonth = Number(params[0]);
    let electricity = 0;
    let water = 0;
    let internet = 0;
    let other = 0;

    for (let i = 1; i <= countMonth; i++) {
        electricityMonth = Number(params[i]);
        let otherMonth = 1.2 * (electricityMonth + 20 + 15);
        water += 20;
        internet += 15;
        electricity += electricityMonth;
        other += otherMonth;
    }

    let average = (electricity + water + internet + other) / countMonth;
    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);

}
bills([5,
    68.63,
    89.25,
    132.53,
    93.53,
    63.22
]);
bills([8,
    123.54,
    231.54,
    140.23,
    100,
    122.4,
    430,
    178.52,
    64.2,
])