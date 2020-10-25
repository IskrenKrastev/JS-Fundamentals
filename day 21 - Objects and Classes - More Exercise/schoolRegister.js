function schoolRegister(input) {
    let listOfStudents = []

    input.forEach(student => {
        let splitedLine = student.split(', ');
        let studentName = splitedLine[0].split(': ')[1];
        let grade = Number(splitedLine[1].split(': ')[1]);
        let score = Number(splitedLine[2].split(': ')[1]);

        if (score >= 3) {
            grade += 1

            listOfStudents.push({
                studentName: studentName,
                grade: grade,
                score: score,
            });
        }
    });
    listOfStudents.sort((a, b) => {
        return a.grade - b.grade
    });
    let sameGrade = 0;
    let sameGradeStudent = [];
    let scoreSum = 0;
    let sameGradeCount = 0;

    for (let student of listOfStudents) {
        let currentIndex = listOfStudents.indexOf(student);

        if (student.grade !== sameGrade) {
            sameGradeStudent = [];
            sameGradeCount = 0;
            sameGradeCount++;
            scoreSum = 0;
            sameGrade = student.grade;
            sameGradeStudent.push(student.studentName);
            scoreSum += student.score;
            console.log(`${sameGrade} Grade`);
        } else {
            sameGradeCount++;
            sameGradeStudent.push(student.studentName);
            scoreSum += student.score;
        }
        if (listOfStudents[currentIndex + 1] !== undefined) {
            if (listOfStudents[currentIndex].grade !== listOfStudents[currentIndex + 1].grade) {
                console.log(`List of students: ${sameGradeStudent.join(', ')}`);
                console.log(`Average annual grade from last year: ${(scoreSum / sameGradeCount ).toFixed(2)}`);
                console.log('');
            }
        } else {
            console.log(`List of students: ${sameGradeStudent.join(', ')}`);
            console.log(`Average annual grade from last year: ${(scoreSum / sameGradeCount ).toFixed(2)}`);
            console.log('');
        }
    }
}
schoolRegister(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
])