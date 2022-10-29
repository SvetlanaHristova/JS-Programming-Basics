function fitnessCard(input) {
    let sum = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sport = input[3];
    let tax = 0;
    switch (gender) {
        case "m":
            switch (sport) {
                case "Gym": tax = 42; break;
                case "Boxing": tax = 41; break;
                case "Yoga": tax = 45; break;
                case "Zumba": tax = 34; break;
                case "Dances": tax = 51; break;
                case "Pilates": tax = 39; break;
            }; break;
        case "f":
            switch (sport) {
                case "Gym": tax = 35; break;
                case "Boxing": tax = 37; break;
                case "Yoga": tax = 42; break;
                case "Zumba": tax = 31; break;
                case "Dances": tax = 53; break;
                case "Pilates": tax = 37; break;
            }; break;
    }
    if (age <= 19) {
        tax = tax * 0.8;
    }
    let diff = Math.abs(tax - sum);
    if (sum >= tax) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${diff.toFixed(2)} more.`);
    }
}

fitnessCard(["50", "m", "23", "Gym"]);
fitnessCard(["20", "f", "15", "Yoga"]);
fitnessCard(["10", "m", "50", "Pilates"])
