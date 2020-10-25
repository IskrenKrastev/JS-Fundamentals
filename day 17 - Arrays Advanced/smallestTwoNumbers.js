function smallestTwoNumbers(arr) {
    arr.sort((a, b) => a - b);
    let smallest = arr.slice(0, 2);
    console.log(smallest.join(' '))
}
smallestTwoNumbers([8, 6, 88, 0, 65, 3, 0])