function oscarsWeekInCinema(input) {
    let name = input[0];
    let rate = input[1];
    let count = Number(input[2]);
    let profit = 0;
    switch (name) {
        case "A Star Is Born":
            switch (rate) {
                case "normal": profit = count * 7.5; break;
                case "luxury": profit = count * 10.5; break;
                case "ultra luxury": profit = count * 13.5; break;
            }; break;
        case "Bohemian Rhapsody":
            switch (rate) {
                case "normal": profit = count * 7.35; break;
                case "luxury": profit = count * 9.45; break;
                case "ultra luxury": profit = count * 12.75; break;
            }; break;
        case "Green Book":
            switch (rate) {
                case "normal": profit = count * 8.15; break;
                case "luxury": profit = count * 10.25; break;
                case "ultra luxury": profit = count * 13.25; break;
            }; break;
        case "The Favourite":
            switch (rate) {
                case "normal": profit = count * 8.75; break;
                case "luxury": profit = count * 11.55; break;
                case "ultra luxury": profit = count * 13.95; break;
            }; break;
    }
    console.log(`${name} -> ${profit.toFixed(2)} lv.`);
}
oscarsWeekInCinema(["A Star Is Born", "luxury", 42]);
oscarsWeekInCinema(["Green Book", "normal", 63]);
oscarsWeekInCinema(["The Favourite", "ultra luxury", 34])