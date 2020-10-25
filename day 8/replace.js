function replace(firstWord, character, finalWord) {
    let matchWord = firstWord.replace('_', character);


    // for (let i = 0; i < firstWord.length; i++){
    //     if (firstWord[i] === '_'){

    //         matchWord += character
    //     }
    //     else{
    //         matchWord += firstWord[i]
    //     }
    // }


    if (matchWord === finalWord) {
        console.log('Matched')
    } else {
        console.log('Not Matched')
    }
}
replace('Str_ng', 'o', 'Strong')