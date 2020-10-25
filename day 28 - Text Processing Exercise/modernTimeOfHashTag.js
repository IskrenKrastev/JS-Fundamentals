function modernTimesOfHashTag(text) {

    text = text.split(' ');
    let isOnlyLetter = false

    text.forEach(word => {
        if (word.startsWith('#') && word.length > 1) {
            let newWord = word.substring(1)

            let splitetWord = newWord.split('')
            for (let el of splitetWord) {

                if (!((el.charCodeAt(0) > 64 && el.charCodeAt(0) < 91) || (el.charCodeAt(0) > 96 && el.charCodeAt(0) < 123))) {
                    isOnlyLetter = false;
                    break;
                } else {
                    isOnlyLetter = true;
                }
            }

            if (isOnlyLetter === true) {
                console.log(newWord);
            }
        }

    });
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special1 word in #socialMedia')