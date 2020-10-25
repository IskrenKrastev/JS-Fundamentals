function storage(input) {

    let store = new Map();

    input.forEach(line => {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);

        if (store.has(product)) {
            let oldQuantity = store.get(product);

            quantity += oldQuantity
        }

        store.set(product, quantity);

    });

    for (let kvp of store.entries()) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}
storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);