function merlahShake(input) {

    let text = input.shift();
    let pattern = input.shift();


    while (pattern.length > 0) {
        let firstMatch = text.indexOf(pattern);
        let lastMatch = text.lastIndexOf(pattern);

        if ((firstMatch > -1 && lastMatch > -1) && firstMatch !== lastMatch) {

            // let firstRemove = text.substr(firstMatch, pattern.length);
            // let lastRemove = text.substr(lastMatch, pattern.length);

            text = text.replace(text.substr(firstMatch, pattern.length), '');
            lastMatch = text.lastIndexOf(pattern);

            text = text.replace(text.substr(lastMatch, pattern.length), '');

            let removeFromPatt = pattern[Math.floor(pattern.length / 2)]
            pattern = pattern.replace(removeFromPatt, '')

            console.log('Shaked it.');
        } else {
            console.log('No shake.');
            console.log(text);

            break;
        }
    }
}

merlahShake(['stastasasssastasta', 'sta', '']);