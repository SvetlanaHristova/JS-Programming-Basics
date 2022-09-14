function projectsCreation(input) {
        let [architectNam, needhours] = input;
        let completeproject = needhours * 3;
        console.log(`The architect ${architectNam} will need ${completeproject} hours to complete ${needhours} project/s.`);
}
projectsCreation([`George`, 4])
