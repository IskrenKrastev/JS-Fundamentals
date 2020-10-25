function catalogue(input) {
    let items = {}

    input.forEach(line => {
        let [name, price] = line.split(' : ');
        items[name] = Number(price)
    });

    let catalogue = {};

    let firstLetter = ''
    for (let item of Object.keys(items).sort((a, b) => a.localeCompare(b))) {
        catalogue[item] = items[item];

        if (firstLetter !== item[0]) {
            firstLetter = item[0];
            console.log(firstLetter);
            console.log(`  ${item}: ${catalogue[item]}`);
        } else {
            console.log(`  ${item}: ${catalogue[item]}`);
        }

    }

}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])