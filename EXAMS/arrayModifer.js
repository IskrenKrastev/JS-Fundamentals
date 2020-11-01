function arrayModifer(input) {

    let elements = input.shift().split(' ').map(x => Number(x));

    let line = input.shift();

    while (line !== 'end') {
        let [command, firstValue, secondValue] = line.split(' ');
        firstValue = Number(firstValue);
        secondValue = Number(secondValue);

        switch (command) {

            case 'swap':
                let elOne = elements[firstValue];
                let elTwo = elements[secondValue];

                elements.splice(firstValue, 1, elTwo);
                elements.splice(secondValue, 1, elOne);

                break;

            case 'multiply':
                elements[firstValue] *= elements[secondValue];
                break;

            case 'decrease':
                for (let i = 0; i < elements.length; i++) {
                    elements[i] -= 1;
                }
                break;
        }
        line = input.shift();

    }
    console.log(elements.join(', '));
}
arrayModifer([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
arrayModifer([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);