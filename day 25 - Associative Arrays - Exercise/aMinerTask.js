function aMinerTask(input) {
    let minerTask = {}

    for (let i = 0; i < input.length; i += 2) {
        if (!minerTask[input[i]]) {
            minerTask[input[i]] = Number(input[i + 1]);

        } else {
            let lastQuantity = minerTask[input[i]];
            lastQuantity += Number(input[i + 1]);
            minerTask[input[i]] = lastQuantity;
        }
    }

    for (let item of Object.entries(minerTask)) {

        console.log(`${item[0]} -> ${item[1]}`);
    }
}
aMinerTask([
    'gold', '155',
    'silver', '10',
    'copper', '17',
    'gold', '15'
]);