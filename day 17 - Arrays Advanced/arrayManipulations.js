function arrayManipulations(arr) {

    // let numbers = arr[0].split(' ')


    // arr.shift();

    // for (let i = 0; i < arr.length; i++) {

    //     let command = arr[i].split(' ');

    //     if (command[0] === 'Add') {
    //         numbers.push(command[1]);

    //     } else if (command[0] === 'Remove') {
    //         for (let j = 0; j < numbers.length; j++) {
    //             if (numbers[j] === command[1]) {
    //                 numbers.splice(j, 1);
    //             }
    //         }

    //     } else if (command[0] === 'RemoveAt') {
    //         numbers.splice(command[1], 1);

    //     } else if (command[0] === 'Insert') {
    //         numbers.splice(command[2], 0, command[1]);

    //     }

    // }
    // console.log(numbers.join(' '));



    let numbers = arr[0].split(' ');
    arr.shift()

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');

        switch (command[0]) {

            case 'Add':
                add(command[1]);
                break;
            case 'Remove':
                remove(command[1]);
                break;
            case 'RemoveAt':
                removeAt(command[1]);
                break;
            case 'Insert':
                insert(command[1], command[2])
        }
    }

    function add(a) {
        numbers.push(a);
    }

    function remove(a) {
        for (let i = 0; i < numbers.length; i++) {
            numbers = numbers.filter(x => x != a);
        }
    }

    function removeAt(a) {
        numbers.splice(a, 1);
    }

    function insert(a, b) {
        numbers.splice(b, 0, a);
    }
    console.log(numbers.join(' '));

}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])