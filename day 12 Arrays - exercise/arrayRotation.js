function arrayRotation(arr, n) {
    // let lastPosition = []
    // let delArr = []

    // for (let i = 0; i < n; i++) {

    //     lastPosition.push(arr[i])
    // }
    // for (let i = 0; i < n; i++) {
    //     delArr = arr.shift()
    // }
    // arr.push(lastPosition.join(' '))
    // console.log(arr.join(' '));
    let rotation = []

    for (let i = 0; i < n; i++) {
        let element = arr.shift();
        arr.push(element)
    }
    console.log(arr.join(' '));


}
arrayRotation([51, 47, 32, 61, 21], 2)