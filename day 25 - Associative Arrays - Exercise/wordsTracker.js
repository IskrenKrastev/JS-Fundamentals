function wordsTracker(input) {
    let tracker = {};
    let words = input.shift().split(' ');

    words.forEach(word => {

        let quantity = 0;

        input.forEach(line => {

            if (word === line) {
                quantity++;
            }
        });
        tracker[word] = quantity;
    });

    let sortedWords = Object.entries(tracker).sort((a, b) => {
        return b[1] - a[1]
    });

    for (let word of sortedWords) {
        console.log(`${word[0]} - ${word[1]}`);
    }
}
wordsTracker([
    'this sentence', 'In',
    'this', 'sentence',
    'you', 'have',
    'to', 'count',
    'the', 'occurances',
    'of', 'the',
    'words', 'this',
    'and', 'sentence',
    'because', 'this',
    'is', 'your',
    'task'
]);