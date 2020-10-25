function wordOccurrences(input) {

    let words = {};

    for (let word of input) {
        let quantity = 1;

        if (words[word]) {
            let oldQuantity = words[word]
            oldQuantity += quantity
            words[word] = oldQuantity;
        } else
            words[word] = quantity
    }

    let sortedWords = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (let word of sortedWords) {
        console.log(`${word[0]} -> ${word[1]} times`);
    }
}
wordOccurrences([
    'Here', 'is',
    'the', 'first',
    'sentence', 'Here',
    'is', 'another',
    'sentence', 'And',
    'finally', 'the',
    'third', 'sentence'
])