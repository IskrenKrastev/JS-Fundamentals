function arrayManipulator(firstArr, secondArr) {
    let manipulator;

    let sum = 0;


    for (let i = 0; i < secondArr.length; i++) {
        manipulator = secondArr[i].split(' ');
        let command = manipulator[0];

        switch (command) {
            case 'add':
                firstArr.splice(manipulator[1], 0, Number(manipulator[2]))
                break;

            case 'addMany':
                let index = manipulator[1]
                for (let i = 2; i < manipulator.length; i++) {
                    firstArr.splice(index, 0, Number(manipulator[i]));
                    index++
                }
                break;

            case 'contains':
                let num = Number(manipulator[1])
                console.log(firstArr.indexOf(num))
                break;

            case 'remove':
                firstArr.splice(manipulator[1], 1);
                break;

            case 'shift':
                for (let l = 0; l < manipulator[1]; l++) {
                    firstArr.push(firstArr[0]);
                    firstArr.shift(firstArr[0]);
                }
                break;

            case 'sumPairs':
                for (let k = 0; k < firstArr.length; k++) {
                    if (k + 1 < firstArr.length) {
                        sum = firstArr[k] + firstArr[k + 1];
                        firstArr.splice(k, 2, sum);
                    }
                }
                break;
            case 'print':
                break;

        }

    }
    console.log(`[ ${firstArr.join(', ')} ]`);

}
arrayManipulator([2, 2, 4, 2, 4, 2], ["add 1 4", "sumPairs", "print"])