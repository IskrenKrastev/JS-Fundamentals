function arrayManipulator_2(firstArr, secondArr) {

    let manipulator;
    let command;
    let sum = 0;

    let add = function () {
        firstArr.splice(manipulator[1], 0, Number(manipulator[2]));
        return add;
    };

    let addMany = function () {
        for (let i = manipulator.length; i > 2; i--) {
            firstArr.splice(manipulator[1], 0, Number(manipulator.pop()));
        }
        return firstArr;
    };

    let contains = function () {
        console.log(firstArr.indexOf(Number(manipulator[1])))
    };

    let remove = function () {
        firstArr.splice(manipulator[1], 1)
    };

    let shift = function () {
        for (let j = 0; j < manipulator[1]; j++) {
            let num = firstArr.shift();
            firstArr.push(num);
        }
        return firstArr;
    };

    let sumPairs = function () {
        for (let k = 0; k < firstArr.length; k++) {
            if (k + 1 < firstArr.length) {
                sum = firstArr[k] + firstArr[k + 1];
                firstArr.splice(k, 2, sum);
            }

        }
        return firstArr;
    };



    while (command !== 'print') {
        manipulator = secondArr.shift().split(' ');
        command = manipulator[0];

        switch (command) {
            case 'add':
                add();
                break;
            case 'addMany':
                addMany();
                break;
            case 'contains':
                contains();
                break;
            case 'remove':
                remove();
                break;
            case 'shift':
                shift();
                break;
            case 'sumPairs':
                sumPairs();
                break;
        }
    }
    console.log(`[ ${firstArr.join(', ')} ]`);

}

arrayManipulator_2([2, 2, 4, 2, 4, 2], ["add 1 4", "sumPairs", "print"])