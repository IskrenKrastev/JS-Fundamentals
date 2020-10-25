function countStringOccurrences(text, word) {
    let count = 0;
    text = text.split(' ');

    text.forEach(searched => {
        if (searched === word) {
            count++
        }
    })

    console.log(count);
}
countStringOccurrences('This is a word and it also is a sentence', 'is')