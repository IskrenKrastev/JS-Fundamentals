function softuniReception(input) {

    let perHour = 0;
    let students = Number(input.pop());
    let countHours = 0

    for (let i = 0; i < 3; i++) {
        perHour += Number(input[i]);
    }

    while (students > 0) {
        students -= perHour
        countHours++;

        if (countHours % 4 === 0) {
            countHours++;
        }
    }
    console.log(`Time needed: ${countHours}h.`);

}
//softuniReception(['5', '6', '4', '20']);
softuniReception(['1', '2', '3', '45']);
softuniReception(['3', '2', '5', '40']);