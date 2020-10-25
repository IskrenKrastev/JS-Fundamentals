function reverseArrayOfStrings(stringArray) {

    for (let i = 0; i < stringArray.length / 2; i++) {
        let oldElement = stringArray[i];
        let previiousIndex = stringArray.length - 1 - i;
        stringArray[i] = stringArray[previiousIndex];
        stringArray[previiousIndex] = oldElement
    }
    console.log(stringArray.join(' '));
}
reverseArrayOfStrings(['aaB', 'bbC', 'ccD', 'ddE', 'eeF'])