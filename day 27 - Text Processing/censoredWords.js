function censoredWords(text, word) {

    let censured = '*'.repeat(word.length);

    while (text.includes(word)) {
        text = text.replace(word, censured)
    }
    console.log(text);
}
censoredWords('A small sentence with some words', 'small')