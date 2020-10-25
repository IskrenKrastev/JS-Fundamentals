function removeOccurrences(input) {
    let splited = input.split(' ');
    let [word, text] = splited;

    let pattern = new RegExp(`[^${word}]`, 'g')
    let matchedText = text.match(pattern);

    console.log(matchedText.join(''));
}
removeOccurrences('ice kicegiciceeb')