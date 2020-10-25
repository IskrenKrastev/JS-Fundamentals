function pascalCaseSpliter(text) {

    text = text.split('');
    let word = ''
    let result = []

    for (let i = 0; i < text.length; i++) {
        let asciiChar = text[i].charCodeAt(0);

        if (asciiChar > 64 && asciiChar < 91) {

            if (i !== 0) {
                result.push(word)
                word = '';
            }
            word += text[i];

            if (text[i + 1] === undefined) {
                result.push(word)
            }
        } else {
            word += text[i]
            if (text[i + 1] === undefined) {
                result.push(word)
            }
        }
    }
    console.log(result.join(', '));
}
pascalCaseSpliter('AASplitMeIfYouCanHaHaYouCantOrYouCanAA');
pascalCaseSpliter('AAaBB');
pascalCaseSpliter('ThisIsSoAnnoyingToDo');