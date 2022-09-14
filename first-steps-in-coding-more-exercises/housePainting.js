function housePainting(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let areaSquareWalls = (x * x) * 2 - 1.2 * 2;
    let areaRectangularWalls = 2 * (x * y - 1.5 * 1.5);
    let areaRectangularRoof = 2 * x * y;
    let areaTriangularRoof = 2 * x * h / 2;
    let greenPaint = ((areaSquareWalls + areaRectangularWalls) / 3.4).toFixed(2);
    let redPaint = ((areaRectangularRoof + areaTriangularRoof) / 4.3).toFixed(2);

    console.log(greenPaint);
    console.log(redPaint);

}
housePainting(["6", "10", "5.2"])
