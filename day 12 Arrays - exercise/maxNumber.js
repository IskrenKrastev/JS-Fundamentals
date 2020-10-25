function maxNumber(numbers) {
    let maxArray = []



    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        let nextElements = numbers.slice(i + 1);

        let isBigger = true


        for (let j = 0; j < nextElements.length; j++) {
            if (element <= nextElements[j]) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            maxArray.push(element)
        }
    }
    console.log(maxArray.join(' '));




}
maxNumber([27,
    19,
    42,
    2,
    13,
    45,
    48
])