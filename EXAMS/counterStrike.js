function counterStrike(input) {

    let energy = Number(input.shift());
    let line = input.shift();
    let wonBattles = 0;
    let isWon = true;

    while (line !== 'End of battle') {
        let distsnce = Number(line);
        if (energy - distsnce >= 0) {
            energy -= distsnce;
            wonBattles++;

            if (wonBattles % 3 === 0) {
                energy += wonBattles
            }
        } else {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
            isWon = false;
            break;
        }
        line = input.shift();
    }
    if (isWon) {
        console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);

    }
}
counterStrike([
    '100', '10', '10',
    '10', '1', '2',
    '3', '73', '10'
]);
counterStrike(['200', '54', '14', '28', '13', 'End of battle']);