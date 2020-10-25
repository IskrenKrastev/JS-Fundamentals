function rotateArray(arr) {
    let newArr = [];
    let rotation = arr[arr.length - 1];
    arr.pop();
    for (let i = 0; i < Number(rotation); i++) {
        let lastItem = arr[arr.length - 1]

        arr.unshift(lastItem)
        arr.pop();




    }
    console.log(arr.join(' '));

}
rotateArray(['1', '2', '3', '4', '2'])