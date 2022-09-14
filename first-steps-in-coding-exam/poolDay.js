function poolDay(input) {
    let people = Number(input[0]);
    let tax = Number(input[1]);
    let sunbed = Number(input[2]);
    let umbrella = Number(input[3]);
    let totalTax = people * tax;
    let totalUmbrella = umbrella * Math.ceil(people / 2);
    let totalSunbed = sunbed * Math.ceil(0.75 * people);
    let budget = (totalSunbed + totalTax + totalUmbrella).toFixed(2);

    console.log(`${budget} lv.`);

}

poolDay(["21", "5.5", "4.4", "6.2"])
