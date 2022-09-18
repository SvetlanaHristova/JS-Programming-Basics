function summerOutfit(params) {
    let degrees = Number(params[0]);
    let partOfDay = params[1];
    let outfit = 0;
    let shoes = 0;
    if (degrees >= 10 && degrees <= 18) {
        switch (partOfDay) {
            case "Morning": outfit = "Sweatshirt", shoes = "Sneakers"
                break;
            case "Afternoon":
            case "Evening": outfit = "Shirt", shoes = "Moccasins"
                break;
        }
    } else if (degrees > 18 && degrees <= 24) {
        switch (partOfDay) {
            case "Morning":
            case "Evening": outfit = "Shirt", shoes = "Moccasins"
                break;
            case "Afternoon": outfit = "T-Shirt", shoes = "Sandals"
                break;
        }
    } else if (degrees >= 25) {
        switch (partOfDay) {
            case "Morning": outfit = "T-Shirt", shoes = "Sandals"
                break;
            case "Afternoon": outfit = "Swim Suit", shoes = "Barefoot"
                break;
            case "Evening": outfit = "Shirt", shoes = "Moccasins"
                break;
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(["22",
    "Afternoon"])

