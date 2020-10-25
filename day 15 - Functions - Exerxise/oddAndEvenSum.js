function oddAndEvenSum(num) {
    // let evenSum = 0;
    // let oddSum = 0;
    // num = num.toString();

    // for (let i = 0; i < num.length; i++) {
    //     if (num[i] % 2 === 0) {
    //         evenSum += Number(num[i])
    //     } else {
    //         oddSum += Number(num[i]);
    //     }

    // }
    // console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);




    // следва решението на Кирил Кирилов
    num = num.toString();
    let oddSum = 0;
    let evenSum = 0;

    function isOdd(n) {
        return n % 2 !== 0;
    }

    function isEven(n) {
        return n % 2 === 0;
    }

    for (let i = 0; i < num.length; i++) {
        let digit = Number(num[i]);

        if (isOdd(digit)) {
            oddSum += digit;
        }
        if (isEven(digit)) {
            evenSum += digit;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);



}
oddAndEvenSum(1000435)