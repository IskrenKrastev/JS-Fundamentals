function treasureFinder(input) {

    let key = input.shift();
    key = key.split(' ')
    let keyIndex = 0;
    let decrypt = '';
    let line = input.shift();

    while (line !== 'find') {
        line = line.split('');

        for (let char of line) {
            let decreaseWith = Number(key[keyIndex])
            let asciiChar = char.charCodeAt() - decreaseWith;
            let letter = String.fromCharCode(asciiChar);
            decrypt += letter;

            if (keyIndex === key.length - 1) {
                keyIndex = 0;
            } else {
                keyIndex++;
            }
        }

        let [type, position] = decrypt.split('<');
        position = position.split('');
        position.pop();
        type = type.split('&')
        console.log(`Found ${type[1]} at ${position.join('')}`);
        decrypt = '';
        keyIndex = 0

        line = input.shift();
    }
}
treasureFinder([
    '1 2 1 3',
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    'find'
]);