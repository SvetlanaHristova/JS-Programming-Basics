function cinema(params) {
    let capacity = Number(params[0]);
    let income = 0;

    for (i = 1; i < params.length; i++) {
        let people = params[i];
        if (people === "Movie time!") {
            console.log(`There are ${capacity} seats left in the cinema.`);
            break;
        } else {
            people = Number(people);
        }
        let price = 0;
        if (people % 3 === 0) {
            price = people * 5 - 5;
        } else {
            price = people * 5;
        }
        if (capacity < people) {
            console.log("The cinema is full.");
            break;
        }
        income += price;
        capacity -= people;

    }
    console.log(`Cinema income - ${income} lv.`);
}
cinema(["60",
    "10",
    "6",
    "3",
    "20",
    "15",
    "Movie time!"]);
cinema(["50",
    "15",
    "10",
    "10",
    "15",
    "5"]);
cinema(["100",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "Movie time!"])
