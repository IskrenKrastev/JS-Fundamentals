function sumEvenElements(arrayOfNumbers) {
    let sum = 0;
    for (let number of arrayOfNumbers) {
        number = Number(number)
        if (number % 2 === 0) {
            sum += number
        }

    }
    console.log(sum);

}
sumEvenElements(['1', '2', '3', '4', '5', '6'])