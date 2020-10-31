function emojiDetector(input) {

    let pattern = /([:]{2}|[*]{2})(?<emoji>[A-Z][a-z]{2,})(\1)/g;
    let emojis = input[0].matchAll(pattern);
    let newEmojisArr = [];

    let digitsPattern = /\d/g;
    let digits = input[0].match(digitsPattern);
    let coolness = 0;
    coolness = digits.reduce((a, b) => {
        return a * b
    });
    let emojisCount = 0

    if (emojis !== null) {

        for (let el of emojis) {
            emojisCount++
            let currentCool = 0
            let emoji = el.groups['emoji'];
            emoji = emoji.split('');

            emoji.forEach(char => {
                let asciiCode = char.charCodeAt()
                currentCool += asciiCode;
            });

            if (currentCool > coolness) {
                newEmojisArr.push(el[0])
            }
        }
    }

    console.log(`Cool threshold: ${coolness}`);
    if (emojisCount > 0) {
        console.log(`${emojisCount} emojis found in the text. The cool ones are:`);
        for (let emoji of newEmojisArr) {
            console.log(emoji);
        }
    }

}
emojiDetector([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
]);
emojiDetector([
    '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'
]);
emojiDetector([
    "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
]);