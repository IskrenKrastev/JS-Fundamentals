function schoolGrades(input) {
    let students = new Map

    for (let line of input) {

        let lineArr = line.split(' ');
        let name = lineArr.shift();
        let grades = lineArr.map(x => Number(x));

        if (students.has(name)) {
            let oldGrades = students.get(name);
            let allGrades = oldGrades.concat(grades);
            students.set(name, allGrades);
        } else {
            students.set(name, grades)
        }
    }

    let studentsEntries = Array.from(students.entries());
    let sortedStudents = studentsEntries.sort((a, b) => {
        let studenGradeA = a[1];
        let studenGradeB = b[1];

        let averageGradesA = getAverageGrades(studenGradeA);
        let averageGradesB = getAverageGrades(studenGradeB);

        return averageGradesA - averageGradesB
    });

    function getAverageGrades(grades) {

        let gradesSum = 0;

        for (let grade of grades) {
            gradesSum += grade
        }
        return gradesSum / grades.length
    }

    for (let kvp of sortedStudents) {
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`);
    }

}
schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6'])