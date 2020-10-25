function palindromeIntegers(arrOfNumbers) {
    //решение на Кирил Кирилов
    for (let num of arrOfNumbers) {
        console.log(isPalindrome(num));

    }

    function isPalindrome(num) {
        let reversedNum = '';
        let numToStr = num.toString();

        for (let i = numToStr.length - 1; i >= 0; i--) {
            reversedNum += numToStr[i] + '';
        }

        return numToStr === reversedNum;
    }




    // for (let i = 0; i < arrOfNumbers.length; i++) {
    //     let arr = arrOfNumbers[i]
    //     arr = arr.toString()
    //     let reversedArr = '';
    //     for (let j = arr.length - 1; j >= 0; j--) {
    //         reversedArr += arr[j] + '';
    //     }
    //     if (arr === reversedArr) {
    //         console.log('true');

    //     } else {
    //         console.log('false');

    //     }
    // }
}
palindromeIntegers([123, 323, 421, 121])