function characterInRange(charOne, charTwo) {
    numCharOne = charOne.charCodeAt();
    numCharTwo = charTwo.charCodeAt();
    let rangeInLine = ''


    for (let i = Math.min(numCharOne, numCharTwo) + 1; i < Math.max(numCharOne, numCharTwo); i++) {
        rangeInLine += String.fromCharCode(i) + ' ';
    }
    return rangeInLine;

    // моя код е най кратък , но се разминава с темата  и изискванията за раздробяване на функции




    // следва ХРИСТОМИР АСЕНОВ
    // let startAsciiValue = getAsciiValue(charOne);
    // let endAsciiValue = getAsciiValue(charTwo);

    // let startPoint = Math.min(startAsciiValue, endAsciiValue);
    // let endPoint = Math.max(startAsciiValue, endAsciiValue);

    // printAsciiSymbols(startPoint, endPoint);


    // function getAsciiValue(char) {
    //     return char.charCodeAt();
    // }

    // function printAsciiSymbols(after, before) {
    //     let symbols = [];

    //     for (let i = after + 1; i < before; i++) {
    //         symbols.push(String.fromCharCode(i))
    //     }
    //     console.log(symbols.join(' '));

    // }






    // следва Кирил Кирилов 

    // let firstCode = charOne.charCodeAt(0);
    // let secondCode = charTwo.charCodeAt(0);

    // let start = Math.min(firstCode, secondCode);
    // let end = Math.max(firstCode, secondCode);

    // let characters = [];

    // for (let i = start + 1; i < end; i++) {
    //     let currentCharacter = String.fromCharCode(i);
    //     characters.push(currentCharacter)
    // }
    // console.log(characters.join(' '));

}
characterInRange('d', 'a');