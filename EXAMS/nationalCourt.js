function nationalCourt(input) {

    let peoplePerHour = 0;
    let allPeople = Number(input.pop());
    let allHours = 0;

    for (let i = 0; i < input.length; i++) {
        peoplePerHour += Number(input[i])
    }

    while (allPeople > 0) {
        allPeople -= peoplePerHour;
        allHours++;

        if (allHours % 4 === 0) {
            allHours++
        }

    }
    console.log(`Time needed: ${allHours}h.`);
}
nationalCourt(['5', '6', '4', '20']);
nationalCourt(['1', '2', '3', '45']);
nationalCourt(['3', '2', '5', '40'])