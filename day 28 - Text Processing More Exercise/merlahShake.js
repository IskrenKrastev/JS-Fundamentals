function merlahShake(input) {

    let text = input.shift();
    let pattern = input.shift();


    while (pattern.length > 0) {
        let firstMatch = text.indexOf(pattern);
        let lastMatch = text.lastIndexOf(pattern);

        if ((firstMatch > -1 && lastMatch > -1) && firstMatch !== lastMatch) {

            let firstRemove = text.substr(0, firstMatch);
            let lastRemove = text.substr(firstMatch + pattern.length);

            text = firstRemove + lastRemove;

            lastMatch = text.lastIndexOf(pattern)
            firstRemove = text.substring(0, lastMatch);
            lastRemove = text.substring(lastMatch + pattern.length)

            text = firstRemove + lastRemove

            //let removeFromPatt = pattern[Math.floor(pattern.length / 2)];
            let pattOne = pattern.substring(0, pattern.length / 2);
            let pattTwo = pattern.substring(pattern.length / 2 + 1);
            pattern = pattOne + pattTwo



            console.log('Shaked it.');
        } else {

            break;
        }
    }
    console.log('No shake.');
    console.log(text);
}