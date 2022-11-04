function trainTheTrainers(params) {
    let index = 0;
    let countJuries = Number(params[index++]);
    let namePresentation = params[index++];
    let presntationCounter = 0;
    let sumPresentation = 0;
    let averageAssessmen = 0;
    while (namePresentation !== "Finish") {
        presntationCounter++;
        let sumAssessment = 0;
        for (i = 1; i <= countJuries; i++) {
            currentAssessment = Number(params[index++]);
            sumAssessment += currentAssessment;
        }
        averageAssessmen = sumAssessment / countJuries;
        console.log(`${namePresentation} - ${averageAssessmen.toFixed(2)}.`);
        sumPresentation += averageAssessmen;
        namePresentation = params[index++];
    }
    let averageAssessmenPresentation = sumPresentation / presntationCounter;
    console.log(`Student's final assessment is ${averageAssessmenPresentation.toFixed(2)}.`);
}


trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
trainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);
trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"])
