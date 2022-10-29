function footballLeague(params) {
    let capacity = Number(params[0]);
    let fen = Number(params[1]);
    let fenA = 0;
    let fenB = 0;
    let fenV = 0;
    let fenG = 0;

    for (let i = 2; i <= params.length; i++) {
        const sector = params[i];
        switch (sector) {
            case "A": fenA++; break;
            case "B": fenB++; break;
            case "V": fenV++; break;
            case "G": fenG++; break;
        }
    }
    fenA = fenA * 100 / fen;
    fenB = fenB * 100 / fen;
    fenV = fenV * 100 / fen;
    fenG = fenG * 100 / fen;
    fen = fen * 100 / capacity;

    console.log(fenA.toFixed(2) + "%");
    console.log(fenB.toFixed(2) + "%");
    console.log(fenV.toFixed(2) + "%");
    console.log(fenG.toFixed(2) + "%");
    console.log(fen.toFixed(2) + "%");

}
footballLeague([9,
    10,
    "A",
    "V",
    "V",
    "V",
    "G",
    "B",
    "A",
    "V",
    "B",
    "B",
])
footballLeague([93,
    16,
    "A",
    "V",
    "G",
    "G",
    "B",
    "B",
    "G",
    "B",
    "A",
    "B",
    "B",
    "B",
    "A",
    "B",
    "B",
    "A",
]);
footballLeague([1000,
    12,
    "A",
    "A",
    "V",
    "V",
    "A",
    "G",
    "A",
    "A",
    "V",
    "G",
    "V",
    "A",
])