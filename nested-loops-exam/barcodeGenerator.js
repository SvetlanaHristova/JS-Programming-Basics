function barcodeGenerator(params) {
    let startNum = params[0];
    let endNum = params[1];
    let barcode = "";
    for (let a = Number(startNum.charAt(0)); a <= Number(endNum.charAt(0)); a++) {
        for (let b = Number(startNum.charAt(1)); b <= Number(endNum.charAt(1)); b++) {
            for (let c = Number(startNum.charAt(2)); c <= Number(endNum.charAt(2)); c++) {
                for (let d = Number(startNum.charAt(3)); d <= Number(endNum.charAt(3)); d++) {
                    if (a % 2 === 1 && b % 2 === 1 && c % 2 === 1 && d % 2 === 1) {
                        let code = "" + a + b + c + d;
                        barcode += code + " ";

                    }
                }
            }
        }
    }
    console.log(barcode);
}
barcodeGenerator(["2345", "6789"])



