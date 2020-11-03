function schoolLibrary(input) {

    let bookShelf = input.shift().split('&');
    let line = input.shift();

    while (line !== 'Done') {
        let [command, firstArg, secondArg] = line.split(' | ');

        switch (command) {

            case 'Add Book':
                if (!bookShelf.includes(firstArg)) {
                    bookShelf.unshift(firstArg);
                }
                break;

            case 'Take Book':
                let index = bookShelf.indexOf(firstArg);
                if (index > -1) {
                    bookShelf.splice(index, 1);
                }
                break;

            case 'Swap Books':
                let indexOne = bookShelf.indexOf(firstArg);
                let indexTwo = bookShelf.indexOf(secondArg);

                if (indexOne > -1 && indexTwo > -1) {
                    [bookShelf[indexOne], bookShelf[indexTwo]] = [bookShelf[indexTwo], bookShelf[indexOne]]
                }
                break;

            case 'Insert Book':
                bookShelf.push(firstArg);
                break;

            case 'Check Book':
                firstArg = Number(firstArg)
                if (bookShelf[firstArg]) {
                    console.log(bookShelf[firstArg]);
                }
                break;
        }
        line = input.shift();
    }
    console.log(bookShelf.join(', '));
}
schoolLibrary([
    'Don Quixote&The Great Gatsby&Moby Dick&Hamlet',
    'Add Book | The Odyssey',
    'Take Book | Don Quixote',
    "Insert Book | Alice's Adventures in Wonderland",
    'Check Book | 3',
    'Done',
    '',
    '',
    ''
]);
schoolLibrary([
    'Anna Karenina&Heart of Darkness&Catch-22& The Stranger',
    'Add Book | David Copperfield',
    'Add Book | One Thousand and One Nights',
    'Swap Books | One Thousand and One Nights | Catch-22',
    'Take Book | David Copperfield',
    'Insert Book | The Stories of Anton Chekhov',
    'Check Book | 17',
    'Done',
    ''
]);