function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let typeCar;
    let classCar;
    let priseRent;
    if (budget <= 100) {
        classCar = "Economy class";
        switch (season) {
            case "Summer": typeCar = "Cabrio", priseRent = budget * 0.35; break;
            case "Winter": typeCar = "Jeep", priseRent = budget * 0.65; break;
        }
    } else if (budget > 100 && budget <= 500) {
        classCar = "Compact class";
        switch (season) {
            case "Summer": typeCar = "Cabrio", priseRent = budget * 0.45; break;
            case "Winter": typeCar = "Jeep", priseRent = budget * 0.80; break;
        }
    } else {
        classCar = "Luxury class";
        typeCar = "Jeep";
        priseRent = budget * 0.90;
    }
    console.log(classCar);
    console.log(`${typeCar} - ${priseRent.toFixed(2)}`);

}
carToGo([450, "Summer"]);
carToGo([450, "Winter"]);
carToGo([1010, "Summer"]);
carToGo([99.99, "Summer"]);
carToGo([1010, "Winter"]);
carToGo([70.50, "Winter"])