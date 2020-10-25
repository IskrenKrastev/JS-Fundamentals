function neighborhoods(input) {
    let neighborhood = {};
    let streets = input.shift().split(', ');
    streets.forEach(street => {
        neighborhood[street] = []
    });

    input.forEach(line => {
        // people = [];
        let [street, name] = line.split(' - ');

        if (neighborhood.hasOwnProperty(street)) {

            neighborhood[street].push(name)
        }
    });

    let sortedNeighborhood = Object.entries(neighborhood).sort((a, b) => {
        let arrA = a[1].length;
        let arrB = b[1].length;

        return arrB - arrA;
    });

    for (let inhabitant of sortedNeighborhood) {
        console.log(`${inhabitant[0]}: ${inhabitant[1].length}`);
        for (let name of inhabitant[1]) {
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