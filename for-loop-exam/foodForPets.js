function foodForPets(params) {
    let index = 0;
    let day = Number(params[index]);
    index++;
    let totalFood = Number(params[index]);
    index++;
    let biscuits = 0;
    let dogFood = 0;
    let catFood = 0;
    for (i = 1; i <= day; i++) {
        let dogFoodPerDay = Number(params[index]);
        index++;
        let catFoodPerDay = Number(params[index]);
        index++;
        dogFood += dogFoodPerDay;
        catFood += catFoodPerDay;
        if (i % 3 === 0) {
            biscuits += 0.1 * (catFoodPerDay + dogFoodPerDay);
        }
    }
    let food = (dogFood + catFood) * 100 / totalFood;
    let prFoodDog = dogFood * 100 / (dogFood + catFood);
    let prFoodCat = catFood * 100 / (dogFood + catFood);
    console.log(`Total eaten biscuits: ${(biscuits).toFixed(0)}gr.`);
    console.log(`${food.toFixed(2)}% of the food has been eaten.`);
    console.log(`${prFoodDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${prFoodCat.toFixed(2)}% eaten from the cat.`);
}

foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);
foodForPets(["3", "500", "100", "30", "110", "25", "120", "35"])
