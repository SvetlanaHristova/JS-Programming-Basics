function filmPremiere(input) {
    let nameFilm = input[0];
    let paket = input[1];
    let count = Number(input[2]);
    let price = 0;
    switch (nameFilm) {
        case "John Wick":
            switch (paket) {
                case "Drink": price = count * 12; break;
                case "Popcorn": price = count * 15; break;
                case "Menu": price = count * 19; break;
            }; break;
        case "Star Wars":
            switch (paket) {
                case "Drink": price = count * 18; break;
                case "Popcorn": price = count * 25; break;
                case "Menu": price = count * 30; break;
            }; break;
        case "Jumanji":
            switch (paket) {
                case "Drink": price = count * 9; break;
                case "Popcorn": price = count * 11; break;
                case "Menu": price = count * 14; break;
            }; break;
    }
    if (nameFilm === "Star Wars" && count >= 4) {
        price = price * 0.7;
    } else if (nameFilm === "Jumanji" && count === 2) {
        price = price * 0.85;
    }
    console.log(`Your bill is ${price.toFixed(2)} leva.`);
}
filmPremiere(["John Wick", "Drink", "6"]);
filmPremiere(["Star Wars", "Popcorn", "4"]);
filmPremiere(["Jumanji", "Menu", "2"])
