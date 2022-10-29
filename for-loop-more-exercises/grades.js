function grades(params) {
    let countStudents = Number(params[0]);
    let top = 0;
    let good = 0;
    let medium = 0;
    let fail = 0;
    let average = 0;

    for (let i = 1; i <= countStudents; i++) {
        examGrade = Number(params[i]);
        average += examGrade;
        if (examGrade < 3) {
            fail++;
        } else if (examGrade >= 3 && examGrade < 4) {
            medium++;
        } else if (examGrade >= 4 && examGrade < 5) {
            good++;
        } else
            top++;
    }

    top = top * 100 / countStudents;
    good = good * 100 / countStudents;
    medium = medium * 100 / countStudents;
    fail = fail * 100 / countStudents;
    average = average / countStudents;

    console.log(`Top students: ${top.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${good.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${medium.toFixed(2)}%`);
    console.log(`Fail: ${fail.toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`);

}
grades([10,
    3.00,
    2.99,
    5.68,
    3.01,
    4,
    4,
    6.00,
    4.50,
    2.44,
    5
]);
grades([6,
    2,
    3,
    4,
    5,
    6,
    2.2
])