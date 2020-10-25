function postOffice(input) {

    let [firstPart, secondPart, thirdPart] = input[0].split('|');
    let patternFirstP = /([#$%*&])(?<capital>[A-Z]+)(\1)/;
    let firstMatch = firstPart.match(patternFirstP);
    let capitalLetters = firstMatch.groups['capital'];
    let uniqueMatch = [];
    let result = [];

    let patternSecond = /\d{2}\:\d{2}/g;
    let secondMatch = secondPart.match(patternSecond);
    for (let el of secondMatch) {
        if (!uniqueMatch.includes(el)) {
            uniqueMatch.push(el)
        }
    }

    uniqueMatch.forEach(element => {
        // трябва да премахна повтарщщите се елементи
        let splitedEl = element.split(':');
        let asciiCode = Number(splitedEl[0]);
        let wordsLength = Number(splitedEl[1]) + 1;
        let currentLetter = String.fromCharCode(asciiCode);


        if (capitalLetters.includes(currentLetter)) {

            let patternThird = /[^ ]+/g;
            let thirdMatch = thirdPart.match(patternThird);

            for (let word of thirdMatch) {
                if (word[0] === currentLetter && word.length === wordsLength) {
                    result[capitalLetters.indexOf(currentLetter)] = word
                }
            }
        }
    });
    console.log(result.join('\n'));
}
postOffice([
    'sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos'
]);
postOffice([
    'Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'
]);