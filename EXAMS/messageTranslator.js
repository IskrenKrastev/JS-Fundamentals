function messageTranslator(input) {

    let n = Number(input.shift());
    let pattern = /\!(?<command>[A-Z][a-z]{2,})\!\:\[(?<msg>[A-Za-z]{8,})\]/;
    let encryptedMsg = [];

    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let matched = line.match(pattern);

        if (matched !== null) {
            let command = matched.groups['command'];
            let msg = matched.groups['msg'];
            msg = msg.split('');

            msg.forEach(char => {
                encryptedMsg.push(char.charCodeAt())
            });
            console.log(`${command}: ${encryptedMsg.join(' ')}`);
        } else {
            console.log('The message is invalid');
        }
    }

}
messageTranslator(['2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]']);
messageTranslator([
    '3',
    'go:[outside]',
    '!drive!:YourCarToACarWash',
    '!Watch!:[LordofTheRings]'
]);
messageTranslator([
    '3',
    '!play!:[TheNewSong]',
    '!Ride!:[Bike]',
    '!Watch!:[LordofTheRings]'
]);