function readText(params) {
    let index = 0;
    let name = params[index];
    index++;
    while (name !== "Stop") {
        console.log(name);
        name = params[index++];
    }
}
readText(["Sofia",
    "Berlin",
    "Moscow",
    "Athens",
    "Madrid",
    "London",
    "Paris",
    "Stop",
    "AfterStop"])

