function flightSchedule(arr) {
    let readyFlights = [];


    let [flights, newStatuses, neededStatus] = arr;

    flights.forEach(flight => {
        let sortedFlights = flight.split(' ');
        let flightNum = sortedFlights[0];
        let destination = sortedFlights.slice(1).join(' ')

        readyFlights.push({
            flightNum: flightNum,
            Destination: destination,
            Status: 'Ready to fly'
        });
    });

    newStatuses.forEach(flight => {
        let [currentFlightNum, changedStatus] = flight.split(' ');

        for (let currentFlight of readyFlights) {

            if (currentFlightNum === currentFlight.flightNum) {
                currentFlight.Status = changedStatus;
            }

        }
    });

    let needToChek = neededStatus[0];

    for (let flight of readyFlights) {

        if (flight.Status === needToChek) {
            delete flight.flightNum
            console.log(flight);
        }
    }
}
flightSchedule([
    ['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'
    ],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'
    ],
    ['Cancelled']
])