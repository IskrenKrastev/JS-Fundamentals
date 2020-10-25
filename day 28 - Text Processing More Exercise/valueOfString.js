function valueOfString(input) {

    let text = input.shift();
    text = text.split('');
    let lowOrUp = input.shift();
    let sum = 0;

    if (lowOrUp === 'LOWERCASE') {
        text.forEach(letter => {
            if ((letter.charCodeAt() > 64 && letter.charCodeAt() < 91) ||
                (letter.charCodeAt() > 96 && letter.charCodeAt() < 123)) {
                if (letter === letter.toLowerCase()) {
                    sum += letter.charCodeAt()
                }
            }
        });
    } else {

        text.forEach(letter => {

            if ((letter.charCodeAt() > 64 && letter.charCodeAt() < 91) ||
                (letter.charCodeAt() > 96 && letter.charCodeAt() < 123)) {
                if (letter === letter.toUpperCase()) {
                    sum += letter.charCodeAt();
                }
            }
        });
    }

    console.log(`The total sum is: ${sum}`);
}
valueOfString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE', ''])