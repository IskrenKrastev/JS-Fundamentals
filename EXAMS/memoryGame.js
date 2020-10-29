function memoryGame(input) {

    let elements = input.shift();
    elements = elements.trim()
    elements = elements.split(' ')
    let line = input.shift();
    let moves = 0;
    while (line !== 'end') {

        let [firstIndex, secondIndex] = line.split(' ');
        firstIndex = Number(firstIndex);
        secondIndex = Number(secondIndex);

        if (elements[firstIndex] && elements[secondIndex]) {

            if (elements[firstIndex] === elements[secondIndex]) {
                moves++;
                console.log(`Congrats! You have found matching elements - ${elements[firstIndex]}!`);
                if (elements.length === 2) {
                    elements = [];

                } else {
                    if (firstIndex > secondIndex) {
                        elements.splice(firstIndex, 1);
                        elements.splice(secondIndex, 1)
                    } else {
                        elements.splice(firstIndex, 1);
                        elements.splice(secondIndex - 1, 1)
                    }
                }

            } else {
                moves++;
                console.log('Try again!');
            }
        } else {
            moves++;
            let middleIndex = Math.floor(elements.length / 2);
            elements.splice(middleIndex, 0, `-${moves}a`, `-${moves}a`);
            console.log(`Invalid input! Adding additional elements to the board`);
        }
        if (elements.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            break;
        }

        line = input.shift();
    }
    if (elements.length > 0) {
        console.log('Sorry you lose :(');
        console.log(elements.join(' '));
    }

}
// memoryGame([
//     '1 1 2 2 3 3 4 4 5 5 ',
//     '1 0',
//     '-1 0',
//     '1 0 ',
//     '1 0 ',
//     '1 0 ',
//     'end'
// ]);
memoryGame(['a 2 4 a 2 4', '0 3', '0 2', '0 1', '0 1', 'end']);
//memoryGame(['a 2 4 a 2 4 ', '4 0 ', '0 2', '0 1', '0 1 ', 'end']);