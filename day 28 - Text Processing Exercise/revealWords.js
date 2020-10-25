(function revealWords(words, text) {

    words = words.split(', ');
    words = words.sort((a, b) => {
        return b.length - a.length
    });
    words.forEach(word => {

        let starsLength = '*'.repeat(word.length);
        text = text.replace(starsLength, word)
    });

    console.log(text);

})
revealWords('learning, great',
    'softuni is ***** place for ******** new programming languages'
)