function oscarsCeremony(input) {
    let rent = Number(input);
    let figurines = 0.7 * rent;
    let catering = figurines - 0.15 * figurines;
    let sounding = catering / 2;
    let budget = (rent + catering + figurines + sounding).toFixed(2);

    console.log(budget);

}
oscarsCeremony("3500")
