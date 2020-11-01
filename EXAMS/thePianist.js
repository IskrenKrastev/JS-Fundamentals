function thePianist(input) {

    let numberOfPieces = Number(input.shift());
    let line = input.shift();
    let listOfPieces = {};

    for (let i = 0; i < numberOfPieces; i++) {
        let [piece, composer, key] = line.split('|');

        listOfPieces[piece] = {
            composer: composer,
            key: key,
        }
        line = input.shift();
    }

    while (line !== 'Stop') {
        let [command, piece, composer, key] = line.split('|');

        if (command === 'Add') {

            if (listOfPieces[piece]) {
                console.log(`${piece} is already in the collection!`);
            } else {

                listOfPieces[piece] = {
                    composer: composer,
                    key: key,
                }
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (command === 'Remove') {

            if (listOfPieces[piece]) {
                delete listOfPieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command === 'ChangeKey') {
            key = composer;

            if (listOfPieces[piece]) {
                listOfPieces[piece].key = key;
                console.log(`Changed the key of ${piece} to ${key}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
        line = input.shift();
    }
    let sortedPieces = Object.entries(listOfPieces).sort((a, b) => {
        return a[0].localeCompare(b[0]) || listOfPieces[a[0]].composer.localeCompare(listOfPieces[b[0]].composer)
    });

    for (let el of sortedPieces) {
        console.log(`${el[0]} -> Composer: ${listOfPieces[el[0]].composer}, Key: ${listOfPieces[el[0]].key}`);
    }
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);