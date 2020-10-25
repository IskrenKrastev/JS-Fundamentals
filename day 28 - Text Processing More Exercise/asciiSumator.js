function asciiSumator(input) {
    let firstChar = input.shift();
    let firstAscii = firstChar.charCodeAt();
    let secondChar = input.shift();
    let secondAscii = secondChar.charCodeAt();
    let text = input.shift();
    text = text.split('');

    let sum = 0;

    text.forEach(char => {
        let asciiValue = char.charCodeAt();

        if (asciiValue > Math.min(firstAscii, secondAscii) && asciiValue < Math.max(secondAscii, firstAscii)) {
            sum += asciiValue;
        }

    });
    console.log(sum);

}
asciiSumator(['a', '1', 'jfe392$#@j24ui9ne#@$']);