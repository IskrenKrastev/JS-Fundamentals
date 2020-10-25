function stringIterator(text) {
    let splitedText = text.split(' ');
    for (let word of splitedText) {
        console.log(word);
    }
}
stringIterator('Et cillum do voluptate cillum ut cupidatat aliqua.')