function addAndSubtract(a, b, c) {
    function sum(num1, num2) {
        return num1 + num2;
    }

    function substract(a, b) {
        return a - b;
    }

    let sumResult = sum(a, b);
    let subResult = substract(sumResult, c);
    return subResult;

}
console.log(addAndSubtract(23, 6, 10));