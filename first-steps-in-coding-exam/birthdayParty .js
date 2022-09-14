function birthdayParty(input) {
    let rent = Number(input);

    let cake = 0.2 * rent;
    let drinks = cake - 0.45 * cake;
    let animator = rent / 3;
    let budget = rent + cake + drinks + animator;

    console.log(budget)

}

birthdayParty("3720")
