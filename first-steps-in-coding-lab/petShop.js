function petShop(input) {
        let [forDog, forCat] = input;
        let priceForDog = forDog * 2.5;
        let priceForCat = forCat * 4;
        let totolPrice = priceForDog + priceForCat;
        console.log(`${totolPrice} lv.`);
}
petShop([5, 4])
