function sumFirstLast(arr) {

    arr = arr.map(Number); // преобразува всички в  Number
    console.log(arr[0] + arr.pop());

}
sumFirstLast([20, 30, 40]);