function theImitationGame(input) {

    let encryptedMsg = input.shift();
    let line = input.shift();

    while (line !== 'Decode') {

        let [command, firstValue, secondValue] = line.split('|');

        switch (command) {

            case 'Move':
                firstValue = Number(firstValue);
                let substring = encryptedMsg.substring(0, firstValue);
                encryptedMsg = encryptedMsg.replace(substring, '');
                encryptedMsg = encryptedMsg + substring;

                break;

            case 'Insert':
                firstValue = Number(firstValue);
                encryptedMsg = encryptedMsg.split('');
                encryptedMsg.splice(firstValue, 0, secondValue);
                encryptedMsg = encryptedMsg.join('');
                break;

            case 'ChangeAll':
                while (encryptedMsg.indexOf(firstValue) > -1) {
                    encryptedMsg = encryptedMsg.replace(firstValue, secondValue)
                }
                break;
        }
        line = input.shift()
    }
    console.log(`The decrypted message is: ${encryptedMsg}`);
}
theImitationGame(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);