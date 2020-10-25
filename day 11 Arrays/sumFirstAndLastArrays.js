function sumFirstAndLastArrays(input) {
    let firstNumber = Number(input[0]);
    let lastNumber = Number(input[input.length - 1]);

    // let firstNumber = Number(input.shift());
    // let lastNumber = Number(input.pop())
    let sum = firstNumber + lastNumber;
    console.log(sum);

}
sumFirstAndLastArrays([20, 30, 40])