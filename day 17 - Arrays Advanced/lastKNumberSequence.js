function lastKNumberSequence(nNum, kNum) {

    let firstNum = 1;
    let result = [];
    let sum = 1;
    let sumArr;

    for (let i = 0; i < nNum; i++) {

        if (i < kNum) {
            sumArr = result.slice(0, result.length + 1);
        } else {
            sumArr = result.slice(result.length - kNum, result.length + 1);
        }


        for (let i = 0; i < sumArr.length; i++) {
            sum += Number(sumArr[i]);
        }

        result.push(sum);
        sum = 0;
    }

    console.log(result.join(' '));
}
lastKNumberSequence(6, 3)