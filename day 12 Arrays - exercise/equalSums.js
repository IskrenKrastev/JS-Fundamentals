function equalSums(numbers) {
    let rightSum = 0;
    let leftSum = 0;
    let isEqual = false

    let num = 0
    for (let i = 0; i < numbers.length - 1; i++) {


        for (let j = 0; j < i; j++) {
            leftSum += Number(numbers[j]);
        }
        for (let k = i + 1; k < numbers.length; k++) {
            rightSum += Number(numbers[k])
        }
        if (leftSum === rightSum) {
            num = i
            isEqual = true;

            break;

        }
        rightSum = 0;
        leftSum = 0;

    }
    if (leftSum) {
        console.log(num);

    } else {
        if (numbers.length < 2) {
            console.log('0');



        } else {
            console.log('no');
        }



    }

}
equalSums([1, 2])