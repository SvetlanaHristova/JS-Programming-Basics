function oldBooks(params) {
    let index = 0;
    let needBook = params[index++];
    let book = params[index++];
    let countBook = 0;
    let faund = true;
    while (book !== needBook) {
        book = params[index++];
        countBook++;
        if (book === "No More Books") {
            faund = false;
            console.log("The book you search is not here!");
            console.log(`You checked ${countBook} books.`);
            break;
        }

    }
    if (faund === true) {
        console.log(`You checked ${countBook} books and found it.`);
    }
}

oldBooks(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"])


