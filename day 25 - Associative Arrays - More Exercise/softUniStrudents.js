function softUniStudents(input) {

    let softUni = {};

    input.forEach(line => {
        let student = [];

        if (line[0] === 'u') {

            let splitedLine = line.split(' ');
            let userAndCredit = splitedLine[0].split('[');
            let userName = userAndCredit[0];
            let credits = userAndCredit[1];
            credits = credits.split(']');
            credits = Number(credits[0])
            let email = splitedLine[3];
            let course = splitedLine.pop();
            student.push(credits, userName, email)

            if (softUni[course]) {

                let softUniEntries = Object.entries(softUni[course]);
                let oldCapacity = Number(softUniEntries[0][1]);

                if (oldCapacity > 0) {
                    let newCapacity = oldCapacity - 1;
                    softUni[course].splice(0, 1, newCapacity);
                    softUni[course].push(student)

                }
            }

        } else {
            let [course, capacity] = line.split(': ');
            capacity = Number(capacity)

            if (!softUni[course]) {
                softUni[course] = [];
                softUni[course].push(capacity)
            } else {
                let softUniEntries = Object.entries(softUni[course]);
                let oldCapacity = Number(softUniEntries[0][1]);
                let newCapacity = oldCapacity + capacity;
                softUni[course].splice(0, 1, newCapacity);

            }

        }
    });

    let objEntries = Object.entries(softUni);

    let sortedByStudentsCount = objEntries.sort((a, b) => {
        let aLength = a[1].length - 1;
        let bLength = b[1].length - 1;

        return bLength - aLength;
    });

    sortedByStudentsCount.forEach(course => {
        let placeLeft = course[1].shift();
        console.log(`${course[0]}: ${placeLeft} places left`);

        let sortedByCredits = course[1].sort((a, b) => {
            return b[0] - a[0];
        });

        for (let student of sortedByCredits) {
            console.log(`--- ${student[0]}: ${student[1]}, ${student[2]}`);
        }
    });

}
softUniStudents(['JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'
]);