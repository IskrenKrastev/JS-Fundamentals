function companyUsers(input) {
    let employees = {};
    input.forEach(line => {
        let [company, userId] = line.split(' -> ');

        if (!employees[company]) {
            employees[company] = [];
            employees[company].push(userId);
        } else {
            if (!employees[company].includes(userId)) {
                employees[company].push(userId);

            }
        }
    });

    let sortedEmployees = Object.entries(employees).sort((a, b) => {
        return a[0].localeCompare(b[0]);
    });

    for (let person of sortedEmployees) {
        console.log(person[0]);

        for (let id of person[1]) {
            console.log(`-- ${id}`);
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])