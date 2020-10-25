function reverseArrayOfNumbers(num, numbers) {

    let newArray = [];
    for (let i = 0; i < num; i++) {
        // newArray.push(numbers[i])
        newArray[num - 1 - i] = numbers[i];
        /* 
        последният елеемент =  numbers[i] , т.е.
        В newArray  се запазват в масив всяко следващо число,
         самно че последното е равно на 10 и т.н.
        */
    }
    // let result = ''
    // for (let j = newArray.length - 1; j >= 0; j--) {
    //     result += ' ' + newArray[j]
    // }
    // console.log(result);

    console.log(newArray.join(' '))

}
reverseArrayOfNumbers(3, [10, 20, 30, 40, 50])