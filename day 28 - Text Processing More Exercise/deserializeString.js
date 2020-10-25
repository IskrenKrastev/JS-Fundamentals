function deserializeString(input) {
    let text = [];
    for (let element of input) {

        if (element !== 'end') {
            let [letter, indexes] = element.split(':');
            indexes = indexes.split('/');

            indexes.forEach(index => {
                text[index] = letter
            });
        } else {
            break;
        }
    }
    console.log(text.join(''));
}
deserializeString(['a:0/2/4/6', 'b:1/3/5', 'end'])