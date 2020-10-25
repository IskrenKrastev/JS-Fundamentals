function condenseArrayToNumber(input) {
    let num = input
    let sum = [];
    while (num.length > 1) {
        for (let i = 0; i < num.length - 1; i++) {
            sum.push(num[i] + num[i + 1]);

        }
        num = sum;
        sum = [];
    }


    console.log(num[0]);

}
condenseArrayToNumber([5, 0, 4, 1, 2])