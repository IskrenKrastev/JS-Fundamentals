function removeOccurrences(word, string) {

    while (string.indexOf(word) > -1) {
        string = string.replace(word, '')
    }
    console.log(string);
}
removeOccurrences('ice',
    'kicegiciceeb')