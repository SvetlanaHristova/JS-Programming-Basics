function easterEggs(params) {
    let index = 0;
    let countEggs = Number(params[index++]);
    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;

    for (i = 1; i <= countEggs; i++) {
        let egg = params[index++];

        switch (egg) {
            case "red": red++; break;
            case "orange": orange++; break;
            case "blue": blue++; break;
            case "green": green++; break;
        }
    }
    let maxEgg = Math.max(red, orange, blue, green);
    let color = "";
    if (maxEgg === red) {
        color = "red";
    } else if (maxEgg === orange) {
        color = "orange";
    } else if (maxEgg === blue) {
        color = "blue";
    } else if (maxEgg === green) {
        color = "green";
    } else if (maxEgg === red) {
        color = "red";
    }

    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${maxEgg} -> ${color}`);
}
easterEggs(["4",
    "blue",
    "red",
    "blue",
    "orange"])

