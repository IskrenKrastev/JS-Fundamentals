function storage(input) {

    let store = {};
    input.forEach(line => {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity)
        if (store[product]) {
            let oldQuantity = store[product];
            oldQuantity += quantity;
            store[product] = oldQuantity
        } else {
            store[product] = quantity;

        }
    });

    let entries = Object.entries(store);

    for (let item of entries) {
        console.log(`${item[0]} -> ${item[1]}`);
    }
}
storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);