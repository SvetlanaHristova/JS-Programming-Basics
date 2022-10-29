function balls(params) {
    let index = 0;
    let n = Number(params[index]);
    index++;
    let points = 0;
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let white = 0;
    let black = 0;
    let other = 0;
    for (i = 1; i <= n; i++) {
        let color = params[index];
        index++;
        switch (color) {
            case "red": points += 5;
                red++; break;
            case "orange": points += 10;
                orange++; break;
            case "yellow": points += 15;
                yellow++; break;
            case "white": points += 20;
                white++; break;
            case "black": points = Math.floor(points / 2);
                black++; break;
            default: other++; break;
        }
    }
    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${red}`);
    console.log(`Orange balls: ${orange}`);
    console.log(`Yellow balls: ${yellow}`);
    console.log(`White balls: ${white}`);
    console.log(`Other colors picked: ${other}`);
    console.log(`Divides from black balls: ${black}`);

}
balls(["3", "white", "black", "pink"]);
balls(["5", "red", "red", "ddd", "ddd", "ddd"])
