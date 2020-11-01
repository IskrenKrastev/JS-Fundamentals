function shootForTheWin(input) {

    let targets = input.shift().split(' ').map(x => Number(x));
    let line = input.shift();
    let targetsCount = 0;

    while (line !== 'End') {
        let index = Number(line);

        if (targets[index] !== undefined) {

            let currentTarget = targets[index];
            for (let i = 0; i < targets.length; i++) {
                if (i !== index && targets[i] > -1) {
                    if (targets[i] > currentTarget) {
                        targets[i] -= currentTarget
                    } else if (targets[i] <= currentTarget) {
                        targets[i] += currentTarget;
                    }
                }
            }
            targets[index] = -1;
            targetsCount++;

        }
        line = input.shift();
    }
    console.log(`Shot targets: ${targetsCount} -> ${targets.join(' ')}`);
}
shootForTheWin(['24 50 36 70', '0', '4', '3', '1', 'End']);
shootForTheWin(['30 30 12 60 54 66', '5', '2', '4', '0', 'End']);