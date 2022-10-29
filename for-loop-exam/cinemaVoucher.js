function cinemaVoucher(params) {
    let index = 0;
    let voucher = Number(params[index++]);
    let purchase = params[index++];
    let ticket = 0;
    let goods = 0;
    while (purchase !== "End") {
        let price = 0;
        price = purchase.charCodeAt(0);
        if (purchase.length > 8) {
            ticket++;
            price += purchase.charCodeAt(1);
        } else {
            goods++;
        }

        if (voucher >= price) {
            voucher -= price;
        } else {
            if (purchase.length > 8) {
                ticket--;
            } else {
                goods--;
            }
            break;
        }

        purchase = params[index++];
    }
    console.log(`${ticket}`);
    console.log(`${goods}`);
}