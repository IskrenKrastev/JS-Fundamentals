function needForSpeedIII(input) {

    let carsCount = Number(input.shift());
    let cars = {};
    for (let i = 0; i < carsCount; i++) {
        let [currentCar, mileage, fuel] = input.shift().split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);
        cars[currentCar] = {
            fuel: fuel,
            mileage: mileage
        }
    }
    let line = input.shift();

    while (line !== 'Stop') {
        let [command, car, firstValue, secondValue] = line.split(' : ');


        switch (command) {
            case 'Drive':
                firstValue = Number(firstValue);
                secondValue = Number(secondValue);

                if (cars[car].fuel >= secondValue) {
                    cars[car].fuel -= secondValue;
                    cars[car].mileage += firstValue;
                    console.log(`${car} driven for ${firstValue} kilometers. ${secondValue} liters of fuel consumed.`);

                    if (cars[car].mileage > 100000) {
                        delete cars[car]
                        console.log(`Time to sell the ${car}!`);
                    }
                } else {
                    console.log('Not enough fuel to make that ride');
                }
                break;

            case 'Refuel':
                firstValue = Number(firstValue);

                if (cars[car].fuel + firstValue > 75) {
                    let refil = 75 - cars[car].fuel;
                    cars[car].fuel = 75;

                    console.log(`${car} refueled with ${refil} liters`);
                } else {
                    cars[car].fuel += firstValue;
                    console.log(`${car} refueled with ${firstValue} liters`);
                }

                break;

            case 'Revert':
                firstValue = Number(firstValue);
                if (cars[car].mileage - firstValue < 10000) {
                    cars[car].mileage = 10000;
                } else {
                    cars[car].mileage -= firstValue;
                    console.log(`${car} mileage decreased by ${firstValue} kilometers`);
                }

                break;
        }
        line = input.shift();
    }

    let sortedCars = Object.entries(cars).sort((a, b) => {
        let aEnt = Object.entries(a[1]);
        let bEnt = Object.entries(b[1]);

        return bEnt[1][1] - aEnt[1][1] || a[0].localeCompare(b[0])
    });

    for (let car of sortedCars) {

        console.log(`${car[0]} -> Mileage: ${cars[car[0]].mileage} kms, Fuel in the tank: ${cars[car[0]].fuel} lt.`);
    }
}
needForSpeedIII([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);
needForSpeedIII([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])