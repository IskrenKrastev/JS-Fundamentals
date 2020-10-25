function simpleCalc(num1, num2, operation) {
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    switch (operation) {
        case 'multiply':
            return multiply(num1, num2);

        case 'divide':
            return divide(num1, num2);

        case 'add':
            return add(num1, num2);

        case 'subtract':
            return subtract(num1, num2);

    }
}
let result = simpleCalc(5, 5, 'multiply');
console.log(result);