function sorting(arr) {
    let result = [];

    while (arr.length > 0) {
        arr.sort((a, b) => a - b);
        result.push(arr.pop(), arr.shift());
    }
    console.log(result.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])