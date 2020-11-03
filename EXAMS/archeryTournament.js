function archeryTournament(input) {

    let targets = input.shift().split('|').map(x => Number(x));
    let line = input.shift();
    let myPoints = 0;

    while (line !== 'Game over') {
        let [command, startIndex, currentLength] = line.split('@');

        if (command === 'Shoot Left') {
            startIndex = Number(startIndex);
            currentLength = Number(currentLength);

            if (targets[startIndex] !== undefined) {
                while (currentLength > 0) {
                    startIndex--;

                    if (startIndex < 0) {
                        startIndex = targets.length - 1
                    }
                    currentLength--;
                }
                if (targets[startIndex] < 5) {
                    myPoints += targets[startIndex];
                    targets[startIndex] = 0;
                } else {
                    targets[startIndex] -= 5;
                    myPoints += 5
                }
            }
        } else if (command === 'Shoot Right') {
            startIndex = Number(startIndex);
            currentLength = Number(currentLength);

            if (targets[startIndex] !== undefined) {
                while (currentLength > 0) {
                    startIndex++;

                    if (startIndex > targets.length - 1) {
                        startIndex = 0;
                    }
                    currentLength--
                }
                if (targets[startIndex] < 5) {
                    myPoints += targets[startIndex];
                    targets[startIndex] = 0;
                } else {
                    targets[startIndex] -= 5;
                    myPoints += 5
                }
            }

        } else if (command === 'Reverse') {
            targets = targets.reverse();
        }
        line = input.shift();
    }

    console.log(targets.join(' - '));
    console.log(`Iskren finished the archery tournament with ${myPoints} points!`);

}
archeryTournament([
    '10|10|10|10|10',
    'Shoot Left@0@2',
    'Shoot Right@4@5',
    'Shoot Right@6@5',
    'Reverse',
    'Game over',
    ''
]);
archeryTournament([
    '20|30|40|50|60',
    'Shoot Left@0@12',
    'Shoot Right@4@15',
    'Shoot Left@6@5',
    'Reverse',
    'Game over',
    ''
]);