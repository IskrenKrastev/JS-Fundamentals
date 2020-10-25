function perfectNumber(num) {
    let sum = 0;

    function isPerfectNum(num) {
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                sum += i
            }
        }
        return sum;
    }
    let perfectSum = isPerfectNum(num);

    if (num === perfectSum) {
        console.log('We have a perfect number!');

    } else {
        console.log("It's not so perfect.");

    }
}
perfectNumber(28)