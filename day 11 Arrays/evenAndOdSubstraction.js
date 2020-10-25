function evenAndOddSubstraction(arrayOfNumbers) {
    let evenSum = 0;
    let oddSum = 0;
    let result = 0;
    for (let num of arrayOfNumbers) {
        num = Number(num)
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num
        }

    }
    result = evenSum - oddSum;
    console.log(result);

}
evenAndOddSubstraction([1, 2, 3, 4, 5, 6])