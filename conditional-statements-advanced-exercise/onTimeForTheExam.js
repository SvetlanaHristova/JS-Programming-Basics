function onTimeForTheExam(input) {
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minArrival = Number(input[3]);
    let exam = hourExam * 60 + minExam;
    let arrival = hourArrival * 60 + minArrival;
    let condition;

    if (arrival > exam) {
        state = "Late";
        condition = "after";
    } else if ((arrival + 30) >= exam) {
        state = "On time";
        condition = "before";
    } else {
        state = "Early";
        condition = "before";
    }
    console.log(state);
    let diff = Math.abs(arrival - exam);
    let hh = Math.floor(diff / 60);
    let mm = diff % 60;
    if (hh < 1 && mm >= 1) {
        console.log(`${mm} minutes ${condition} the start`);
    } else if (hh >= 1 && mm >= 10) {
        console.log(`${hh}:${mm} hours ${condition} the start`);
    } else if (hh >= 1 && mm < 10) {
        console.log(`${hh}:0${mm} hours ${condition} the start`);
    }

}


onTimeForTheExam(["9", "30", "9", "31"])
onTimeForTheExam(["9", "00", "8", "30"])
onTimeForTheExam(["16", "00", "15", "00"])
onTimeForTheExam(["9", "00", "10", "30"])
onTimeForTheExam(["14", "00", "13", "55"])
onTimeForTheExam(["11", "30", "8", "12"])
onTimeForTheExam(["10", "00", "10", "00"])
onTimeForTheExam(["11", "30", "10", "55"])
onTimeForTheExam(["11", "30", "12", "29"])

