function piccolo(input) {

    let parking = [];
    input.forEach(line => {
        let [move, carNum] = line.split(', ');

        if (move === 'IN') {
            if (!parking.includes(carNum)) {
                parking.push(carNum);

            }
        } else if (move === 'OUT') {

            if (parking.includes(carNum)) {
                let carIndex = parking.indexOf(carNum);
                parking.splice(carIndex, 1);
            }

        }
    });

    if (parking.length > 0) {
        let sortedCars = parking.sort((a, b) => {
            return a.localeCompare(b)
        });

        for (let car of sortedCars) {

            console.log(car);
        }

    } else {
        console.log('Parking Lot is Empty');
    }

}
piccolo([])
piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);
piccolo([
    'OUT, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
])