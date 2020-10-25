function magicSum(arr, num) {
    let sum = 0;
    let num1 = 0;
    let num2 = 0;
    for (let i = 0; i < arr.length; i++) {
        num1 = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            num2 = arr[j];
            sum = num1 + num2;
            if (sum === num) {
                console.log(`${num1} ${num2}`);

            }
            sum = 0;

        }


    }
}
magicSum([1, 7, 6, 2, 19, 23], 8)