function nikuldenCharity(input) {

    let encryptedMsg = input.shift();
    let line = input.shift();

    while (line !== 'Finish') {
        let [command, firstArg, secondArg] = line.split(' ');

        switch (command) {

            case 'Replace':
                while (encryptedMsg.includes(firstArg)) {
                    encryptedMsg = encryptedMsg.replace(firstArg, secondArg);
                }
                console.log(encryptedMsg);
                break;

            case 'Cut':
                firstArg = Number(firstArg);
                secondArg = Number(secondArg);
                if (encryptedMsg[firstArg] && encryptedMsg[secondArg]) {
                    let substring = encryptedMsg.substring(firstArg, secondArg + 1);
                    encryptedMsg = encryptedMsg.replace(substring, '');
                    console.log(encryptedMsg);
                } else {
                    console.log('Invalid indexes!');
                }
                break;

            case 'Make':
                if (firstArg === 'Upper') {
                    encryptedMsg = encryptedMsg.toUpperCase();
                } else {
                    encryptedMsg = encryptedMsg.toLowerCase()
                }
                console.log(encryptedMsg);
                break;

            case 'Check':
                if (!encryptedMsg.includes(firstArg)) {
                    console.log(`Message doesn't contain ${firstArg}`);
                } else {
                    console.log(`Message contains ${firstArg}`);
                }
                break;

            case 'Sum':
                firstArg = Number(firstArg);
                secondArg = Number(secondArg);
                if (encryptedMsg[firstArg] && encryptedMsg[secondArg]) {
                    let substr = encryptedMsg.substring(firstArg, secondArg + 1);
                    let sum = 0
                    substr = substr.split('');
                    substr.forEach(char => {
                        sum += char.charCodeAt()
                    });
                    console.log(sum);
                } else {
                    console.log('Invalid indexes!');
                }

                break;
        }


        line = input.shift();
    }
}
nikuldenCharity([
    'ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 4',
    'Cut 1 4',
    'Finish'
]);
nikuldenCharity([
    'HappyNameDay',
    'Replace p r',
    'Make Lower',
    'Cut 2 23',
    'Sum -2 2',
    'Finish'
]);
nikuldenCharity([
    'DinnerIsServed',
    'Make Upper',
    'Check Dinner',
    'Replace N M',
    'Finish'
]);