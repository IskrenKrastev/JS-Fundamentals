function printNthElement(arr) {
    let printOnLine = []

    for (let i = 0; i < arr.length - 1; i += Number(arr[arr.length - 1])) {
        printOnLine.push(arr[i])

    }
    console.log(printOnLine.join(' '));

}
printNthElement(['5', '20', '31', '14', '20', '2'])