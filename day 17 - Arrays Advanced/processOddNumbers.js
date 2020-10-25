function processOddNumbers(arr) {

    // let result = arr.map(x => x * 2);
    // let finalRes = result.filter((num, x) => x % 2 === 1)
    // finalRes.reverse()
    // console.log(finalRes.join(' '));




    // let result = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (i % 2 != 0) {
    //         result.push(Number(arr[i]) * 2)
    //     }
    // }
    // let finalResult = []
    // for (let i = result.length - 1; i >= 0; i--) {
    //     finalResult.push(result[i])
    // }
    // console.log(finalResult.join(' '));



    let double = function () {
        let doubleNums = [];
        for (let num of arr) {
            num = num * 2;
            doubleNums.push(num);
        }
        return doubleNums;
    }

    let oddPosition = function () {

        let oddPos = [];
        for (let i = 0; i < double().length; i++) {
            if (i % 2 == 1) {
                oddPos.push(double()[i])
            }
        }

        return oddPos;
    }

    let reverseArr = function () {
        let reversed = [];
        for (let i = oddPosition().length - 1; i >= 0; i--) {

            reversed.push(oddPosition()[i])
        }
        return reversed;
    }

    console.log(reverseArr().join(' '))

}
processOddNumbers([10, 15, 20, 25]);