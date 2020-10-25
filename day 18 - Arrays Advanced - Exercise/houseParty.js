function houseParty(arr) {
    let guests = [];
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');

        if (command[2] === 'going!') {
            if (guests.includes(command[0])) {
                console.log(`${command[0]} is already in the list!`);

            } else {
                guests.push(command[0])
            }
        } else {
            if (!guests.includes(command[0])) {
                console.log(`${command[0]} is not in the list!`);
            } else {
                for (let j = 0; j < guests.length; j++) {
                    if (guests[j] === command[0]) {
                        guests.splice(j, 1);
                    }
                }

            }
        }

    }
    console.log(guests.join('\n'));

}
houseParty([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
]);