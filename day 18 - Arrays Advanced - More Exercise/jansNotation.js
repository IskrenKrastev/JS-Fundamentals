function jansNotation(arr) {
    let numbers = [];
    let sum = 0;
    let isError = false;
    let operators = [];


    for (let i = 0; i < arr.length; i++) {

        if ((typeof arr[i]) === 'number') {
            numbers.push(arr[i]);

        } else {
            operators.push(arr[i]);

            let operator = operators.shift();
            let lastNum = numbers.pop();
            let penultNum = numbers.pop();
            if (penultNum !== undefined) {
                switch (operator) {

                    case '+':
                        sum = penultNum + lastNum;
                        break;
                    case '-':
                        sum = penultNum - lastNum;
                        break;
                    case '*':
                        sum = penultNum * lastNum;
                        break;
                    case '/':
                        sum = penultNum / lastNum;
                        break;
                }
                numbers.push(sum);

            }
        }


    }
    if (numbers.length > 1) {
        isError = true;
        console.log('Error: too many operands!');
    }
    if (operators.length >= 1 || numbers.length - operators.length < 1) {
        isError = true;
        console.log('Error: not enough operands!');
    }

    if (isError === false) {
        console.log(sum);
    }

}
//jansNotation([31, 2, '+', 11, '/'])
//jansNotation([5, 3, 4, '*', '-'])
//jansNotation([7, 33, 8, '-'])
jansNotation([15, '/'])