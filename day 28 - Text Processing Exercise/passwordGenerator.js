function passwordGenerator(input) {

    let [firstWord, secondWord, thirdWord] = input;
    let currentChar;
    let indexForThird = 0;
    let pass = (firstWord + secondWord).toLowerCase();
    pass = pass.split('');

    thirdWord = thirdWord.toUpperCase();
    thirdWord = thirdWord.split('');


    function findingVowels(currentChar) {
        let isVowel = false;

        if (currentChar.charCodeAt(0) === 97 || currentChar.charCodeAt(0) === 101 ||
            currentChar.charCodeAt(0) === 105 ||
            currentChar.charCodeAt(0) === 111 || currentChar.charCodeAt(0) === 117) {

            isVowel = true
        }
        return isVowel;

    }

    for (let i = 0; i < pass.length; i++) {
        currentChar = pass[i];

        if (findingVowels(currentChar)) {
            let currentCharIndex = pass.indexOf(currentChar);
            pass.splice(currentCharIndex, 1, thirdWord[indexForThird]);

            if (indexForThird + 1 === thirdWord.length) {
                indexForThird = 0;
            } else {
                indexForThird++;
            }
        }
    }

    pass = pass.reverse()
    console.log(`Your generated password is ${pass.join('')}`);
}
// passwordGenerator([
//     'iLovepizza', 'ihatevegetables',
//     'orange'
// ]);

passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
]);