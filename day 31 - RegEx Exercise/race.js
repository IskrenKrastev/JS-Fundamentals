function race(input) {
    let participants = {};
    let nameList = input.shift();
    nameList = nameList.split(', ')
    let line = input.shift();
    let pattRun = /\d/g;
    let pattName = /[A-Za-z]/g;


    while (line !== 'end of race') {
        let sum = 0;
        let name = line.match(pattName).join('');

        if (nameList.includes(name)) {
            let run = line.match(pattRun);
            run.forEach(num => {
                sum += Number(num);
            })
            if (!participants[name]) {
                participants[name] = sum

            } else {
                let oldSum = participants[name];
                oldSum += sum;
                participants[name] = oldSum
            }
        }

        line = input.shift();

    }

    let sortedRuns = Object.entries(participants).sort((a, b) => {
        return b[1] - a[1];
    });
    let a = 1

    let count = 1;
    for (let participant of sortedRuns) {
        if (count === 1) {
            console.log(`1st place: ${participant[0]}`);
            count++
        } else if (count === 2) {
            console.log(`2nd place: ${participant[0]}`);
            count++
        } else if (count === 3) {

            console.log(`3rd place: ${participant[0]}`);
            count++
        }
    }
}
race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);