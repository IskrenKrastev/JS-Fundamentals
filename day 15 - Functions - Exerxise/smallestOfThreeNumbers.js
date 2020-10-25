function smallestOfThreeNumbers(firstNum, secondNum, thirdNum) {
    smallestNum = 0;

    if (firstNum <= secondNum && firstNum <= thirdNum) {
        smallestNum = firstNum
    } else if (secondNum <= firstNum && secondNum <= thirdNum) {
        smallestNum = secondNum
    } else if (thirdNum <= firstNum && thirdNum <= secondNum) {
        smallestNum = thirdNum
    }
    return smallestNum;

}
console.log(smallestOfThreeNumbers(2, 5, 3));