function cinemaTickets(params) {
    let index = 0;
    let totalTickets = 0;
    let totalStudentTicket = 0;
    let totalStandartTicket = 0;
    let totalKidTicket = 0;
    let nameMovie = params[index++];

    while (nameMovie !== "Finish") {
        let freeSeats = Number(params[index++]);
        let type = params[index++];
        let tickets = 0;
        let studentTicket = 0;
        let standartTicket = 0;
        let kidTicket = 0;

        while (type !== "End") {
            tickets++;

            switch (type) {
                case "student": studentTicket++; break;
                case "standard": standartTicket++; break;
                case "kid": kidTicket++; break;
            }

            if (tickets >= freeSeats) {
                break;
            }
            type = params[index++];
        }
        totalTickets += tickets;
        totalStudentTicket += studentTicket;
        totalStandartTicket += standartTicket;
        totalKidTicket += kidTicket;
        percentageFull = tickets * 100 / freeSeats;

        console.log(`${nameMovie} - ${percentageFull.toFixed(2)}% full.`);
        nameMovie = params[index++];
    }

    let percentageStudentTicket = totalStudentTicket * 100 / totalTickets;
    let percentageStandartTicket = totalStandartTicket * 100 / totalTickets;
    let percentageKidTicket = totalKidTicket * 100 / totalTickets;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${percentageStudentTicket.toFixed(2)}% student tickets.`);
    console.log(`${percentageStandartTicket.toFixed(2)}% standard tickets.`);
    console.log(`${percentageKidTicket.toFixed(2)}% kids tickets.`);

}
cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie",
    "6", "student", "student", "student", "student", "student", "student", "Finish"]);

cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student",
    "student", "standard", "student", "End", "The Green Mile",
    "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus",
    "3", "standard", "standard", "standard", "Finish"])

