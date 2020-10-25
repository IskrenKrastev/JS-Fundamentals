function factorialDivision(firstNum, secondNum) {
    function factorial(num) {
        let factorialSum = 1;
        for (let i = num; i > 0; i--) {
            factorialSum *= i;
        }
        return factorialSum;
    }
    let factorialOne = factorial(firstNum);
    let factorialTwo = factorial(secondNum);
    let division = factorialOne / factorialTwo;

    console.log(division.toFixed(2))
}
factorialDivision(5, 2)