function airPollution(firstArr, secondArr) {

    let matrix = firstArr.map(row => row.split(' ').map(x => Number(x)));
    let forces = secondArr.map(str => str.split(' '));
    let value;
    let command;
    let isOver = false;
    let pollutedAreas = []

    function breeze() {
        matrix[value] = matrix[value].map(x => x - 15);
        for (let j = 0; j < matrix[value].length; j++) {
            if (matrix[value][j] < 0) {
                matrix[value][j] = 0;
            }
        }

    }

    function gale() {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][value] -= 20;
            if (matrix[i][value] < 0) {
                matrix[i][value] = 0;
            }
        }

    }

    function smog() {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i] = matrix[i].map(x => x + value)
        }
    }

    for (let i = 0; i < forces.length; i++) {
        command = forces[i][0];
        value = Number(forces[i][1]);

        switch (command) {

            case 'breeze':
                breeze();
                break;
            case 'gale':
                gale();
                break;
            case 'smog':
                smog();
                break;
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] >= 50) {
                isOver = true
                pollutedAreas.push(`[${i}-${j}]`)
            }
        }
    }


    if (isOver === false) {
        console.log('No polluted areas')
    } else {
        console.log(`Polluted areas: ${pollutedAreas.join(', ')}`)
    }

}
airPollution([
    '5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'
], ['breeze 1', 'gale 2', 'smog 25'])