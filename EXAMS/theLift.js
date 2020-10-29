function theLift(input) {

    let waitingPeople = Number(input.shift());
    let wagons = input.shift().split(' ');
    let usedSpaces = 0
    let freeSpaces = 0
    wagons.forEach(wagon => {
        freeSpaces += 4 - Number(wagon)
    });

    for (let i = 0; i < wagons.length; i++) {

        while (Number(wagons[i]) < 4) {
            wagons[i]++;
            usedSpaces++
            waitingPeople--;
            if (waitingPeople === 0) {
                break;
            }
        }
        if (waitingPeople === 0) {
            break;
        }
    }

    if (waitingPeople === 0 && freeSpaces > usedSpaces) {
        console.log('The lift has empty spots!');
        console.log(wagons.join(' '));
    } else if (waitingPeople > 0 && freeSpaces === usedSpaces) {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!`);
        console.log(wagons.join(' '));
    } else if (waitingPeople === 0 && freeSpaces === usedSpaces) {
        console.log(wagons.join(' '));

    }
}
theLift(['20', '0 2 0'])
theLift(['15', '0 0 0 0 0'])