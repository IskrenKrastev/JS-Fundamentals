function wordOccurences(input) {

    let words = new Map;

    input.forEach(word => {
        let count = 1;
        if (words.has(word)) {
            let oldCount = words.get(word);
            oldCount += count;
            words.set(word, oldCount)

        } else {
            words.set(word, count)

        }
    });

    let sortedEntries = Array.from(words.entries()).sort((a, b) => {
        let valueA = a[1];
        let valueB = b[1];

        return valueB - valueA;
    });

    for (let kvp of sortedEntries) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }

}
wordOccurences([
    'Here', 'is',
    'the', 'first',
    'sentence', 'Here',
    'is', 'another',
    'sentence', 'And',
    'finally', 'the',
    'third', 'sentence'
]);