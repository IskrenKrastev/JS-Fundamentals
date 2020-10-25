function neighborhoods(input) {
    let neighborhood = new Map;
    let streets = input.shift().split(', ');

    streets.forEach(street => {
        neighborhood.set(street, []);
    });

    input.forEach(line => {
        let [currentStreet, person] = line.split(' - ');

        if (neighborhood.has(currentStreet)) {
            neighborhood.get(currentStreet).push(person)
        }
    });

    let sortedStreets = Array.from(neighborhood.entries()).sort((a, b) => {
        let streetA = a[1].length;
        let streetB = b[1].length;

        return streetB - streetA;
    });

    for (let street of sortedStreets) {
        console.log(`${street[0]}: ${street[1].length}`);

        for (let name of street[1]) {
            console.log(`--${name}`);
        }
    }
}
neighborhoods([
    'Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
]);