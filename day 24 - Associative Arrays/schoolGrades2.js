function schoolGrades(input) {

    let students = {};

    function sortedGrades(gradess) {
        let sumOfGrades = 0;

        for (let grade of gradess) {
            sumOfGrades += grade;
        }
        return sumOfGrades / gradess.length
    }

    input.forEach(line => {
        let splitetLine = line.split(' ');
        let name = splitetLine.shift();
        let grades = splitetLine.map(Number);

        if (students[name]) {
            let oldGrades = students[name];
            let allgrades = oldGrades.concat(grades);
            students[name] = allgrades;

        } else {
            students[name] = grades;
        }
    });

    let sortedStudents = Object.entries(students).sort((a, b) => {
        let sortedGradesA = a[1]
        let sortedGradesB = b[1];

        let averageA = sortedGrades(sortedGradesA);
        let averageB = sortedGrades(sortedGradesB);

        return averageA - averageB
    });

    for (let student of sortedStudents) {
        console.log(`${student[0]}: ${student[1].join(', ')}`);
    }
}
schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6'])