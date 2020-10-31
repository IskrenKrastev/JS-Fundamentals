function activationKeys(input) {

    let actKey = input.shift();
    let line = input.shift();

    while (line !== 'Generate') {
        let [command, firstValue, secondValue, thirdValue] = line.split('>>>');

        switch (command) {

            case 'Contains':
                let substring = firstValue;

                if (actKey.includes(substring)) {
                    console.log(`${actKey} contains ${substring}`);
                } else {
                    console.log('Substring not found!');
                }
                break;

            case 'Flip':
                let uppOrLowCase = firstValue;
                let start = Number(secondValue);
                let end = Number(thirdValue);
                let currSubstring = actKey.substring(start, end);


                if (uppOrLowCase === 'Upper') {
                    actKey = actKey.replace(currSubstring, currSubstring.toUpperCase())
                } else {
                    actKey = actKey.replace(currSubstring, currSubstring.toLowerCase())

                }
                console.log(actKey);
                break;

            case 'Slice':
                let startIndex = Number(firstValue);
                let endIndex = Number(secondValue);
                let substr = actKey.substring(startIndex, endIndex);
                actKey = actKey.replace(substr, '');
                console.log(actKey);
                break;
        }


        line = input.shift();
    }
    console.log(`Your activation key is: ${actKey}`);
}
activationKeys([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
]);
activationKeys([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
]);