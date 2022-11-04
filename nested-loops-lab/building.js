function building(params) {
    let countFloor = Number(params[0]);
    let countSpaces = Number(params[1]);

    for (i = countFloor; i > 0; i--) {
        let tipe = "";
        let floor = "";

        if (i === countFloor) {
            tipe = "L" + i;
        } else if (i % 2 === 0) {
            tipe = "O" + i;
        } else {
            tipe = "A" + i;
        }

        for (j = 0; j < countSpaces; j++) {
            let space = tipe;
            space = space + j;
            floor += space + " ";
        }

        console.log(floor);
    }
}
building(["6", "4"]);
building(["9", "5"])