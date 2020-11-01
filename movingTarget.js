function movingTarget(input) {

    let targets = input.shift().split(' ').map(x => Number(x));
    let line = input.shift();

    while (line !== 'End') {
        let [command, firstValue, secondValue] = line.split(' ');
        firstValue = Number(firstValue);
        secondValue = Number(secondValue);

        switch (command) {

            case 'Shoot':

                if (targets[firstValue]) {
                    targets[firstValue] -= secondValue;
                }
                if (targets[firstValue] <= 0) {
                    targets.splice(firstValue, 1);
                }
                break;

            case 'Add':
                if (targets[firstValue]) {
                    targets.splice(firstValue, 0, secondValue);
                } else {
                    console.log(`Invalid placement!`);
                }
                break;

            case 'Strike':
                if (targets[firstValue] && targets[firstValue - secondValue] && targets[firstValue + secondValue]) {
                    targets.splice(firstValue - secondValue, secondValue * 2 + 1);
                } else {
                    console.log(`Strike missed!`);
                }
                break;
        }
        line = input.shift();
    }
    console.log(targets.join('|'));
}
movingTarget([
    '52 74 23 44 96 110',
    'Shoot 5 10',
    'Shoot 1 80',
    'Strike 2 1',
    'Add 22 3',
    'End'
]);
movingTarget([
    '47 55 85 78 99 20',
    'Shoot 1 55',
    'Shoot 8 15',
    'Strike 2 3',
    'Add 0 22',
    'Add 2 40',
    'Add 2 50',
    'End'
]);