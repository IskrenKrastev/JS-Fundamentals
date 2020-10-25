function train(arr) {
    let passengers = arr[0].split(' ');
    arr.shift();
    let maxPassengers = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');
        if (command[0] === 'Add') {
            passengers.push(command[1]);
        } else {

            for (let j = 0; j < passengers.length; j++) {
                let sum = Number(passengers[j]) + Number(command[0])
                if (sum <= Number(maxPassengers)) {
                    passengers.splice(j, 1, sum);
                    break;
                }
                sum = 0;
            }
        }
    }
    return (passengers.join(' '));

}
console.log(train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']));

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'])