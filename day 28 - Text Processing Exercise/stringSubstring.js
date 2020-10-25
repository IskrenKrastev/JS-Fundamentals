function stringSubstring(word, text) {
    word = word.toLowerCase();
    text = text.split(' ');
    let isFinded = false;

    for (let el of text) {
        el = el.toLowerCase()
        if (el === word) {
            console.log(word);
            isFinded = true;
            break;
        }
    }
    if (isFinded === false) {
        console.log(`${word} not found!`);
    }
}
stringSubstring('javascript',
    'JavaScript is the best programming language');

stringSubstring('python',
    'JavaScript is the best programming language');