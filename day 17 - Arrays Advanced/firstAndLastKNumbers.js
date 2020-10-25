function firstAndLastKNumbers(arr) {
    let elementK = arr.shift();
    let firstArr = arr.slice(0, elementK);
    let secondArr = arr.slice(arr.length - elementK, arr.length);
    console.log(firstArr.join(' '));
    console.log(secondArr.join(' '));

}
firstAndLastKNumbers([3, 6, 7, 8, 9])