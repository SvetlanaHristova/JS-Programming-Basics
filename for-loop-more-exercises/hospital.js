function hospital(params) {
    let period = Number(params[0]);
    let doctors = 7;
    let patientsTreated = 0;
    let patientsUntreated = 0;
    for (i = 1; i <= period; i++) {
        let patient = Number(params[i]);
        if (i % 3 === 0) {
            if (patientsTreated < patientsUntreated) {
                doctors++;
            }
        }
        if (patient >= doctors) {
            patientsTreated += doctors;
            patientsUntreated += patient - doctors;
        } else {
            patientsTreated += patient;
        }
    }
    console.log(`Treated patients: ${patientsTreated}.`);
    console.log(`Untreated patients: ${patientsUntreated}.`);
}