function commonElemnts(arr1, arr2) {

    for (let element1 of arr1) {
        for (let element2 of arr2) {
            if (element2 === element1) {
                console.log(element2);

            }
        }
    }
}
commonElemnts(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])