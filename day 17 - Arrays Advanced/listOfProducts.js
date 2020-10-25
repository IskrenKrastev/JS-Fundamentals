function listOfProducts(arr) {
    arr.sort();
    for (let index in arr) {
        console.log(`${Number(index) + 1}.${arr[index]}`)
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])