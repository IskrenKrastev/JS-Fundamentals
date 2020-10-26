function secretChats(input) {

    let secretMessage = input.shift();
    let line = input.shift();

    while (line !== 'Reveal') {
        let [command, firstValue, secondValue] = line.split(':|:');

        if (command === 'ChangeAll') {

            while (secretMessage.includes(firstValue)) {
                secretMessage = secretMessage.replace(firstValue, secondValue)
            }
            console.log(secretMessage);
        } else if (command === 'Reverse') {

            if (secretMessage.includes(firstValue)) {

                secretMessage = secretMessage.replace(firstValue, '');
                let reversed = firstValue.split('').reverse().join('');
                secretMessage = secretMessage + reversed
                console.log(secretMessage);
            } else {
                console.log('error');
            }

        } else if (command === 'InsertSpace') {
            let index = Number(firstValue);
            secretMessage = secretMessage.substring(0, index) + ' ' + secretMessage.substring(index);
            console.log(secretMessage);
        }
        line = input.shift();
    }
    console.log(`You have a new text message: ${secretMessage}`);
}
secretChats([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
secretChats([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);