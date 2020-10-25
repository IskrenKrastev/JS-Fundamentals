function storeProvision(firstArr, secondArr) {
    let store = {};

    /* 
     Може с forEach вместо с for
     *
     *
    firstArr.forEach((element, i) => {
        if(i % 2 === 0){
             и тук влиза останалия код
        }
    });
    */

    for (let i = 0; i < firstArr.length; i += 2) {

        let product = firstArr[i];
        let quantity = Number(firstArr[i + 1]);
        store[product] = quantity;

    }


    for (let i = 0; i < secondArr.length; i += 2) {

        let product = secondArr[i];
        let quantity = Number(secondArr[i + 1]);
        if (store[product] === undefined) {
            store[product] = 0;
        };
        store[product] += quantity;

    }

    for (let product in store) {
        console.log(`${product} -> ${store[product]}`);
    }

}
storeProvision([
    'Chips', '5',
    'CocaCola', '9',
    'Bananas', '14',
    'Pasta', '4',
    'Beer', '2'
], [
    'Flour', '44',
    'Oil', '12',
    'Pasta', '7',
    'Tomatoes', '70',
    'Bananas', '30'
])