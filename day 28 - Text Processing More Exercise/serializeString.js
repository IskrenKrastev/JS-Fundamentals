function serializeString(arr) {
    let input = arr[0]



    let letters = {};

    for (let i = 0; i < input.length; i++) {
        if (!letters[input[i]]) {
            letters[input[i]] = [];
            letters[input[i]].push(i);
        } else {
            letters[input[i]].push(i)
        }
    }
    let entriesOfLetters = Object.entries(letters);

    for (let char of entriesOfLetters) {
        console.log(`${char[0]}:${char[1].join('/')}`);
    }
}

serializeString(['abababa', '']);
//serializeString(['avjavamsdmcalsdm', '']);