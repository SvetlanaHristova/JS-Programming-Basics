function vacationBooksList(input) {
    let pages = Number(input[0]);
    let pagesForHour = Number(input[1]);
    let days = Number(input[2]);
    let totalHour = pages / pagesForHour;
    let hourPerDay = totalHour / days;

    console.log(hourPerDay);
}
vacationBooksList(["212", "20", "2"])
