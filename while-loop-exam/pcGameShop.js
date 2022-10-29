function pcGameShop(params) {
    let index=0;
    let n=Number(params[index++]);
    let hearthstone=0;
    let fornite=0;
    let overwatch=0;
    let others=0;
    for (let i = 1; i <= n; i++) {
        let nameGame=params[index++];
        switch (nameGame) {
            case "Hearthstone":hearthstone++;break;
            case "Fornite":fornite++;break;
            case "Overwatch":overwatch++;break;
            default:others++;break;
        }
        }
        hearthstone=hearthstone*100/n;
        fornite=fornite*100/n;
        overwatch=overwatch*100/n;
        others=others*100/n;

        console.log(`Hearthstone - ${hearthstone.toFixed(2)}%`);
        console.log(`Fornite - ${fornite.toFixed(2)}%`);
        console.log(`Overwatch - ${overwatch.toFixed(2)}%`);
        console.log(`Others - ${others.toFixed(2)}%`);
}
pcGameShop(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])

