function workingHours(input) {
    let hours = Number(input[0]);
    let day = input[1];
    if ((hours > 18 && hours <= 24) || (hours < 10) || (day === "Sunday")) {
        console.log("closed");
    } else {
        console.log("open");
    }
}

workingHours(["11", "Sunday"])


